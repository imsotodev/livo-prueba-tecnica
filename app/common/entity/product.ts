export interface ProductAPIResponse {
  data: Product[];
  pagination: Pagination;
}
export interface Product {
  entity_id: number;
  similar_products?: Product[];
  attributes: Attribute[];
  images: Image[];
  attribute_set: AttributeSet;
  qty?: number;
  qty_reservation?: number;
  qty_available?: number;
  parent_sku: string;
  created_at: Date;
  name: string;
  sku: string;
  ean: string;
  description: null;
  price: number;
  price_cost: number;
  special_price: number;
  visibility: boolean;
  spot: boolean;
  parent_id: number;
  active: boolean;
  sales_amount: number;
  product_cost: number;
  is_searchable: boolean;
  product_family: ProductFamily;
  product_group: ProductGroup;
  product_subgroup: ProductSubgroup;
  product_class: ProductClass;
  product_brand: ProductBrand;
  product_kpl: string;
  formula: null;
  product: number;
}
export type ProductPreview = Pick<
  Product,
  | "name"
  | "price"
  | "special_price"
  | "attribute_set"
  | "images"
  | "similar_products"
  | "sku"
  | "visibility"
  | "active"
  | "product_brand"
  | "qty_available"
  | "parent_sku"
  | "created_at"
>;

export interface AttributeSet {
  entity_id: number;
  created_at: Date;
  name?: ProductClass;
  description: null | string;
  active: boolean;
  image?: string;
}

export enum ProductClass {
  ÓculosDeGrau = "Óculos de Grau",
  ÓculosDeSol = "Óculos de Sol",
}

export interface Attribute {
  entity_id: number;
  is_filterable: boolean;
  is_visible_on_front: boolean;
  name: Name;
  type: Type;
  value: number | string;
  value_attribute_option_1: null | string;
  value_attribute_option_type_1: ValueAttributeOptionType1 | null;
  value_attribute_option_2: null | string;
  value_attribute_option_type_2: null | string;
}

export enum Name {
  Altura = "Altura",
  Comprimento = "Comprimento",
  Cores = "CORES",
  DadosTécnicos = "Dados Técnicos",
  Descripción = "Descripción",
  Espessura = "Espessura",
  Genero = "GENERO",
  IdadeGoogle = "IDADE_GOOGLE",
  Largura = "Largura",
  ModelsGlasses = "Models Glasses",
  Peso = "Peso",
  PrazoEntrega = "prazoEntrega",
  Profundidade = "Profundidade",
}

export enum Type {
  Decimal = "decimal",
  Int = "int",
  Text = "text",
  Varchar = "varchar",
}

export enum ValueAttributeOptionType1 {
  Code = "code",
  Img = "img",
}

export interface Image {
  entity_id: number;
  image: AttributeSet;
  created_at: Date;
  sort: number;
  main: boolean;
  active: boolean;
  product_variant: number;
}

export enum ProductBrand {
  Livo = "LIVO",
}

export enum ProductFamily {
  Armação = "Armação",
}

export enum ProductGroup {
  Óculos = "Óculos",
}

export enum ProductSubgroup {
  Receituário = "Receituário",
  Solar = "Solar",
}

export interface Pagination {
  count: number;
  num_pages: number;
  page: number;
  limit: number;
}
