import Button from "@/Components/Admin/Button";
import DataTable from "@/Components/Admin/DataTable";
import FormModal from "@/Components/Admin/FormModal";
import IconButton from "@/Components/Admin/IconButton";
import Input from "@/Components/Admin/Input";
import Alert from "@/Helpers/Alert";
import Layout from "@/Layouts/Admin/Layout";
import { service } from "@/Services/Admin/Services";
import { Ziggy } from "@/ziggy";

const { Component, createRef } = require("react");

class Category extends Component {

    tableHeaders = ["NO", "NAME", "POSITION", "ACTION"];
    tableColumnNames = ["name", "position"];

    modalRef;
    tableRef;
    nameRef;
    positionRef;

    constructor(props) {
        super(props);
        this.modalRef = createRef();
        this.tableRef = createRef();
        this.nameRef = createRef();
        this.positionRef = createRef();
        this.state = {
            isLoading: false,
            isEdit: false,
        };
    }

    tableActionBuilder = (index, data) => {
        return (
            <td key={`action-${index}`}>
                <div className="d-flex">
                    <Button onClick={(e) => this.showEditModal(e, data.idcategory)} color="primary"><i className="fa fa-pencil"></i></Button>
                    <Button onClick={(e) => this.deleteData(e, data.idcategory)} color="danger"><i className="fa fa-trash"></i></Button>
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
                this.positionRef.current.value = data.position;
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
        this.modalRef.current.show('/category', 'post');
    }

    showEditModal = (e, id) => {
        e.preventDefault();
        this.setState(() => ({ isEdit: true }));
        this.modalRef.current.show(`/category/${id}`, 'put');
    }

    async deleteData(e, id) {
        e.preventDefault();
        try {
            const response = await service.request({ url: `/category/${id}`, method: "delete" });
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

    onFormModalShown = () => {
        this.nameRef.current.clear();
        this.positionRef.current.clear();

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
            'position': this.positionRef.current.value,
        };
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
                    title="Form Category">

                    <Input disabled={this.state.isLoading} ref={this.nameRef} type="text" label="Name" placeholder="Enter category name" />
                    <Input disabled={this.state.isLoading} ref={this.positionRef} type="number" label="Position" placeholder="Enter category position" />

                </FormModal>

                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Menu Category</h4>
                        <div>
                            <IconButton color="success" icon="fa-plus" text="Create New" onClick={this.showCreateModal} />
                        </div>
                    </div>
                    <div className="card-body">
                        <DataTable ref={this.tableRef} columnNames={this.tableColumnNames} headers={this.tableHeaders} actionBuilder={this.tableActionBuilder} urlPath="/category" />
                    </div>
                </div>
            </div>
        );
    }
}

Category.layout = page => <Layout title="Categories">{page}</Layout>

export default Category;