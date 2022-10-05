const { Component, useId, createRef } = require("react");

class FormGroup extends Component {
    inputRef;

    constructor(props){
        super(props);
        this.inputRef = createRef();
    }

    get value(){
        return this.inputRef.current.value;
    }

    render() {
        const id = useId;
        return (
            <fieldset {... this.props.disabled ? {disabled: "disabled"} : {}}>
                <div className="form-group">
                    <label htmlFor={id} className={`mb-1 ${this.props.labelClass}`}><strong>{this.props.label}</strong></label>
                    <input id={id} ref={this.inputRef} onChange={this.onChange} name={this.props.name} type={this.props.type} className={`form-control ${this.props.inputClass}"`}></input>
                </div>
            </fieldset>
        );
    }
}
export default FormGroup;