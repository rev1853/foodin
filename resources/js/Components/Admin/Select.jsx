const { Component, createRef } = require("react");

class Select extends Component {
    selectRef;

    constructor(props) {
        super(props);
        this.selectRef = createRef();
        this.state = {
            defaultValue: this.props.defaultValue,
            options: this.props.options,
        };
    }

    componentDidUpdate() {
        $(this.selectRef.current).selectpicker('destroy');
        $(this.selectRef.current).selectpicker();
    }

    get value() {
        return $(this.selectRef.current).selectpicker('val');
    }

    set value(value) {
        $(this.selectRef.current).selectpicker('val', value);
        this.setState(() => ({ defaultValue: value }));
    }

    set options(options) {
        this.setState(() => ({ options: options }));
    }

    clear() {
        this.options = [];
        this.value = undefined;
    }

    render() {
        return (
            <fieldset {... this.props.disabled ? { disabled: "disabled" } : {}}>
                <div className="form-row mb-3">
                    <label className="mb-1 col-12">{this.props.label}</label>
                    <select
                        ref={this.selectRef}
                        {... this.props.multiple ? { multiple: "multiple" } : {}}
                        className="default-select col-12"
                        defaultValue={this.state.defaultValue}>

                        {this.state.options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)}
                    </select>
                </div>
            </fieldset>
        );
    }
}

export default Select;