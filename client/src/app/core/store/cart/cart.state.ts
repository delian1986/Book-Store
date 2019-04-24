import { CartBookModel } from "../../models/cart/cart.model";

export interface CartState {
  readonly books: CartBookModel[]
}
