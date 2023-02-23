"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categriesRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const categories_controller_1 = require("../controllers/categories.controller");
const validExpresions_1 = require("../helpers/validExpresions");
const valid_fields_middleware_1 = require("../middlewares/valid-fields.middleware");
exports.categriesRoutes = (0, express_1.Router)();
const categoriesController = new categories_controller_1.CategoriesController();
exports.categriesRoutes.get("/", categoriesController.getAll);
exports.categriesRoutes.get("/:id", [
    (0, express_validator_1.check)("id", "Id param must be a number value").isNumeric(),
    //check("id", "Id param must be a number between 1 and 32").isInt({min: 1,max: 32,}),
    valid_fields_middleware_1.ValidFields,
], categoriesController.getOne);
exports.categriesRoutes.post("/", [
    (0, express_validator_1.check)("categoryName", "categoryName is required").not().isEmpty(),
    (0, express_validator_1.check)("categoryName", "categoryName must be max 45").isLength({ max: 45 }),
    (0, express_validator_1.check)("photoType", "photoType is required").not().isEmpty(),
    (0, express_validator_1.check)("photoType", "photoType must be max 45").isLength({ max: 45 }),
    (0, express_validator_1.check)("photoType", 'photoType is enum "Photo, Document or Kml"').custom(validExpresions_1.validPhotoType),
    (0, express_validator_1.check)("categoriesParent_id", "categoriesParent_id must be an positive integer")
        .isInt()
        .optional(),
    valid_fields_middleware_1.ValidFields,
], categoriesController.create);
exports.categriesRoutes.put("/:id", [
    (0, express_validator_1.check)("id", "Id param must be a number value").isNumeric(),
    (0, express_validator_1.check)("categoryName", "categoryName is required").not().isEmpty(),
    (0, express_validator_1.check)("categoryName", "categoryName must be max 45").isLength({ max: 45 }),
    (0, express_validator_1.check)("photoType", "photoType must be max 45").isLength({ max: 45 }),
    (0, express_validator_1.check)("photoType", 'photoType is enum "Photo, Document or Kml"').custom(validExpresions_1.validPhotoType),
    (0, express_validator_1.check)("categoriesParent_id", "categoriesParent_id must be an positive integer")
        .isInt()
        .optional(),
    valid_fields_middleware_1.ValidFields,
], categoriesController.update);
exports.categriesRoutes.delete("/:id", [(0, express_validator_1.check)("id", "Id param must be a number value").isNumeric(), valid_fields_middleware_1.ValidFields], categoriesController.remove);
//# sourceMappingURL=categories.routes.js.map