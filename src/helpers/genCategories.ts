import { CATEGORIES, TYPEPHOTO } from "../data/category";
import { ICategory } from "../interfaces/category.interface";

export const genCategories = (): ICategory[] => {
  let categories: ICategory[] = [];
  for (let i: number = 0; i < CATEGORIES.length; i++) {
    const category: ICategory = {
      categoryName: CATEGORIES[i],
      photoType: TYPEPHOTO[Math.floor(Math.random() * TYPEPHOTO.length)],
      //categoriesParent_id: Math.floor(Math.random() * i),
    };
    categories.push(category);
  }
  return categories;
};
