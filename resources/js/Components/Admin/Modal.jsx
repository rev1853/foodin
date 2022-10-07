const { Component, createRef } = require("react");

class Modal extends Component {
   modalRef;
   modal;

   constructor(props) {
      super(props);
      this.modalRef = createRef();
   }

   componentDidMount() {
      this.modal = new bootstrap.Modal(this.modalRef.current);
      $(document).on('hidden.bs.modal', this.onHidden);
      $(document).on('shown.bs.modal', this.onShown);
   }

   componentWillUnmount() {
      $(document).off('hidden.bs.modal', this.onHidden);
      $(document).off('shown.bs.modal', this.onShown);
   }

   get isShown() {
      return this.modal._isShown;
   }

   show() {
      this.modal.show();
   }

   hide() {
      this.modal.hide();
   }

   onShown = () => {
      if (this.props.onShown) this.props.onShown();
   }

   onHidden = () => {
      if (this.props.onHidden) this.props.onHidden();
   }

   render() {
      return (
         <div ref={this.modalRef} className="modal fade" tabIndex={-1} id="modal">
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title">{this.props.title}</h5>
                     <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
                  </div>
                  {this.props.children}
               </div>
            </div>
         </div>
      );
   }
}

export default Modal;