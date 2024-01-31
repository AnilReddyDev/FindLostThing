const express = require("express");
const router = express.Router();
const {
  getAllItems,
  postItem,
  putItem,
  deleteItem,
} = require("../Controllers/ItemsControllers");

router.route("/").get(getAllItems).post(postItem);
router.route("/:id").put(putItem).delete(deleteItem);

module.exports = router;