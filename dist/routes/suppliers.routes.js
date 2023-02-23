"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suppliersRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const supplier_controller_1 = require("../controllers/supplier.controller");
const valid_fields_middleware_1 = require("../middlewares/valid-fields.middleware");
exports.suppliersRoutes = (0, express_1.Router)();
const suppliersController = new supplier_controller_1.SuppliersController();
exports.suppliersRoutes.get("/", suppliersController.getAll);
exports.suppliersRoutes.get("/:id", [(0, express_validator_1.check)("id", "Id param must be a number value").isNumeric(), valid_fields_middleware_1.ValidFields], suppliersController.getOne);
exports.suppliersRoutes.post("/", [
    (0, express_validator_1.check)("supplierName", "supplierName is required").not().isEmpty(),
    (0, express_validator_1.check)("supplierName", "supplierName must be max 45").isLength({ max: 45 }),
    (0, express_validator_1.check)("address", "address must be max 100").isLength({ max: 100 }),
    (0, express_validator_1.check)("email", "email is required").not().isEmpty(),
    (0, express_validator_1.check)("email", "email must be max 100").isLength({ max: 100 }),
    (0, express_validator_1.check)("phone", "phone must be max 20").isLength({ max: 20 }),
    valid_fields_middleware_1.ValidFields,
], suppliersController.create);
exports.suppliersRoutes.put("/:id", [
    (0, express_validator_1.check)("id", "Id param must be a number value").isNumeric(),
    (0, express_validator_1.check)("supplierName", "supplierName is required").not().isEmpty(),
    (0, express_validator_1.check)("supplierName", "supplierName must be max 45").isLength({ max: 45 }),
    (0, express_validator_1.check)("address", "address must be max 100").isLength({ max: 100 }),
    (0, express_validator_1.check)("email", "email is required").not().isEmpty(),
    (0, express_validator_1.check)("email", "email must be max 100").isLength({ max: 100 }),
    (0, express_validator_1.check)("phone", "phone must be max 20").isLength({ max: 20 }),
    valid_fields_middleware_1.ValidFields,
], suppliersController.update);
exports.suppliersRoutes.delete("/:id", [(0, express_validator_1.check)("id", "Id param must be a number value").isNumeric(), valid_fields_middleware_1.ValidFields], suppliersController.remove);
//# sourceMappingURL=suppliers.routes.js.map