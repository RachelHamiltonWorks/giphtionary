import { user } from "@auth0/auth0-react";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: { type: { user }, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
