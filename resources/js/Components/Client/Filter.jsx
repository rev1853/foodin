import Alert from "@/Helpers/Alert";
import { service } from "@/Services/Admin/Services";

const { Component } = require("react");

class Filter extends Component {
    data = { rating: [], idcategory: [], search: '' };

    constructor(props) {
        super(props);
        this.state = { categories: [] };
    }

    componentDidMount() {
        this.loadCategories();
        document.getElementById('top-search').addEventListener('keyup', this.onInputChange);
    }

    async loadCategories() {
        try {
            const response = await service.get('/category/select');

            if (response.status == 200) {
                const categories = response.data.map(value => ({ value: value.idcategory, text: value.name }));
                this.setState(() => ({ categories: categories }));
            } else {
                await Alert.failed("Load data failed, try again later");
            }
        } catch {
            await Alert.error("An error occured while load data");
        }
    }

    onInputChange = (ev) => {
        this.data.search = ev.target.value;
        this.onChange();
    }

    onChange = () => {
        if (this.props.onChange) this.props.onChange(this.data);
    }

    onRatingClick = (ev, count) => {
        if (ev.target.checked) {
            this.data.rating.push(count);
        } else {
            let index = this.data.rating.indexOf(count);
            this.data.rating.splice(index, index + 1);
        }
        this.onChange();
    }

    onCategoryClick = (ev, id) => {
        if (ev.target.checked) {
            this.data.idcategory.push(id);
        } else {
            let index = this.data.idcategory.indexOf(id);
            this.data.idcategory.splice(index, index + 1);
        }
        this.onChange();
    }

    render() {
        return (
            <div className="col s12 m3 l3 pr-0 hide-on-med-and-down animate fadeLeft">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Category</span>
                        <hr className="p-0 mb-10"></hr>
                        <form action="#" className="display-grid">
                            {this.state.categories.map((value, index) => <label key={index}>
                                <input type="checkbox" onClick={(ev) => this.onCategoryClick(ev, value.value)}></input>
                                <span>{value.text}</span>
                            </label>)}
                        </form>
                        <span className="card-title mt-10">Ratings</span>
                        <hr className="p-0 mb-10"></hr>
                        <form action="#" className="display-grid">
                            <label>
                                <input onClick={(ev) => this.onRatingClick(ev, 5)} type="checkbox"></input>
                                <span>
                                    <i className="material-icons amber-text"> star </i>
                                    <i className="material-icons amber-text"> star </i>
                                    <i className="material-icons amber-text"> star </i>
                                    <i className="material-icons amber-text"> star </i>
                                    <i className="material-icons amber-text"> star </i>
                                </span>
                            </label>
                            <label>
                                <input onClick={(ev) => this.onRatingClick(ev, 4)} type="checkbox"></input>
                                <span>
                                    <i className="material-icons amber-text"> star </i>
                                    <i className="material-icons amber-text"> star </i>
                                    <i className="material-icons amber-text"> star </i>
                                    <i className="material-icons amber-text"> star </i>
                                </span>
                            </label>
                            <label>
                                <input onClick={(ev) => this.onRatingClick(ev, 3)} type="checkbox"></input>
                                <span>
                                    <i className="material-icons amber-text"> star </i>
                                    <i className="material-icons amber-text"> star </i>
                                    <i className="material-icons amber-text"> star </i>
                                </span>
                            </label>
                            <label>
                                <input onClick={(ev) => this.onRatingClick(ev, 2)} type="checkbox"></input>
                                <span>
                                    <i className="material-icons amber-text"> star </i>
                                    <i className="material-icons amber-text"> star </i>
                                </span>
                            </label>
                            <label>
                                <input onClick={(ev) => this.onRatingClick(ev, 1)} type="checkbox"></input>
                                <span>
                                    <i className="material-icons amber-text"> star </i>
                                </span>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Filter;