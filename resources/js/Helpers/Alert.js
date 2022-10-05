class Alert {
   static async success(message) {
      return await swal("Success", message, "success");
   }

   static async failed(message) {
      return await swal("Failed", message, "warning");
   }
}

export default Alert;