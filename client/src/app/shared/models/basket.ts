import { v4 as uuidv4 } from 'uuid'; //v4 as uuidv4, uuidv4 is my custom import name, instead of using v4, could be  {v4 as myBAsketiD}

export interface IBasketItem {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  pictureURL: string;
  brand: string;
  type: string;
}

export interface IBasket {
  id: string;
  items: IBasketItem[] | any;
  clientSecret?: string;
  paymentIntentId?: string;
  deliveryMethodId?: number;
  shippingPrice?: number;
}

export class Basket implements IBasket {
  id = uuidv4();
  items: IBasketItem[] = [];
}

export interface IBasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}
