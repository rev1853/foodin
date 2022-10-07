import Routing from "@/Helpers/Routing";

const { Component } = require("react");

class SidebarItem extends Component {
    constructor(props) {
        super(props);
        this.state = { active: "" };
    }
    onVisit = e => {
        e.preventDefault();
        Routing.to(this.props.routeName)(e);
        this.props.onVisit();
        this.activated();
    }

    activated() {
        return this.setState({ active: "mm-active" });
    }

    deactivated() {
        return this.setState({ active: "" });
    }

    render() {
        return (
            <li className={this.state.active}>
                <a onClick={this.onVisit} href={Routing.url(this.props.routeName)} className="ai-icon" aria-expanded="false">
                    <i className="flaticon-381-settings-2"></i>
                    <span className="nav-text">{this.props.text}</span>
                </a>
            </li>
        );
    }
}

export default SidebarItem;