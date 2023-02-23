"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genProducts = void 0;
const category_1 = require("../data/category");
const products_1 = require("../data/products");
const tools_1 = require("./tools");
const generateProductMeasures = () => {
    const weight = Number((Math.random() * 10).toFixed(2));
    const cannabisWeight = Number((weight * Math.random() * 0.25).toFixed(2));
    const cannabisVolume = Number((cannabisWeight * 1.3).toFixed(2));
    return { weight, cannabisWeight, cannabisVolume };
};
const generateProductCosts = (cannabisWeight) => {
    const price = Number((cannabisWeight * Math.random() * 10).toFixed(2));
    const fee = Number((price * Math.random()).toFixed(2));
    const salesPrice = Number((price + fee).toFixed(2));
    const discountAmount = Number((price * Math.random() * 0.1).toFixed(2));
    return { price, fee, salesPrice, discountAmount };
};
const genProducts = () => {
    let products = [];
    for (let i = 0; i < products_1.PRODUCTS.length; i++) {
        const measures = generateProductMeasures();
        const Costs = generateProductCosts(measures.cannabisWeight);
        products.push({
            //id: i + 1,
            name: products_1.PRODUCTS[i],
            weight: measures.weight,
            cannabisWeight: measures.cannabisWeight,
            price: Costs.price,
            fee: Costs.fee,
            sku: `SKU${(0, tools_1.randomInt)(9999)}`,
            imageURL: `http://${products_1.PRODUCTS[i]}.com`,
            barcode: "||| | ||",
            description: "description",
            cannabisVolume: measures.cannabisVolume,
            isActive: (0, tools_1.randomInt)(2),
            createDate: new Date(Date.now()),
            updateDate: new Date(Date.now()),
            fullProductName: products_1.PRODUCTS[i],
            productSlug: "slug",
            salesPrice: Costs.salesPrice,
            inventory: (0, tools_1.randomInt)(25),
            discountAmount: Costs.discountAmount,
            productscol: "productscol",
            categories_id: (0, tools_1.randomInt)(category_1.CATEGORIES.length) + 1,
            supplier_id: (0, tools_1.randomInt)(10) + 1,
            /*tenant_id: randomInt(10),
            retailer_id: randomInt(10),
            discount_id: randomInt(10),
            parentProduct_id: randomInt(10),*/
        });
    }
    return products;
};
exports.genProducts = genProducts;
//# sourceMappingURL=genProducts.js.map