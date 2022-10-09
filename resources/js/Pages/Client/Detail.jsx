import Comment from "@/Components/Client/Comment";
import Alert from "@/Helpers/Alert";
import SharedData from "@/Helpers/SharedData";
import { service } from "@/Services/Admin/Services";
import RatingBar from "./RatingBar";

const { default: Layout } = require("@/Layouts/Client/Layout");
const { Component, createRef } = require("react");

class Detail extends Component {
    ratingBarRef;
    ratingBar2Ref;
    descriptionRef;

    constructor(props) {
        super(props);
        this.state = { menu: undefined };
        this.ratingBarRef = createRef();
        this.ratingBar2Ref = createRef();
        this.descriptionRef = createRef();
    }

    componentDidMount() {
        this.loadMenu();
    }

    async loadMenu() {
        try {
            const response = await service.get('/menu/' + this.props.id);
            if (response.status == 200) {
                this.setState(() => ({ menu: response.data }),);
                this.ratingBar2Ref.current.value = this.stars

            } else {
                await Alert.failed("Load data failed, try again later");
            }
        } catch (e) {
            console.log(e);
            await Alert.error("An error occured while load data");
        }
    }

    async rate() {
        try {
            const response = await service.post('/menu/rate/' + this.props.id, this.rateData);
            if (response.status == 200) {
                await Alert.success("Thanks for your rating");
                this.loadMenu();
            } else {
                await Alert.failed("Load data failed, try again later");
            }
        } catch (e) {
            console.log(e);
            await Alert.error("An error occured while load data");
        }
    }

    get name() {
        if (!this.state.menu) return '';
        return this.state.menu.name;
    }

    get stars() {
        if (!this.state.menu) return 0;
        if (this.state.menu.ratingcount == 0) return 0;
        return Math.floor(this.state.menu.ratingsum / this.state.menu.ratingcount);
    }

    get description() {
        if (!this.state.menu) return '';
        return this.state.menu.description;
    }

    get price() {
        if (!this.state.menu) return '';
        return this.state.menu.price;
    }

    get comments() {
        if (!this.state.menu) return [];
        return this.state.menu.comments;
    }

    get category() {
        if (!this.state.menu) return [];
        return this.state.menu.category;
    }

    get tags() {
        if (!this.state.menu) return [];
        return this.state.menu.tags;
    }

    get alreadyRate() {
        if (!this.state.menu) return true;
        return this.state.menu.comments.some(value => value.iduser == this.props.sharedData.props.auth.user.iduser);
    }

    get rateData() {
        return {
            'comment': this.descriptionRef.current.value,
            'ratingsum': this.ratingBarRef.current.value,
            'ratingcount': 1,
            'iduser': this.props.sharedData.props.auth.user.iduser,
            'idmenu': this.props.id,
        };
    }

    onRateSubmit = () => {
        this.rate();
    }

    render() {
        return (
            <div className="col s12">
                <div className="card animate fadeUp">
                    <div className="card-content">
                        <div className="row" id="product-four">
                            <div className="col m6 s12">
                                <img src={`${this.props.sharedData.props.ziggy.url}/food.jpg`} className="responsive-img" alt=""></img>
                            </div>
                            <div className="col m6 s12">
                                <div className="row display-flex">
                                    <h5 className="col">{this.name}</h5>
                                    <span className="col mt-2 new badge left ml-0 mr-2" data-badge-caption="">{this.category.name}</span>
                                </div>
                                <hr className="mb-3"></hr>
                                <RatingBar ref={this.ratingBar2Ref} disable={true} value={this.stars} />
                                <div className="mb-2"></div>
                                <p>{this.description}</p>
                                <div class="mt-2 display-flex justify-content-start">
                                    {this.tags.map((value, index) => <span key={index} className="m-0 new badge purple mr-1">{value.tag.name}</span>)}
                                </div>
                                <h5 className="red-text">{this.price}</h5>
                                {
                                    !this.alreadyRate ?

                                        <div>
                                            <h5 className="mt-5 mb-2">Your Rating</h5>
                                            <RatingBar ref={this.ratingBarRef} />
                                            <textarea ref={this.descriptionRef} placeholder="Write your comment about this menu" className="materialize-textarea"></textarea>
                                            <button onClick={this.onRateSubmit} className="waves-effect waves-light btn gradient-45deg-deep-purple-blue z-depth-4 mt-2 mr-2">
                                                Rate
                                            </button>
                                        </div>
                                        : <div className="card-alert card cyan lighten-5">
                                            <div className="card-content cyan-text">
                                                <p>You already rated this menu, please go away</p>
                                            </div>
                                        </div>
                                }
                            </div>
                            <div className="col s12">
                                <h5>Comments</h5>

                                {this.comments.map((value, index) => <Comment key={index} index={index} data={value} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

Detail.layout = page => <Layout>{page}</Layout>
export default SharedData(Detail);