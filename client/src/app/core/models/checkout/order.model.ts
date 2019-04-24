import { CartBookModel } from '../cart/cart.model';

export class OrderModel {
  _id: string
  creator: string
  books: CartBookModel[]
  date: Date
}
