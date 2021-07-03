const TodoItem = require("../models/todoItem");
const { v4: uuidv4 } = require("uuid");

exports.todo_item_list = async function (_, res, next) {
  try {
    const results = await TodoItem.scan().exec();
    res.json(results);
  } catch (err) {
    next(err);
  }
};

exports.todo_item_detail = async function (req, res, next) {
  const { id } = req.params;

  try {
    const todoItem = await TodoItem.get(id);
    res.json(todoItem);
  } catch (err) {
    next(err);
  }
};

exports.todo_item_create_post = async function (req, res, next) {
  const { title, columnIndex } = req.body;
  const newTodoItem = new TodoItem({
    id: uuidv4(),
    title,
    columnIndex,
  });
  try {
    await newTodoItem.save();
  } catch (error) {
    next(error);
  }
  res.json({
    message: "Save operation was successful.",
    data: newTodoItem,
  });
};

exports.todo_item_delete = async function (req, res, next) {
  const id = req.params.id;
  try {
    await TodoItem.delete(id);
    res.json({
      message: "Delete operation was successful.",
    });
  } catch (err) {
    next(err);
  }
};

exports.todo_item_update = async function (req, res, next) {
  const data = req.body;
  const id = req.params.id;
  try {
    const item = await TodoItem.update({ id, ...data });
    console.log(item);
    res.json({
      message: "Update operation was successful.",
      data: item,
    });
  } catch (err) {
    next(err);
  }
};
