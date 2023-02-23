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
exports.CategoriesService = void 0;
const ModelData_1 = require("../models/ModelData");
const category_1 = require("../models/category");
const connectiondb_1 = require("../database/connectiondb");
const sequelize_1 = require("sequelize");
class CategoriesService {
    constructor() {
        this.categoryModel = new ModelData_1.ModelData();
        //this.categoryModel.loadData(genCategories());
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            //return await this.categoryModel.create(data);
            return yield category_1.Category.create(Object.assign({}, data));
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            //return await this.categoryModel.find();
            //return await Category.findAll();
            return yield connectiondb_1.db.query(`SELECT child.*, parent.categoryName as parentCategoryName FROM categories AS child
      LEFT JOIN categories AS parent ON child.categoriesParent_id=parent.id`, { type: sequelize_1.QueryTypes.SELECT });
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            //return await this.categoryModel.findById(id);
            const category = yield category_1.Category.findByPk(id);
            if (!category) {
                throw new Error(`Category with id ${id} not found`);
            }
            return yield category;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            //return await this.categoryModel.updateOneById(id, data);
            const category = yield this.getOneById(id);
            return yield category.update(Object.assign({}, data));
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            //return await this.categoryModel.deleteOneById(id);
            const category = yield this.getOneById(id);
            return yield category.destroy();
        });
    }
}
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map