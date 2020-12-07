import server from "./server";
import dotenv from "dotenv";
import db from "./database/Database";
import Tool from "./model/Tool";
import { Document } from "mongoose";

const seed = async (): Promise<void> => {
  const notion: Document = new Tool({
    title: "Notion",
    link: "https://notion.so",
    description:
      "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    tags: ["organization", "planning", "collaboration", "writing", "calendar"],
  });
  try {
    const savedNotion = await Tool.findOne({ title: "Notion" }).exec();
    // console.log("savedNotion:   ", savedNotion);
    if (!savedNotion) {
      await notion.save();
    }
  } catch (error) {
    console.log(error);
  }
};

const init = async (): Promise<void> => {
  dotenv.config();
  try {
    await db.start();
    await seed();
  } catch (error) {
    console.log(error);
  }
};

init();

const PORT: String = process.env.PORT ? process.env.PORT : "3000";
console.log(typeof process.env.PORT);
server.listen(PORT, () => {
  console.log("Listening on: ", PORT);
});
