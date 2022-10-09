const { Component } = require("react");

class RatingBar extends Component {

    constructor(props) {
        super(props)
        this.state = { value: this.props.value || 0 };
    }

    onStarClick = (value) => {
        if (!this.props.disable) {
            this.setState(() => ({ value: value }));
        }
    }

    get value() {
        return this.state.value;
    }

    set value(value) {
        this.setState(() => ({ value: value }));
    }

    get stars() {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            let color = "gray";
            if (i <= this.state.value) color = 'amber';
            stars.push(<i style={{ cursor: "pointer" }} key={i} onClick={() => this.onStarClick(i)} className={`material-icons ${color}-text`}> star </i>);
        }
        return stars;
    }

    render() {
        return (
            <span>
                {this.stars}
            </span>
        );
    }
}

export default RatingBar;