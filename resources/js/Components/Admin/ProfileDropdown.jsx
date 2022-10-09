import SharedData from "@/Helpers/SharedData";
import Logout from "./Icons/Logout";
import { Ziggy } from "@/ziggy";

const { Component } = require("react");

class ProfileDropdown extends Component {
    get #url() {
        return this.props.sharedData.props.ziggy.url;
    }

    get #user() {
        return this.props.sharedData.props.auth.user;
    }

    render() {
        return (
            <li className="nav-item dropdown header-profile">
                <a className="nav-link" href="#" role="button" data-toggle="dropdown">
                    <img src={`${this.#url}/man.png`} width="20"
                        alt=""></img>
                    <div className="header-info">
                        <span>{this.#user.commonname}</span>
                        <small>{this.#user.nickname}</small>
                    </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                    <a href={route('admin.logout')} className="dropdown-item ai-icon">
                        <Logout />
                        <span className="ml-2">Logout </span>
                    </a>
                </div>
            </li>
        );
    }
}

export default SharedData(ProfileDropdown);