import Project from "../models/project.js";
import User from "../models/user.js";

/**
 * Admin creates a project and assigns manager & employees
 */
export const createProject = async (req, res) => {
  try {
    const { name, description, managerId, employeeIds } = req.body;

    if (!name || !managerId) {
      return res.status(400).json({ message: "Name and Manager are required" });
    }

    const manager = await User.findById(managerId);
    if (!manager || manager.role !== "manager") {
      return res.status(400).json({ message: "Invalid manager" });
    }

    const project = await Project.create({
      name,
      description,
      manager: managerId,
      employees: employeeIds || []
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Admin & Manager can view projects
 */
export const getProjects = async (req, res) => {
  try {
    let projects;

    if (req.user.role === "admin") {
      projects = await Project.find()
        .populate("manager", "name email")
        .populate("employees", "name email");
    } else if (req.user.role === "manager") {
      projects = await Project.find({ manager: req.user._id });
    } else {
      return res.status(403).json({ message: "Access denied" });
    }

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
