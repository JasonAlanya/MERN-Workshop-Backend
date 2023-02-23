"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
exports.db = new sequelize_1.Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
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
});
//# sourceMappingURL=connectiondb.js.map