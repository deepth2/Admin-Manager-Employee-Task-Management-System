import express from "express";
import { createProject, getProjects } from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("admin"), createProject);
router.get("/", protect, authorizeRoles("admin", "manager"), getProjects);

export default router;
