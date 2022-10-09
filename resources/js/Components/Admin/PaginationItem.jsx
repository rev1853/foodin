import SharedData from "@/Helpers/SharedData";

const { Component } = require("react");

class PaginationItem extends Component {
    get generatedClassName() {
        let className = "page-item";

        if (this.props.disabled) className += " disabled";
        if (this.props.active) className += " active";
        if (this.props.indicator) className += " page-indicator";

        return className;
    }

    get urlPath() {
        return this.props.url.replace(this.props.sharedData.props.ziggy.url + '/api', '');
    }

    onItemClick = (e) => {
        e.preventDefault();
        if (!this.props.disabled && !this.props.active) if (this.props.onClick) this.props.onClick(this.urlPath);
    }

    render() {
        return (
            <li className={this.generatedClassName}><a className="page-link" onClick={this.onItemClick}>{this.props.children}</a></li>
        );
    }
}

export default SharedData(PaginationItem);