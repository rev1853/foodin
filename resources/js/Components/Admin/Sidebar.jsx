import SharedData from "@/Helpers/SharedData";
import SidebarItem from "./SidebarItem";

const { Component } = require("react");

class Sidebar extends Component {
    get #url() {
        return this.props.sharedData.props.ziggy.url;
    }

    get #user() {
        return this.props.sharedData.props.auth.user;
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
                        <SidebarItem text="Dashboard" />
                        <SidebarItem text="User Management" />

                        <li className="nav-label">Products</li>
                        <SidebarItem text="Products" />
                        <SidebarItem text="Categories" />
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