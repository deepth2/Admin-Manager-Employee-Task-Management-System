import Task from "../models/Task.js";
import Project from "../models/project.js";

/**
 * Manager creates task
 */
export const createTask = async (req, res) => {
  try {
    const { title, description, priority, deadline, projectId, assignedTo } =
      req.body;

    const project = await Project.findById(projectId);

    if (!project || project.manager.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const task = await Task.create({
      title,
      description,
      priority,
      deadline,
      project: projectId,
      assignedTo,
      createdBy: req.user._id
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get tasks (Role-based)
 */
export const getTasks = async (req, res) => {
  try {
    let tasks;

    if (req.user.role === "admin") {
      tasks = await Task.find().populate("assignedTo project");
    } else if (req.user.role === "manager") {
      tasks = await Task.find({ createdBy: req.user._id });
    } else {
      tasks = await Task.find({ assignedTo: req.user._id });
    }

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Employee updates task status
 */
export const updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task || task.assignedTo.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    task.status = req.body.status;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
