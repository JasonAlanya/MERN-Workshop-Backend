export interface IProduct {
  //id: number;
  name: string;
  weight: number;
  cannabisWeight: number;
  price: number;
  fee: number;
  sku?: string;
  imageURL?: string;
  barcode?: string;
  description?: string;
  cannabisVolume?: number;
  isActive?: number;
  createDate?: Date;
  updateDate?: Date;
  fullProductName?: string;
  productSlug?: string;
  salesPrice: number;
  inventory: number;
  discountAmount: number;
  productscol?: string;
  categories_id: number;
  supplier_id: number;
  /*tenant_id: number;
  retailer_id: number;
  discount_id: number;
  parentProduct_id: number;*/
}
