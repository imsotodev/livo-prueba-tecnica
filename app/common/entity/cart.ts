export interface CartAPIResponse {
  quote_id: number;
  subtotal: string;
  total: number;
  base_subtotal: string;
  base_grant_total: string;
  discount_amount: string;
  items: Item[];
  coupons: Coupon[];
  address: any[];
  delivery_time: DeliveryTime;
  discounts: any[];
  method_shipment: any[];
}

export type ModalCartData = Pick<CartAPIResponse, "items"| "subtotal" | "total">

export interface Coupon {
  id: number;
  coupon_code: string;
  quote: number;
  sale_rule: SaleRule;
}

export interface SaleRule {
  name: string;
  description: string;
}

export interface DeliveryTime {
  delivery_promise_date: Date;
  delivery_time: number;
}

export interface Item {
  item_id: number;
  sku: string;
  qty: string;
  qty_no_stock: string;
  name: string;
  description: string;
  price: string;
  base_price: string;
  quote_id: number;
  additional_data: AdditionalData;
  recipe_images: any[];
  delivery_time: number;
  sub_id: string;
  type: string;
}

export type CartResumeItem = Pick<
  Item,
  "name" | "price" | "qty" | "sku" | "item_id"
>;

export interface AdditionalData {}
