const { Component } = require("react");

class Button extends Component {
   render() {
      return (
         <a href="#" onClick={this.props.onClick} className={`btn btn-${this.props.color} shadow btn-xs sharp mr-1`}>{this.props.children}</a>
      );
   }
}

export default Button;