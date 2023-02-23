import { genProducts } from "../helpers/genProducts";
import { IProduct } from "../interfaces/product.interface";
import { ModelData } from "../models/ModelData";
import { Product } from "../models/product";
export class ProductsService {
  private productModel: ModelData<IProduct> = new ModelData();
  constructor() {
    //this.productModel.loadData(genProducts());
  }
  async create(data: IProduct) {
    //return await this.productModel.create(data);
    return await Product.create({ ...data });
  }
  async getAll() {
    //return await this.productModel.find();
    return await Product.findAll();
  }
  async getOneById(id: number) {
    //return await this.productModel.findById(id);
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return await product;
  }
  async update(id: number, data: IProduct) {
    //return await this.productModel.updateOneById(id, data);
    const product = await this.getOneById(id);
    return await product.update({ ...data });
  }
  async remove(id: number) {
    //return await this.productModel.deleteOneById(id);
    const product = await this.getOneById(id);
    return await product.destroy();
  }
}
