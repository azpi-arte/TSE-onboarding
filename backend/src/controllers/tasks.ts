import { RequestHandler } from "express";
import TaskModel from "src/models/task";

export const getAllTasks: RequestHandler = async (req, res, next) => {
  try {
    const sortedTasks = await TaskModel.find().sort({ dateCreated: -1 });
    res.status(200).json(sortedTasks);
  } catch (error) {
    next(error);
  }
};
