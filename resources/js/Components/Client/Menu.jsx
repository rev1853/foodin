import RouteNames from "@/constants/routeNames";
import Routing from "@/Helpers/Routing";
import SharedData from "@/Helpers/SharedData";

const { Component } = require("react");

class Menu extends Component {
    render() {
        return (
            <div className="col s12 m4 l4">
                <div className="card animate fadeLeft">
                    <div className="card-content">
                        <span className="card-title text-ellipsis">{this.props.data.name}</span>
                        <img src={`${this.props.sharedData.props.ziggy.url}/food.jpg`} className="responsive-img" alt=""></img>
                        <div className="display-flex flex-wrap justify-content-center">
                            <h5 className="mt-3">{this.props.data.price}</h5>
                            <a className="mt-2 waves-effect waves-light gradient-45deg-deep-purple-blue btn btn-block modal-trigger z-depth-4"
                                href={Routing.url(RouteNames.menuDetail, { id: this.props.data.idmenu })} onClick={Routing.to(RouteNames.menuDetail, { id: this.props.data.idmenu })}>View</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SharedData(Menu);