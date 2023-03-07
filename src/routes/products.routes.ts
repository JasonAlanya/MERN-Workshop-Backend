import { Router } from "express";
import { check } from "express-validator";
import { ProductsController } from "../controllers/products.controller";
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const productsRoutes: Router = Router();

const productsController = new ProductsController();

productsRoutes.get("/", productsController.getAll);
productsRoutes.get(
  "/:id",
  [check("id", "Id param must be a number value").isNumeric(), ValidFields],
  productsController.getOne
);
productsRoutes.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("name", "name must be max 45").isLength({ max: 100 }),
    check("weight", "weight is required").not().isEmpty(),
    check("weight", "weight param must be a number value").isNumeric(),
    check("cannabisWeight", "cannabisWeight is required").not().isEmpty(),
    check(
      "cannabisWeight",
      "cannabisWeight param must be a number value"
    ).isNumeric(),
    check("price", "price is required").not().isEmpty(),
    check("price", "price param must be a number value").isNumeric(),
    check("fee", "fee is required").not().isEmpty(),
    check("fee", "fee param must be a number value").isNumeric(),
    check("sku", "sku must be max 45").isLength({ max: 100 }),
    check("imageURL", "imageURL must be max 255").isLength({ max: 255 }),
    check("barcode", "barcode must be max 100").isLength({ max: 100 }),
    check("description", "description must be max 255").isLength({ max: 255 }),
    check("cannabisVolume", "cannabisVolume param must be a number value")
      .optional()
      .isNumeric(),
    check("isActive", "isActive param must be a integer value")
      .optional()
      .isInt(),
    check("createDate", "createDate param must be a date")
      .optional()
      .isString(),
    check("updateDate", "updateDate param must be a date")
      .optional()
      .isString(),
    check("fullProductName", "fullProductName must be max 100").isLength({
      max: 100,
    }),
    check("productSlug", "productSlug must be max 100").isLength({ max: 100 }),
    check("salesPrice", "salesPrice is required").not().isEmpty(),
    check("salesPrice", "salesPrice param must be a integer value").isInt(),
    check("inventory", "inventory is required").not().isEmpty(),
    check("inventory", "inventory param must be a integer value").isInt(),
    check("discountAmount", "discountAmount is required").not().isEmpty(),
    check(
      "discountAmount",
      "discountAmount param must be a integer value"
    ).isInt(),
    check("productscol", "productscol must be max 45").isLength({ max: 45 }),
    check("categories_id", "categories_id is required").not().isEmpty(),
    check("categories_id", "categories_idparam must be a number value").isInt(),
    check("supplier_id", "supplier_id is required").not().isEmpty(),
    check("supplier_id", "supplier_id param must be a number value").isInt(),
    /*check("tenant_id", "tenant_id is required").not().isEmpty(),
    check("tenant_id", "tenant_id param must be a number value").isInt(),
    check("retailer_id", "retailer_id is required").not().isEmpty(),
    check("retailer_id", "retailer_id param must be a number value").isInt(),
    check("discount_id", "discount_id is required").not().isEmpty(),
    check("discount_id", "discount_id param must be a number value").isInt(),
    check("parentProduct_id", "parentProduct_id is required").not().isEmpty(),
    check(
      "parentProduct_id",
      "parentProduct_id param must be a number value"
    ).isInt(),*/
    ValidFields,
  ],
  productsController.create
);
productsRoutes.put(
  "/:id",
  [
    check("id", "Id param must be a number value").isNumeric(),
    check("name", "name is required").not().isEmpty(),
    check("name", "name must be max 45").isLength({ max: 100 }),
    check("weight", "weight is required").not().isEmpty(),
    check("weight", "weight param must be a number value").isNumeric(),
    check("cannabisWeight", "cannabisWeight is required").not().isEmpty(),
    check(
      "cannabisWeight",
      "cannabisWeight param must be a number value"
    ).isNumeric(),
    check("price", "price is required").not().isEmpty(),
    check("price", "price param must be a number value").isNumeric(),
    check("fee", "fee is required").not().isEmpty(),
    check("fee", "fee param must be a number value").isNumeric(),
    check("sku", "sku must be max 45").isLength({ max: 100 }),
    check("imageURL", "imageURL must be max 255").isLength({ max: 255 }),
    check("barcode", "barcode must be max 100").isLength({ max: 100 }),
    check("description", "description must be max 255").isLength({ max: 255 }),
    check("cannabisVolume", "cannabisVolume param must be a number value")
      .optional()
      .isNumeric(),
    check("isActive", "isActive param must be a integer value")
      .optional()
      .isInt(),
    check("createDate", "createDate param must be a integer value")
      .optional()
      .isString(),
    check("updateDate", "updateDate param must be a integer value")
      .optional()
      .isString(),
    check("fullProductName", "fullProductName must be max 100").isLength({
      max: 100,
    }),
    check("productSlug", "productSlug must be max 100").isLength({ max: 100 }),
    check("salesPrice", "salesPrice is required").not().isEmpty(),
    check("salesPrice", "salesPrice param must be a number value").isInt(),
    check("inventory", "inventory is required").not().isEmpty(),
    check("inventory", "inventory param must be a number value").isInt(),
    check("discountAmount", "inventory is required").not().isEmpty(),
    check("discountAmount", "inventory param must be a number value").isInt(),
    check("productscol", "productscol must be max 45").isLength({ max: 45 }),
    check("categories_id", "categories_id is required").not().isEmpty(),
    check(
      "categories_id",
      "categories_id param must be a number value"
    ).isInt(),
    check("supplier_id", "supplier_id is required").not().isEmpty(),
    check("supplier_id", "supplier_id param must be a number value").isInt(),
    ValidFields,
  ],
  productsController.update
);
productsRoutes.delete(
  "/:id",
  [check("id", "Id param must be a number value").isNumeric(), ValidFields],
  productsController.remove
);
