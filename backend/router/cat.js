import { getTitle, searchByBreed } from "../controller/catController.js";
import { Router } from "express";

const router = Router();

router.get("/", getTitle); // /cat
router.get("/:input", searchByBreed); // /cat/:input

export default router;