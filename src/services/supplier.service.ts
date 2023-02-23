import { ISupplier } from "../interfaces/supplier.interface";
import { ModelData } from "../models/ModelData";
import { genSuppliers } from "../helpers/genSupplier";
import { Supplier } from "../models/supplier";
export class SuppliersService {
  private supplierModel: ModelData<ISupplier> = new ModelData();
  constructor() {
    //this.supplierModel.loadData(genSuppliers());
  }
  async create(data: ISupplier) {
    //return await this.supplierModel.create(data);
    return await Supplier.create({ ...data });
  }
  async getAll() {
    //return await this.supplierModel.find();
    return await Supplier.findAll();
  }
  async getOneById(id: number) {
    //return await this.supplierModel.findById(id);
    const supplier = await Supplier.findByPk(id);
    if (!supplier) {
      throw new Error(`Supplier with id ${id} not found`);
    }
    return await supplier;
  }
  async update(id: number, data: ISupplier) {
    //return await this.supplierModel.updateOneById(id, data);
    const supplier = await this.getOneById(id);
    return await supplier.update({ ...data });
  }
  async remove(id: number) {
    //return await this.supplierModel.deleteOneById(id);
    const supplier = await this.getOneById(id);
    return await supplier.destroy();
  }
}
