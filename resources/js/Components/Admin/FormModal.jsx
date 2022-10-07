import Alert from "@/Helpers/Alert";
import { service } from "@/Services/Admin/Services";
import Modal from "./Modal";

const { Component, createRef } = require("react");

class FormModal extends Component {
   modalRef;
   url;
   method;

   constructor(props) {
      super(props);
      this.modalRef = createRef();
      this.state = {
         title: this.props.title,
         isLoading: false,
      };
   }

   loadingStart() {
      this.setState({ isLoading: true });
      if (this.props.onLoadingStart) this.props.onLoadingStart();
   }

   loadingComplete() {
      this.setState({ isLoading: false });
      if (this.props.onLoadingComplete) this.props.onLoadingComplete();
   }

   show(url, method) {
      if (url && method) {
         this.url = url;
         this.method = method;
         this.modalRef.current.show();
      }
   }

   hide() {
      this.modalRef.current.hide();
   }

   onShown = () => {
      if (this.props.onShown) this.props.onShown();
   }

   onHidden = () => {
      this.url = undefined;
      this.method = undefined;
      if (this.props.onHidden) this.props.onHidden();
   }

   onSubmit = async (e) => {
      e.preventDefault();
      if (this.props.onSubmit) this.props.onSubmit();
      this.saveData();
   }

   async saveData() {
      try {
         this.loadingStart();
         const data = this.props.dataBuilder();
         const response = await service.request({ url: this.url, method: this.method, data: data, });

         if (response.status == 200) {
            await Alert.success("Data successfully saved");
            if (this.props.onSuccess) this.props.onSuccess();
            this.hide();
         }
         else {
            await Alert.failed("Save data failed, try again later");
            if (this.props.onFailed) this.props.onFailed();
         }
      } catch (e) {
         await Alert.error("An error occured while save data");
         if (this.props.onError) this.props.onError();
      } finally {
         this.loadingComplete();
         if (this.props.onComplete) this.props.onComplete();
      }
   }

   render() {
      return (
         <Modal onShown={this.onShown} onHidden={this.onHidden} ref={this.modalRef} title={this.state.title} >
            <form onSubmit={this.onSubmit} autoComplete="off" aria-autocomplete="off">
               <div className="modal-body">
                  {this.props.children}
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-danger light" data-dismiss="modal">Close</button>
                  <button disabled={this.state.isLoading} type="submit" className="btn btn-primary">Save changes</button>
               </div>
            </form>
         </Modal>
      );
   }
}

export default FormModal;