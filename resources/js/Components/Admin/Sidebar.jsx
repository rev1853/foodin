import RouteNames from "@/constants/routeNames";
import SharedData from "@/Helpers/SharedData";
import SidebarItem from "./SidebarItem";
import { Ziggy } from "@/ziggy";

const { Component, useRef, createRef } = require("react");

class Sidebar extends Component {
    dashboardRef;
    userRef;

    constructor(props) {
        super(props);
        this.dashboardRef = createRef();
        this.userRef = createRef();

    }

    get #url() {
        return this.props.sharedData.props.ziggy.url;
    }

    get #user() {
        return this.props.sharedData.props.auth.user;
    }

    onRouteChange = () => {
        this.dashboardRef.current.deactivated();
        this.userRef.current.deactivated();
    }

    componentDidMount() {
        this.onRouteChange();

        switch (route().current()) {
            case RouteNames.dashboard:
                this.dashboardRef.current.activated();
                break;
            case RouteNames.user:
                this.userRef.current.activated();
                break;
        }
    }

    render() {
        return (
            <div className="deznav">
                <div className="deznav-scroll">
                    <div className="main-profile">
                        <div className="image-bx">
                            <img src={`${this.#url}/zenix/images/Untitled-1.jpg`} alt=""></img>
                        </div>
                        <h5 className="name"><span className="font-w400">Hello,</span> {this.#user.nickname}</h5>
                        <p className="email"><a className="__cf_email__">{this.#user.email}</a></p>
                    </div>
                    <ul className="metismenu" id="menu">
                        <li className="nav-label first">Main Menu</li>
                        <SidebarItem onVisit={this.onRouteChange} ref={this.dashboardRef} routeName={RouteNames.dashboard} text="Dashboard" />
                        <SidebarItem onVisit={this.onRouteChange} ref={this.userRef} routeName={RouteNames.user} text="User Management" />

                        <li className="nav-label">Products</li>
                        <SidebarItem onVisit={this.onRouteChange} routeName={RouteNames.user} text="Products" />
                        <SidebarItem onVisit={this.onRouteChange} routeName={RouteNames.user} text="Categories" />
                    </ul>
                    <div className="copyright">
                        <p><strong>PT. FoodIn Berjasa</strong> © 2021 All Rights Reserved</p>
                        <p className="fs-12">Powered <span className="heart"></span> by DexignZone</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SharedData(Sidebar);