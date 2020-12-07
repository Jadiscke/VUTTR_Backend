import { Schema } from "mongoose";
import db from "../database/Database";
const toolsSchema = new Schema({
  title: String,
  link: String,
  description: String,
  tags: [String],
});

const Tool = db.model("Tool", toolsSchema);

export { toolsSchema };

export default Tool;
