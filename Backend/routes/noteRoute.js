import express from "express";
import { getNotes, createNotes, updateNotes, deleteNotes, getNotesById } from "../controllers/noteController.js";

const router = express.Router();

router.get("/Notes", getNotes);
router.get("/Notes/:id", getNotesById);
router.post("/add-Notes", createNotes);
router.patch("/edit-Notes/:id", updateNotes);
router.delete("/del-Notes/:id", deleteNotes);

export default router;
