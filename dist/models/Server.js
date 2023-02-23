"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = require("path");
const cors_express_1 = require("../config/cors.express");
const public_routes_1 = require("../routes/public.routes");
const categories_routes_1 = require("../routes/categories.routes");
const suppliers_routes_1 = require("../routes/suppliers.routes");
const products_routes_1 = require("../routes/products.routes");
const connectiondb_1 = require("../database/connectiondb");
const seed_routes_1 = require("../routes/seed.routes");
class Server {
    constructor() {
        this.path = {
            public: "/",
            categories: "/api/categories",
            suppliers: "/api/suppliers",
            products: "/api/products",
            seed: "/api/seed",
        };
        //Inicializar atributos
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3000;
        //Inicializar algunos metodos
        //Conectar a la BD
        this.connectToDB();
        //Inicializar Middlewares
        this.setMiddlewares();
        //Inicialiar las Rutas
        this.setRoutes();
    }
    connectToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connectiondb_1.db.authenticate();
                console.log("Database connected");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    setMiddlewares() {
        this.app.use((0, cors_1.default)(cors_express_1.corsOptions));
        this.app.use(express_1.default.static((0, path_1.join)(__dirname, "../../public/")));
        this.app.use(express_1.default.json());
    }
    setRoutes() {
        if (process.env.STATE === "dev") {
            this.app.use(this.path.seed, seed_routes_1.seedRoutes);
        }
        this.app.use(this.path.categories, categories_routes_1.categriesRoutes);
        this.app.use(this.path.suppliers, suppliers_routes_1.suppliersRoutes);
        this.app.use(this.path.products, products_routes_1.productsRoutes);
        this.app.use(this.path.public, public_routes_1.publicRoutes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port: ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map