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
exports.CategoriesController = void 0;
const statuses_1 = require("../helpers/statuses");
const categories_service_1 = require("../services/categories.service");
const categoriesService = new categories_service_1.CategoriesService();
class CategoriesController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryName, photoType, categoriesParent_id } = req.body;
                const category = yield categoriesService.create({
                    categoryName,
                    photoType,
                    categoriesParent_id,
                });
                res.json(category);
                //res.json(sucessStatus(category));
            }
            catch (error) {
                res.status(400).json((0, statuses_1.failedStatus)(error));
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield categoriesService.getAll();
                res.json(categories);
                //res.json(sucessStatus(categories));
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
                const category = yield categoriesService.getOneById(+id);
                res.json(category);
                //res.json(sucessStatus(category));
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
                const { categoryName, photoType, categoriesParent_id } = req.body;
                const category = yield categoriesService.update(+id, {
                    categoryName,
                    photoType,
                    categoriesParent_id,
                });
                res.json(category);
                //res.json(sucessStatus(category));
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
                const category = yield categoriesService.remove(+id);
                res.json(category);
                //res.json(sucessStatus(category));
            }
            catch (error) {
                res.status(400).json((0, statuses_1.failedStatus)(error));
            }
        });
    }
}
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map