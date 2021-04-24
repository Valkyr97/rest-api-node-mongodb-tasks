import Task from "../models/Task";
import { paginationSettings } from "../libs/paginationSettings";
import * as taskError from "../errors/taskErrors";

export const getTasks = async (req, res) => {
  try {
    const { size, page, title } = req.query;
    const condition = title
    ? {
      title: { $regex: new RegExp(title), $options: "i" },
    }
    : {};

    const { limit, offset } = paginationSettings(size, page);
    const data = await Task.paginate(condition, { offset, limit });
    res.json({
      totalTasks: data.totalDocs,
      tasks: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page
    });
  } catch (error) {
    taskError.errorRetrieving(error, res);
  }
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res
        .status(404)
        .json({ message: `The task with the id ${id} does not exist` });
    }
    res.json(task);
  } catch (error) {
    taskError.errorRetrieving(error, res);
  }
};

export const setTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Title is required" });
  }
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done,
    });
    await newTask.save();
    res.json({ message: "Task saved" });
  } catch (error) {
    taskError.errorCreating(error, res);
  }
};

export const delTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res
        .status(404)
        .json({ message: `The task with the id ${id} does not exist` });
    }
    res.json({ message: `Task ${task.title} deleted` });
  } catch (error) {
    taskError.errorDeleting(error, res);
  }
};

export const putTaskById = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "task updated succesfully" });
  } catch (error) {
    taskError.errorUpdating(error, res);
  }
};
