import { Request, Response } from "express";
import Tool from "../model/Tool";

class ToolController {
  async getAll(request: Request, response: Response): Promise<Response<any>> {
    try {
      if (request.query.tag) {
        request.query = {
          ...request.query,
          tags: request.query.tag,
        };
        delete request.query.tag;
      }
      if (request.query?.tags) {
        if (Number(request.query?.tags?.length) > 1) {
          const tags: any = request.query.tags || [""];
          const tools = await Tool.find().where("tags").all(tags);
          return response.status(200).json(tools);
        }
      }
      const tools = await Tool.find().where(request.query);
      return response.status(200).json(tools);
    } catch (error) {
      return response.status(400).json({
        error: error,
      });
    }
  }
}

export default new ToolController();
