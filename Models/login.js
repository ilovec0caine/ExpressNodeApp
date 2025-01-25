const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Form", FormSchema);




//class FormModel {
    //constructor (username, email, password) {
      //  this.username = username;
      //  this.email = email;
       // this.password = password;

   // }
//}
//module.exports = FormModel