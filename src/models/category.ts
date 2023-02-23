import { DataTypes } from "sequelize";
import { db } from "../database/connectiondb";

export const Category = db.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  categoryName: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  photoType: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  categoriesParent_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
