import { Request, Response } from "express";
import Tool from "../model/Tool";

class ToolController {
  async getAll(request: Request, response: Response): Promise<Response<any>> {
    try {
      const tools = await Tool.find({});
      return response.status(200).json(tools);
    } catch (error) {
      return response.status(400).json({
        error: error,
      });
    }
  }
}

export default new ToolController();
