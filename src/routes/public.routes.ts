import { Router } from "express";
import { PublicController } from "../controllers/public.controllers";

const publicController = new PublicController();

export const publicRoutes: Router = Router();
publicRoutes.get("/contact", publicController.sendContactPage);
publicRoutes.get("/*", publicController.sendErrorPage);
