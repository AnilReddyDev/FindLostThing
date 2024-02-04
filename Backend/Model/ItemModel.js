const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    ownerId: {
      type: String,
      // required: [true, "Owner id is mandatory !"],
    },
    img: {
      type: String,
      required: [true, "img is mandatory !"],
    },
    desc: {
      type: String,
    },
    contact: {
      type: String,
      required: [true, "contact is mandatory !"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item",itemSchema);