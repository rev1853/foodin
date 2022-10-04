const { Component } = require("react");

class FormGroup extends Component {
    render() {
        return (
            <div className="form-group">
                <label className={`mb-1 ${this.props.labelClass}`}><strong>{this.props.label}</strong></label>
                <input name={this.props.name} type={this.props.type} className={`form-control ${this.props.inputClass}"`}></input>
            </div>
        );
    }
}
export default FormGroup;