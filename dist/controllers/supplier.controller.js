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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppliersController = void 0;
const statuses_1 = require("../helpers/statuses");
const supplier_service_1 = require("../services/supplier.service");
const suppliersService = new supplier_service_1.SuppliersService();
class SuppliersController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { supplierName, address, email, phone } = req.body;
                const supplier = yield suppliersService.create({
                    supplierName,
                    address,
                    email,
                    phone,
                });
                res.json((0, statuses_1.sucessStatus)(supplier));
            }
            catch (error) {
                res.status(400).json((0, statuses_1.failedStatus)(error));
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const suppliers = yield suppliersService.getAll();
                res.json((0, statuses_1.sucessStatus)(suppliers));
            }
            catch (error) {
                res.status(400).json((0, statuses_1.failedStatus)(error));
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const supplier = yield suppliersService.getOneById(+id);
                res.json((0, statuses_1.sucessStatus)(supplier));
            }
            catch (error) {
                res.status(400).json((0, statuses_1.failedStatus)(error));
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { supplierName, address, email, phone } = req.body;
                const supplier = yield suppliersService.update(+id, {
                    supplierName,
                    address,
                    email,
                    phone,
                });
                res.json((0, statuses_1.sucessStatus)(supplier));
            }
            catch (error) {
                res.status(400).json((0, statuses_1.failedStatus)(error));
            }
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const supplier = yield suppliersService.remove(+id);
                res.json((0, statuses_1.sucessStatus)(supplier));
            }
            catch (error) {
                res.status(400).json((0, statuses_1.failedStatus)(error));
            }
        });
    }
}
exports.SuppliersController = SuppliersController;
//# sourceMappingURL=supplier.controller.js.map