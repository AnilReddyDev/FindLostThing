const mongoose = require("mongoose");

const userScheme =  mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type:Boolean,
      default:false
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User",userScheme);