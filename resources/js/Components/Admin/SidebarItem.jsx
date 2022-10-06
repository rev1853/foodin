const { Component } = require("react");

class SidebarItem extends Component {
    render() {
        return (
            <li>
                <a href="widget-basic.html" className="ai-icon" aria-expanded="false">
                    <i className="flaticon-381-settings-2"></i>
                    <span className="nav-text">{this.props.text}</span>
                </a>
            </li>
        );
    }
}

export default SidebarItem;