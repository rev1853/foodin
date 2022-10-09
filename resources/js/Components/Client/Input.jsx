const { Component, useId, createRef } = require("react");

class Input extends Component {
    inputRef;

    constructor(props) {
        super(props);
        this.inputRef = createRef();
    }

    get value() {
        return this.inputRef.current.value;
    }

    set value(value) {
        return this.inputRef.current.value = value;
    }

    clear() {
        this.value = "";
    }

    render() {
        const id = useId;
        return (
            <div className="input-field col s12">
                <i className="material-icons prefix pt-2">person_outline</i>
                <input {... this.props.disabled ? { disabled: "disabled" } : {}} placeholder={this.props.placeholder} id={id} ref={this.inputRef} onChange={this.onChange} type={this.props.type} className={`form-control`}></input>
                <label className="center-align">{this.props.label}</label>
            </div>
        );
    }
}
export default Input;