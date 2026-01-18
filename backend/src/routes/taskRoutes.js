import express from "express";
import {
  createTask,
  getTasks,
  updateTaskStatus
} from "../controllers/taskController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("manager"), createTask);
router.get("/", protect, getTasks);
router.patch("/:id", protect, authorizeRoles("employee"), updateTaskStatus);

export default router;
