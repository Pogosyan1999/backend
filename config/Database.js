import { Sequelize } from "sequelize";

const db = new Sequelize('dx', 'root', '',{
   host: "localhost",
   dialect:"mysql"
});

export default db;