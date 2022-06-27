import express from "express";
import { addItem, getItems } from "../controllers/list.js";

const router = express.Router();

router.get("/", getItems);
router.post("/", addItem);
router.patch("/:id", () => { });
router.delete("/:id", () => { });

export default router;
