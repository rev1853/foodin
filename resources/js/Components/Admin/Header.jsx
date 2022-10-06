import Fullsize from "./Icons/Fullsize";
import Minimize from "./Icons/Minimize";
import ProfileDropdown from "./ProfileDropdown";

const { Component } = require("react");

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                            <div className="header-left">
                                <h3 className="nav-text">{this.props.title}</h3>
                            </div>
                            <ul className="navbar-nav header-right main-notification">
                                <li className="nav-item dropdown notification_dropdown">
                                    <a className="nav-link bell dz-fullscreen" href="#">
                                        <Fullsize />
                                        <Minimize />
                                    </a>
                                </li>
                                <ProfileDropdown />
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;