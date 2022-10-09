import PaginationItem from "./PaginationItem";

const { Component } = require("react");

class Pagination extends Component {
    get links() {
        const linkItems = this.props.paginations.links != null ? this.props.paginations.links : [];
        return linkItems.slice(1, linkItems.length - 1);
    }

    get previous() {
        return this.props.paginations.prev_page_url;
    }

    get next() {
        return this.props.paginations.next_page_url;
    }

    get activeIndex() {
        return this.props.paginations.current_page - 1;
    }

    get items() {
        if (this.links.length <= 5) return this.links;
        if ((this.activeIndex + 1) - 0 < 3) return this.firstThree;
        if ((this.links.length - 1) - (this.activeIndex - 1) < 3) return this.lastThree;
        return this.middleThree;
    }

    get firstThree() {
        const first = this.links.slice(0, 3);
        const last = this.links[this.links.length - 1];
        return [...first, this.separator, last];
    }

    get lastThree() {
        const first = this.links[0];
        const last = this.links.slice(this.links.length - 3, this.links.length);
        return [first, this.separator, ...last];
    }

    get middleThree() {
        const first = this.links[0];
        const last = this.links[this.links.length - 1];

        let start = this.activeIndex - 1;
        let end = this.activeIndex + 2;

        if (start - 1 == 0) {
            start = this.activeIndex;
            end = this.activeIndex + 3;
        }

        if (end == this.links.length - 1) {
            start = this.activeIndex - 2;
            end = this.activeIndex + 1;
        }
        const middle = this.links.slice(start, end);
        return [first, this.separator, ...middle, this.separator, last];
    }

    get separator() {
        return {
            url: null,
            label: "...",
            active: false
        };
    }

    render() {
        return (
            <ul className="pagination">
                <PaginationItem onClick={this.props.onClick} url={this.previous} disabled={this.previous == null}><i className="material-icons">chevron_left</i></PaginationItem>
                {this.items.map((value, index) => <PaginationItem onClick={this.props.onClick} url={value.url} key={index} active={value.active} disabled={value.label == "..."}>{value.label}</PaginationItem>)}
                <PaginationItem onClick={this.props.onClick} url={this.next} disabled={this.next == null}><i className="material-icons">chevron_right</i></PaginationItem>
            </ul>
        );
    }
}

export default Pagination;