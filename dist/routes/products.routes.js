"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const products_controller_1 = require("../controllers/products.controller");
const valid_fields_middleware_1 = require("../middlewares/valid-fields.middleware");
exports.productsRoutes = (0, express_1.Router)();
const productsController = new products_controller_1.ProductsController();
exports.productsRoutes.get("/", productsController.getAll);
exports.productsRoutes.get("/:id", [(0, express_validator_1.check)("id", "Id param must be a number value").isNumeric(), valid_fields_middleware_1.ValidFields], productsController.getOne);
exports.productsRoutes.post("/", [
    (0, express_validator_1.check)("name", "name is required").not().isEmpty(),
    (0, express_validator_1.check)("name", "name must be max 45").isLength({ max: 100 }),
    (0, express_validator_1.check)("weight", "weight is required").not().isEmpty(),
    (0, express_validator_1.check)("weight", "weight param must be a number value").isNumeric(),
    (0, express_validator_1.check)("cannabisWeight", "cannabisWeight is required").not().isEmpty(),
    (0, express_validator_1.check)("cannabisWeight", "cannabisWeight param must be a number value").isNumeric(),
    (0, express_validator_1.check)("price", "price is required").not().isEmpty(),
    (0, express_validator_1.check)("price", "price param must be a number value").isNumeric(),
    (0, express_validator_1.check)("fee", "fee is required").not().isEmpty(),
    (0, express_validator_1.check)("fee", "fee param must be a number value").isNumeric(),
    (0, express_validator_1.check)("sku", "sku must be max 45").isLength({ max: 100 }),
    (0, express_validator_1.check)("imageURL", "imageURL must be max 255").isLength({ max: 255 }),
    (0, express_validator_1.check)("barcode", "barcode must be max 100").isLength({ max: 100 }),
    (0, express_validator_1.check)("description", "description must be max 255").isLength({ max: 255 }),
    (0, express_validator_1.check)("cannabisVolume", "cannabisVolume param must be a number value")
        .optional()
        .isNumeric(),
    (0, express_validator_1.check)("isActive", "isActive param must be a integer value")
        .optional()
        .isInt(),
    (0, express_validator_1.check)("createDate", "createDate param must be a date")
        .optional()
        .isString(),
    (0, express_validator_1.check)("updateDate", "updateDate param must be a date")
        .optional()
        .isString(),
    (0, express_validator_1.check)("fullProductName", "fullProductName must be max 100").isLength({
        max: 100,
    }),
    (0, express_validator_1.check)("productSlug", "productSlug must be max 100").isLength({ max: 100 }),
    (0, express_validator_1.check)("salesPrice", "salesPrice is required").not().isEmpty(),
    (0, express_validator_1.check)("salesPrice", "salesPrice param must be a integer value").isInt(),
    (0, express_validator_1.check)("inventory", "inventory is required").not().isEmpty(),
    (0, express_validator_1.check)("inventory", "inventory param must be a integer value").isInt(),
    (0, express_validator_1.check)("discountAmount", "discountAmount is required").not().isEmpty(),
    (0, express_validator_1.check)("discountAmount", "discountAmount param must be a integer value").isInt(),
    (0, express_validator_1.check)("productscol", "productscol must be max 45").isLength({ max: 45 }),
    (0, express_validator_1.check)("categories_id", "categories_id is required").not().isEmpty(),
    (0, express_validator_1.check)("categories_id", "categories_idparam must be a number value").isInt(),
    (0, express_validator_1.check)("supplier_id", "supplier_id is required").not().isEmpty(),
    (0, express_validator_1.check)("supplier_id", "supplier_id param must be a number value").isInt(),
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
    valid_fields_middleware_1.ValidFields,
], productsController.create);
exports.productsRoutes.put("/:id", [
    (0, express_validator_1.check)("id", "Id param must be a number value").isNumeric(),
    (0, express_validator_1.check)("name", "name is required").not().isEmpty(),
    (0, express_validator_1.check)("name", "name must be max 45").isLength({ max: 100 }),
    (0, express_validator_1.check)("weight", "weight is required").not().isEmpty(),
    (0, express_validator_1.check)("weight", "weight param must be a number value").isNumeric(),
    (0, express_validator_1.check)("cannabisWeight", "cannabisWeight is required").not().isEmpty(),
    (0, express_validator_1.check)("cannabisWeight", "cannabisWeight param must be a number value").isNumeric(),
    (0, express_validator_1.check)("price", "price is required").not().isEmpty(),
    (0, express_validator_1.check)("price", "price param must be a number value").isNumeric(),
    (0, express_validator_1.check)("fee", "fee is required").not().isEmpty(),
    (0, express_validator_1.check)("fee", "fee param must be a number value").isNumeric(),
    (0, express_validator_1.check)("sku", "sku must be max 45").isLength({ max: 100 }),
    (0, express_validator_1.check)("imageURL", "imageURL must be max 255").isLength({ max: 255 }),
    (0, express_validator_1.check)("barcode", "barcode must be max 100").isLength({ max: 100 }),
    (0, express_validator_1.check)("description", "description must be max 255").isLength({ max: 255 }),
    (0, express_validator_1.check)("cannabisVolume", "cannabisVolume param must be a number value")
        .optional()
        .isNumeric(),
    (0, express_validator_1.check)("isActive", "isActive param must be a integer value")
        .optional()
        .isInt(),
    (0, express_validator_1.check)("createDate", "createDate param must be a integer value")
        .optional()
        .isString(),
    (0, express_validator_1.check)("updateDate", "updateDate param must be a integer value")
        .optional()
        .isString(),
    (0, express_validator_1.check)("fullProductName", "fullProductName must be max 100").isLength({
        max: 100,
    }),
    (0, express_validator_1.check)("productSlug", "productSlug must be max 100").isLength({ max: 100 }),
    (0, express_validator_1.check)("salesPrice", "salesPrice is required").not().isEmpty(),
    (0, express_validator_1.check)("salesPrice", "salesPrice param must be a number value").isInt(),
    (0, express_validator_1.check)("inventory", "inventory is required").not().isEmpty(),
    (0, express_validator_1.check)("inventory", "inventory param must be a number value").isInt(),
    (0, express_validator_1.check)("discountAmount", "inventory is required").not().isEmpty(),
    (0, express_validator_1.check)("discountAmount", "inventory param must be a number value").isInt(),
    (0, express_validator_1.check)("productscol", "productscol must be max 45").isLength({ max: 45 }),
    (0, express_validator_1.check)("categories_id", "categories_id is required").not().isEmpty(),
    (0, express_validator_1.check)("categories_id", "categories_id param must be a number value").isInt(),
    (0, express_validator_1.check)("supplier_id", "supplier_id is required").not().isEmpty(),
    (0, express_validator_1.check)("supplier_id", "supplier_id param must be a number value").isInt(),
    valid_fields_middleware_1.ValidFields,
], productsController.update);
exports.productsRoutes.delete("/:id", [(0, express_validator_1.check)("id", "Id param must be a number value").isNumeric(), valid_fields_middleware_1.ValidFields], productsController.remove);
//# sourceMappingURL=products.routes.js.map