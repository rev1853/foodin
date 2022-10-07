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

    disableReadOnly = (e) => {
        e.target.removeAttribute('readonly');
    }

    render() {
        const id = useId;
        return (
            <fieldset {... this.props.disabled ? { disabled: "disabled" } : {}}>
                <div className="form-group">
                    <label htmlFor={id} className={`mb-1 ${this.props.labelClass}`}>
                        {this.props.strongLabel ? <strong>{this.props.label}</strong> : this.props.label}
                    </label>
                    <input readOnly
                        onFocus={this.disableReadOnly} placeholder={this.props.placeholder} id={id} ref={this.inputRef} onChange={this.onChange} type={this.props.type} className={`form-control ${this.props.inputClass}"`}></input>
                </div>
            </fieldset>
        );
    }
}
export default Input;