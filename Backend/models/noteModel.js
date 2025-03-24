import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "Note"
const Notes = db.define(
  "Notes", // Nama Tabel
  {
    Judul: Sequelize.STRING,
    Isi: Sequelize.STRING,
    
  }
);

db.sync().then(() => console.log("Database synced"));

export default Notes;
