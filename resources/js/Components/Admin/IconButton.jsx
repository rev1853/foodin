const { Component } = require("react");

class IconButton extends Component {
   render() {
      return (
         <button type="button" className={`btn btn-${this.props.color}`} onClick={this.props.onClick}>
            {this.props.text}
            <span className="btn-icon-right">
               <i className={`fa ${this.props.icon} color-${this.props.color}`}></i>
            </span>
         </button>
      );
   }
}

export default IconButton;