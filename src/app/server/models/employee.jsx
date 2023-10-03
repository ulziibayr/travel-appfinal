const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрийг оруулна уу!"],
  },

  lastname: {
    type: String,
    required: [true, "55"],
  },
  
  position: {
    type: String,
    required: [true, "44"],
  },
  permission: {
    type: String,
    required: [true, "33"],
  },

  email: {
    type: String,
    required: [true, "22"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Имэйл хаяг буруу байна.",
    ],
  },

  phonenumber: {
    type: Number,
    required: [true, "11"],
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Employee = mongoose.models.Employee || mongoose.model("Employee", UserSchema);

export default Employee;