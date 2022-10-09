import Button from "@/Components/Admin/Button";
import DataTable from "@/Components/Admin/DataTable";
import FormModal from "@/Components/Admin/FormModal";
import IconButton from "@/Components/Admin/IconButton";
import Input from "@/Components/Admin/Input";
import Select from "@/Components/Admin/Select";
import Textarea from "@/Components/Admin/Textarea";
import Alert from "@/Helpers/Alert";
import Layout from "@/Layouts/Admin/Layout";
import { service } from "@/Services/Admin/Services";
import { Ziggy } from "@/ziggy";

const { Component, createRef } = require("react");

class Menu extends Component {

    tableHeaders = ["NO", "NAME", "PRICE", "RATING COUNT", "RATING SUM", "ACTION"];
    tableColumnNames = ["name", "price", "ratingcount", "ratingsum"];

    modalRef;
    tableRef;
    nameRef;
    priceRef;
    descriptionRef;
    categoryRef;
    tagsRef;

    constructor(props) {
        super(props);
        this.modalRef = createRef();
        this.tableRef = createRef();
        this.nameRef = createRef();
        this.priceRef = createRef();
        this.descriptionRef = createRef();
        this.categoryRef = createRef();
        this.tagsRef = createRef();
        this.state = {
            isLoading: false,
            isEdit: false,
        };
    }

    tableActionBuilder = (index, data) => {
        return (
            <td key={`action-${index}`}>
                <div className="d-flex">
                    <Button onClick={(e) => this.showEditModal(e, data.idmenu)} color="primary"><i className="fa fa-pencil"></i></Button>
                    <Button onClick={(e) => this.deleteData(e, data.idmenu)} color="danger"><i className="fa fa-trash"></i></Button>
                </div>
            </td>
        );
    }

    loadEditData = async () => {
        try {
            this.modalRef.current.loadingStart();
            const response = await service.request({ url: this.modalRef.current.url, method: "get" });

            if (response.status == 200) {
                const data = response.data;
                this.nameRef.current.value = data.name;
                this.priceRef.current.value = data.price;
                this.descriptionRef.current.value = data.description;
                this.categoryRef.current.value = data.idcategory;
                this.tagsRef.current.value = data.tags.map(value => value.idtag);
            } else {
                await Alert.failed("Load data failed, try again later");
            }
        } catch {
            await Alert.error("An error occured while load data");
            this.modalRef.current.hide();
        } finally {
            this.modalRef.current.loadingComplete();
        }
    }

    async loadCategories() {
        try {
            this.modalRef.current.loadingStart();
            const response = await service.get('/category/select');

            if (response.status == 200) {
                this.categoryRef.current.options = response.data.map(value => ({ value: value.idcategory, text: value.name }));
            } else {
                await Alert.failed("Load data failed, try again later");
            }
        } catch {
            await Alert.error("An error occured while load data");
            this.modalRef.current.hide();
        } finally {
            this.modalRef.current.loadingComplete();
        }
    }

    async loadTags() {
        try {
            this.modalRef.current.loadingStart();
            const response = await service.get('/tag/select');

            if (response.status == 200) {
                this.tagsRef.current.options = response.data.map(value => ({ value: value.idtag, text: value.name }));
            } else {
                await Alert.failed("Load data failed, try again later");
            }
        } catch {
            await Alert.error("An error occured while load data");
            this.modalRef.current.hide();
        } finally {
            this.modalRef.current.loadingComplete();
        }
    }

    showCreateModal = () => {
        this.setState(() => ({ isEdit: false }));
        this.modalRef.current.show('/menu', 'post');
    }

    showEditModal = (e, id) => {
        e.preventDefault();
        this.setState(() => ({ isEdit: true }));
        this.modalRef.current.show(`/menu/${id}`, 'put');
    }

    async deleteData(e, id) {
        e.preventDefault();
        try {
            const response = await service.request({ url: `/menu/${id}`, method: "delete" });
            if (response.status == 200) {
                await Alert.success("Delete data success");
                this.tableRef.current.reload();
            } else {
                Alert.failed("Delete data failed, try again later");
            }
        } catch {
            Alert.error("An error occured while delete data");
        }
    }

    onFormModalShown = async () => {
        this.nameRef.current.clear();
        this.priceRef.current.clear();
        this.descriptionRef.current.clear();
        this.categoryRef.current.clear();
        this.tagsRef.current.clear();

        await this.loadCategories();
        await this.loadTags();
        if (this.state.isEdit) {
            this.loadEditData();
        }
    }

    onFormModalHidden = () => {
        this.setState(() => ({ isLoading: false, isEdit: false }));
    }

    onFormModalLoadingStart = () => {
        this.setState(() => ({ isLoading: true }));
    }

    onFormModalLoadingComplete = () => {
        this.setState(() => ({ isLoading: false }));
    }

    onFormModalSuccess = () => {
        this.tableRef.current.reload();
    }

    formDataBuilder = () => {
        const data = {
            'name': this.nameRef.current.value,
            'price': this.priceRef.current.value,
            'description': this.descriptionRef.current.value,
            'idcategory': this.categoryRef.current.value,
            'tags': this.tagsRef.current.value.map(value => ({ 'idtag': value })),
        };
        console.log(data);
        return data;
    }

    render() {
        return (
            <div className="col-lg-12">
                <FormModal
                    ref={this.modalRef}
                    onShown={this.onFormModalShown}
                    onLoadingStart={this.onFormModalLoadingStart}
                    onLoadingComplete={this.onFormModalLoadingComplete}
                    onSubmit={this.onFormModalSubmit}
                    onComplete={this.onFormModalComplete}
                    onSuccess={this.onFormModalSuccess}
                    dataBuilder={this.formDataBuilder}
                    title="Form Menu">

                    <Input disabled={this.state.isLoading} ref={this.nameRef} type="text" label="Name" placeholder="Enter menu name" />
                    <Input disabled={this.state.isLoading} ref={this.priceRef} type="number" label="Price" placeholder="Enter menu price" />
                    <Textarea disabled={this.state.isLoading} ref={this.descriptionRef} label="Description" placeholder="Enter menu description" />
                    <Select disabled={this.state.isLoading} ref={this.categoryRef} label="Category" options={[]} />
                    <Select multiple={true} disabled={this.state.isLoading} ref={this.tagsRef} label="Tags" options={[]} />
                </FormModal>

                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Menu</h4>
                        <div>
                            <IconButton color="success" icon="fa-plus" text="Create New" onClick={this.showCreateModal} />
                        </div>
                    </div>
                    <div className="card-body">
                        <DataTable ref={this.tableRef} columnNames={this.tableColumnNames} headers={this.tableHeaders} actionBuilder={this.tableActionBuilder} urlPath="/menu" />
                    </div>
                </div>
            </div>
        );
    }
}

Menu.layout = page => <Layout title="Menu">{page}</Layout>

export default Menu;