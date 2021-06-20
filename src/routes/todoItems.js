var express = require("express");
var router = express.Router();

const todo_item_controller = require("../controllers/todoItemController");

router.get("/", todo_item_controller.todo_item_list);

router.post("/todo_item", todo_item_controller.todo_item_create_post);

router.delete("/todo_item/:id", todo_item_controller.todo_item_delete);

router.put("/todo_item/:id", todo_item_controller.todo_item_update);

router.get("/todo_item/:id", todo_item_controller.todo_item_detail);

router.get("/todo_items", todo_item_controller.todo_item_list);

module.exports = router;
