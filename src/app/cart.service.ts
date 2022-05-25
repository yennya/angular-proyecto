import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    './metodo que agrega un producto a una matriz';
    this.items.push(product);
  }

  getItems() {
    '/.recopila los productos y los devuelve con su cantidad asociada ';
    return this.items;
  }

  clearCart() {
    './vacia el carrito';
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  constructor(private http: HttpClient) {}
}
