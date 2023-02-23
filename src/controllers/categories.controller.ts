import { Request, Response } from "express";
import { failedStatus, sucessStatus } from "../helpers/statuses";
import { CategoriesService } from "../services/categories.service";

const categoriesService = new CategoriesService();

export class CategoriesController {
  async create(req: Request, res: Response) {
    try {
      const { categoryName, photoType, categoriesParent_id } = req.body;
      const category = await categoriesService.create({
        categoryName,
        photoType,
        categoriesParent_id,
      });
      res.json(sucessStatus(category));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const categories = await categoriesService.getAll();
      res.json(sucessStatus(categories));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await categoriesService.getOneById(+id);
      res.json(sucessStatus(category));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { categoryName, photoType, categoriesParent_id } = req.body;
      const category = await categoriesService.update(+id, {
        categoryName,
        photoType,
        categoriesParent_id,
      });
      res.json(sucessStatus(category));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }
  async remove(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await categoriesService.remove(+id);
      res.json(sucessStatus(category));
    } catch (error) {
      res.status(400).json(failedStatus(error));
    }
  }
}
