import { Request, Response } from "express";
import { failedStatus, sucessStatus } from "../helpers/statuses";
import { SuppliersService } from "../services/supplier.service";

const suppliersService = new SuppliersService();

export class SuppliersController {
  async create(req: Request, res: Response) {
    try {
      const { supplierName, address, email, phone } = req.body;
      const supplier = await suppliersService.create({
        supplierName,
        address,
        email,
        phone,
      });
      res.json(sucessStatus(supplier));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const suppliers = await suppliersService.getAll();
      res.json(sucessStatus(suppliers));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const supplier = await suppliersService.getOneById(+id);
      res.json(sucessStatus(supplier));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { supplierName, address, email, phone } = req.body;
      const supplier = await suppliersService.update(+id, {
        supplierName,
        address,
        email,
        phone,
      });
      res.json(sucessStatus(supplier));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }
  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const supplier = await suppliersService.remove(+id);
      res.json(sucessStatus(supplier));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }
}
