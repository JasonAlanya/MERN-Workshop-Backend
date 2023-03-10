import { Request, Response } from "express";
import { failedStatus, sucessStatus } from "../helpers/statuses";
import { ProductsService } from "../services/products.service";

const productsService = new ProductsService();

export class ProductsController {
  async create(req: Request, res: Response) {
    try {
      const {
        name,
        weight,
        cannabisWeight,
        price,
        fee,
        sku,
        imageURL,
        barcode,
        description,
        cannabisVolume,
        isActive,
        createDate,
        updateDate,
        fullProductName,
        productSlug,
        salesPrice,
        inventory,
        discountAmount,
        productscol,
        categories_id,
        supplier_id,
        /*tenant_id,
        retailer_id,
        discount_id,
        parentProduct_id,*/
      } = req.body;
      const product = await productsService.create({
        name,
        weight,
        cannabisWeight,
        price,
        fee,
        sku,
        imageURL,
        barcode,
        description,
        cannabisVolume,
        isActive,
        createDate,
        updateDate,
        fullProductName,
        productSlug,
        salesPrice,
        inventory,
        discountAmount,
        productscol,
        categories_id,
        supplier_id,
        /*tenant_id,
        retailer_id,
        discount_id,
        parentProduct_id,*/
      });
      res.json(product);
      //res.json(sucessStatus(product));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const products = await productsService.getAll();
      res.json(products);
      //res.json(sucessStatus(products));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await productsService.getOneById(+id);
      res.json(product);
      //res.json(sucessStatus(product));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        name,
        weight,
        cannabisWeight,
        price,
        fee,
        sku,
        imageURL,
        barcode,
        description,
        cannabisVolume,
        isActive,
        createDate,
        updateDate,
        fullProductName,
        productSlug,
        salesPrice,
        inventory,
        discountAmount,
        productscol,
        categories_id,
        supplier_id,
        /*tenant_id,
        retailer_id,
        discount_id,
        parentProduct_id,*/
      } = req.body;
      const product = await productsService.update(+id, {
        name,
        weight,
        cannabisWeight,
        price,
        fee,
        sku,
        imageURL,
        barcode,
        description,
        cannabisVolume,
        isActive,
        createDate,
        updateDate,
        fullProductName,
        productSlug,
        salesPrice,
        inventory,
        discountAmount,
        productscol,
        categories_id,
        supplier_id,
        /*tenant_id,
        retailer_id,
        discount_id,
        parentProduct_id,*/
      });
      res.json(product);
      //res.json(sucessStatus(product));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }
  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await productsService.remove(+id);
      res.json(product);
      //res.json(sucessStatus(product));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }
}
