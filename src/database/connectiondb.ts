import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();

export const db = new Sequelize(
  process.env.DATABASE as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD as string,
  {
    host: "localhost",
    dialect: "mysql",
    define: {
      scopes: {
        excludeCreatedAtUpdateAt: {
          attributes: { exclude: ["createAt", "updateAt"] },
        },
      },
      timestamps: false,
    },
  }
);
