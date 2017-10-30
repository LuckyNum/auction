import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书']),
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书']),
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书']),
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书']),
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书']),
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书'])
    ];
  }

}
export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ){

  }
}
