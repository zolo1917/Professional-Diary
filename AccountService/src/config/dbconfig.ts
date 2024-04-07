import { Sequelize } from "sequelize";
const database_url = process.env.database_url || "localhost";
const database_port = process.env.database_port || "5432";
const database_name = process.env.database_name || "postgres";
export const sequalizeInstance = new Sequelize(
  `postgres://${database_url}:${database_port}/${database_name}`,
  process.env.DB_USERNAME || "postgres",
  process.env.DB_PASSWORD || "postgres",
  {
    logging: (...msg) => console.log(msg),
    dialect: "postgres",
  }
);
