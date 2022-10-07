class Alert {
   static async success(message) {
      return await swal("Success", message, "success");
   }

   static async failed(message) {
      return await swal("Failed", message, "warning");
   }

   static async error(message) {
      return await swal("Something went wrong", message, "error");
   }
}

export default Alert;