import express, { Application } from "express";
import cors from "cors";
import { join } from "path";
import { corsOptions } from "../config/cors.express";
import { publicRoutes } from "../routes/public.routes";
import { categriesRoutes } from "../routes/categories.routes";
import { suppliersRoutes } from "../routes/suppliers.routes";
import { productsRoutes } from "../routes/products.routes";
import { db } from "../database/connectiondb";
import { seedRoutes } from "../routes/seed.routes";

export class Server {
  private app: Application;
  private port: number | String;
  private path = {
    public: "/",
    categories: "/api/categories",
    suppliers: "/api/suppliers",
    products: "/api/products",
    seed: "/api/seed",
  };
  constructor() {
    //Inicializar atributos
    this.app = express();
    this.port = process.env.PORT || 3000;

    //Inicializar algunos metodos
    //Conectar a la BD
    this.connectToDB();

    //Inicializar Middlewares
    this.setMiddlewares();

    //Inicialiar las Rutas
    this.setRoutes();
  }

  private async connectToDB() {
    try {
      await db.authenticate();
      console.log("Database connected");
    } catch (error) {
      throw new Error(error as any);
    }
  }

  private setMiddlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(express.static(join(__dirname, "../../public/")));
    this.app.use(express.json());
  }

  private setRoutes() {
    if (process.env.STATE === "dev") {
      this.app.use(this.path.seed, seedRoutes);
    }
    this.app.use(this.path.categories, categriesRoutes);
    this.app.use(this.path.suppliers, suppliersRoutes);
    this.app.use(this.path.products, productsRoutes);
    this.app.use(this.path.public, publicRoutes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port: ${this.port}`);
    });
  }
}
