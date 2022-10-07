import Alert from "@/Helpers/Alert";
import { service } from "@/Services/Admin/Services";

const { Component } = require("react");

class DataTable extends Component {

   constructor(props) {
      super(props);
      this.state = { items: [] };
   }

   componentDidMount() {
      this.reload();
   }

   async reload() {
      try {
         const response = await service.get(this.props.urlPath);
         if (response.status == 200) {
            this.setState({ items: response.data });
         } else {
            Alert.failed('Failed to load data, try again tomorrow');
         }
      } catch {
         Alert.error('Server not responding, please press "OK" button below');
      }
   }

   generateKey(rowNum, columnNum) {
      return `row-${rowNum}_column-${columnNum}`;
   }

   headerBuilder(key, text) {
      if (this.props.headerBuilder) return this.props.headerBuilder(key, text);
      return (
         <th key={key}><strong>{text}</strong></th>
      );
   }

   bodyBuilder(index, data) {
      if (this.props.bodyBuilder) return this.props.bodyBuilder(index, data);

      let columns = this.buildRow(index, data);

      if (!this.props.withoutNumber) {
         columns.unshift((
            <td key={`number-${index}`}><strong>{index + 1}</strong></td>
         ));
      }

      if (!this.withoutAction) {
         let actionComponent;

         if (this.props.actionBuilder) {
            actionComponent = this.props.actionBuilder(`action-${index}`, data);
         } else {
            actionComponent = (
               <td key={`action-${index}`}>
                  <div className="d-flex">
                     <a href="#" className="btn btn-primary shadow btn-xs sharp mr-1"><i className="fa fa-pencil"></i></a>
                     <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></a>
                  </div>
               </td>
            );
         }

         columns.push(actionComponent);
      }

      return (
         <tr key={index}>
            {columns}
         </tr>
      );
   }

   buildRow(rowNum, data) {
      return this.props.columnNames.map((value, index) => <td key={this.generateKey(rowNum, index)}>{data[value]}</td>);
   }

   render() {
      return (
         <div className="table-responsive">
            <table className="table table-striped table-responsive-md">
               <thead>
                  <tr>
                     {this.props.headers.map((elm, ind) => this.headerBuilder(ind, elm))}
                  </tr>
               </thead>
               <tbody>
                  {
                     this.state.items.length == 0 ?
                        <tr><td colSpan={this.props.headers.length}><div className="text-center">Nothing is here, just me</div></td></tr>
                        :
                        this.state.items.map((elm, ind) => this.bodyBuilder(ind, elm))
                  }
               </tbody>
            </table>
         </div>
      );
   }
}

export default DataTable;