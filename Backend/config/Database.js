import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("RECOVER_YOUR_DATA", "root", "", {
  host: "34.50.90.68",
  dialect: "mysql",
});

export default db;
