import { Router } from "express";
import { check } from "express-validator";
import { SuppliersController } from "../controllers/supplier.controller";
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const suppliersRoutes: Router = Router();

const suppliersController = new SuppliersController();

suppliersRoutes.get("/", suppliersController.getAll);
suppliersRoutes.get(
  "/:id",
  [check("id", "Id param must be a number value").isNumeric(), ValidFields],
  suppliersController.getOne
);
suppliersRoutes.post(
  "/",
  [
    check("supplierName", "supplierName is required").not().isEmpty(),
    check("supplierName", "supplierName must be max 45").isLength({ max: 45 }),
    check("address", "address must be max 100").isLength({ max: 100 }),
    check("email", "email is required").not().isEmpty(),
    check("email", "email must be max 100").isLength({ max: 100 }),
    check("phone", "phone must be max 20").isLength({ max: 20 }),
    ValidFields,
  ],
  suppliersController.create
);
suppliersRoutes.put(
  "/:id",
  [
    check("id", "Id param must be a number value").isNumeric(),
    check("supplierName", "supplierName is required").not().isEmpty(),
    check("supplierName", "supplierName must be max 45").isLength({ max: 45 }),
    check("address", "address must be max 100").isLength({ max: 100 }),
    check("email", "email is required").not().isEmpty(),
    check("email", "email must be max 100").isLength({ max: 100 }),
    check("phone", "phone must be max 20").isLength({ max: 20 }),
    ValidFields,
  ],
  suppliersController.update
);
suppliersRoutes.delete(
  "/:id",
  [check("id", "Id param must be a number value").isNumeric(), ValidFields],
  suppliersController.remove
);
