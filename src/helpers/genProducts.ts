import { CATEGORIES } from "../data/category";
import { PRODUCTS } from "../data/products";
import { IProduct } from "../interfaces/product.interface";
import { randomInt } from "./tools";

const generateProductMeasures = () => {
  const weight: number = Number((Math.random() * 10).toFixed(2));
  const cannabisWeight: number = Number(
    (weight * Math.random() * 0.25).toFixed(2)
  );
  const cannabisVolume: number = Number((cannabisWeight * 1.3).toFixed(2));
  return { weight, cannabisWeight, cannabisVolume };
};

const generateProductCosts = (cannabisWeight: number) => {
  const price: number = Number(
    (cannabisWeight * Math.random() * 10).toFixed(2)
  );
  const fee: number = Number((price * Math.random()).toFixed(2));
  const salesPrice: number = Number((price + fee).toFixed(2));
  const discountAmount: number = Number(
    (price * Math.random() * 0.1).toFixed(2)
  );
  return { price, fee, salesPrice, discountAmount };
};

export const genProducts = (): IProduct[] => {
  let products: IProduct[] = [];
  for (let i: number = 0; i < PRODUCTS.length; i++) {
    const measures = generateProductMeasures();
    const Costs = generateProductCosts(measures.cannabisWeight);
    products.push({
      //id: i + 1,
      name: PRODUCTS[i],
      weight: measures.weight,
      cannabisWeight: measures.cannabisWeight,
      price: Costs.price,
      fee: Costs.fee,
      sku: `SKU${randomInt(9999)}`,
      imageURL: `http://${PRODUCTS[i]}.com`,
      barcode: "||| | ||",
      description: "description",
      cannabisVolume: measures.cannabisVolume,
      isActive: randomInt(2),
      createDate: new Date(Date.now()),
      updateDate: new Date(Date.now()),
      fullProductName: PRODUCTS[i],
      productSlug: "slug",
      salesPrice: Costs.salesPrice,
      inventory: randomInt(25),
      discountAmount: Costs.discountAmount,
      productscol: "productscol",
      categories_id: randomInt(CATEGORIES.length) + 1,
      supplier_id: randomInt(10) + 1,
      /*tenant_id: randomInt(10),
      retailer_id: randomInt(10),
      discount_id: randomInt(10),
      parentProduct_id: randomInt(10),*/
    });
  }
  return products;
};
