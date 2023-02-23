"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCategories = void 0;
const category_1 = require("../data/category");
const genCategories = () => {
    let categories = [];
    for (let i = 0; i < category_1.CATEGORIES.length; i++) {
        const category = {
            categoryName: category_1.CATEGORIES[i],
            photoType: category_1.TYPEPHOTO[Math.floor(Math.random() * category_1.TYPEPHOTO.length)],
            //categoriesParent_id: Math.floor(Math.random() * i),
        };
        categories.push(category);
    }
    return categories;
};
exports.genCategories = genCategories;
//# sourceMappingURL=genCategories.js.map