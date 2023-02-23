import { Router } from "express";
import { check } from "express-validator";
import { CategoriesController } from "../controllers/categories.controller";
import { validPhotoType } from "../helpers/validExpresions";
import { ValidFields } from "../middlewares/valid-fields.middleware";

export const categriesRoutes: Router = Router();

const categoriesController = new CategoriesController();

categriesRoutes.get("/", categoriesController.getAll);
categriesRoutes.get(
  "/:id",
  [
    check("id", "Id param must be a number value").isNumeric(),
    //check("id", "Id param must be a number between 1 and 32").isInt({min: 1,max: 32,}),
    ValidFields,
  ],
  categoriesController.getOne
);
categriesRoutes.post(
  "/",
  [
    check("categoryName", "categoryName is required").not().isEmpty(),
    check("categoryName", "categoryName must be max 45").isLength({ max: 45 }),
    check("photoType", "photoType is required").not().isEmpty(),
    check("photoType", "photoType must be max 45").isLength({ max: 45 }),
    check("photoType", 'photoType is enum "Photo, Document or Kml"').custom(
      validPhotoType
    ),
    check(
      "categoriesParent_id",
      "categoriesParent_id must be an positive integer"
    )
      .isInt()
      .optional(),
    ValidFields,
  ],
  categoriesController.create
);
categriesRoutes.put(
  "/:id",
  [
    check("id", "Id param must be a number value").isNumeric(),
    check("categoryName", "categoryName is required").not().isEmpty(),
    check("categoryName", "categoryName must be max 45").isLength({ max: 45 }),
    check("photoType", "photoType must be max 45").isLength({ max: 45 }),
    check("photoType", 'photoType is enum "Photo, Document or Kml"').custom(
      validPhotoType
    ),
    check(
      "categoriesParent_id",
      "categoriesParent_id must be an positive integer"
    )
      .isInt()
      .optional(),
    ValidFields,
  ],
  categoriesController.update
);
categriesRoutes.delete(
  "/:id",
  [check("id", "Id param must be a number value").isNumeric(), ValidFields],
  categoriesController.remove
);
