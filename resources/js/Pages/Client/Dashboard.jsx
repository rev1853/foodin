import Filter from "@/Components/Client/Filter";
import Menu from "@/Components/Client/Menu";
import Pagination from "@/Components/Client/Pagination";
import Alert from "@/Helpers/Alert";
import { service } from "@/Services/Admin/Services";

const { default: Layout } = require("@/Layouts/Client/Layout");
const { Component } = require("react");

class Dashboard extends Component {
    url = '/menu';
    params;

    constructor(props) {
        super(props);
        this.state = {
            menus: [],
            paginations: {},
        };
    }

    componentDidMount() {
        this.loadMenus();
    }

    onFilterChange = (data) => {
        const dataParams = { ...data };
        dataParams.rating = JSON.stringify(dataParams.rating);
        dataParams.idcategory = JSON.stringify(dataParams.idcategory);
        this.params = new URLSearchParams(dataParams).toString();
        this.loadMenus();
    }

    async loadMenus() {
        try {
            let url = this.url;
            if (url.includes('?')) {
                url += "&" + this.params;
            } else {
                url += "?" + this.params;
            }
            const response = await service.get(url);

            if (response.status == 200) {
                const data = response.data.data;
                delete response.data.data;
                const paginations = response.data;
                this.setState(() => ({ menus: data, paginations: paginations }));
            } else {
                await Alert.failed("Load data failed, try again later");
            }
        } catch (e) {
            console.log(e);
            await Alert.error("An error occured while load data");
        }
    }

    onPaginationClick = (url) => {
        this.url = url;
        this.loadMenus();
    }

    render() {
        return (
            <>
                <Filter onChange={this.onFilterChange} />
                <div className="col s12 m12 l9 pr-0">
                    <div className="electronic-products">
                        {this.state.menus.map((menu, index) => <Menu key={index} data={menu} />)}
                    </div>

                    <div className="col s12 center">
                        <Pagination onClick={this.onPaginationClick} paginations={this.state.paginations} />
                    </div>
                </div>
            </>
        );
    }
}
Dashboard.layout = page => <Layout>{page}</Layout>;

export default Dashboard;