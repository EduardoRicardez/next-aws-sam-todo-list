const dynamoose = require("dynamoose");

const Schema = dynamoose.Schema;

const ToDoItemSchema = new Schema(
  {
    id: String,
    title: { type: String, required: true },
    body: String,
  },
  { timestamps: true }
);

module.exports = dynamoose.model("ToDoItem", ToDoItemSchema);
