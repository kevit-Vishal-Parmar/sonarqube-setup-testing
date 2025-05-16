/************************
 * 3rd party libraries
 ************************/
const mongoose = require("mongoose");
const bcrytp = require("bcrypt");

/************************
 * Schema
 ************************/
const UserSchema = new mongoose.Schema({
  name: {
    first: { type: String },
    last: { type: String },
  },
  email: { type: String },
  password: { type: String },
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrytp.hash(this.password, 10);
  next();
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
