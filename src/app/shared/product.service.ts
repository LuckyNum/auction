import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书']),
    new Product(2, '第二个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书']),
    new Product(3, '第三个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书']),
    new Product(4, '第四个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书']),
    new Product(5, '第五个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书']),
    new Product(6, '第六个商品', 1.99, 3.5, '这是第一个商品，这是描述', ['电子产品', '图书'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-01-01 12:12:12', '张三', 3, '不错哦'),
    new Comment(2, 1, '2017-01-01 12:12:12', '张三', 2, '不错哦'),
    new Comment(3, 1, '2017-01-01 12:12:12', '张三', 3, '不错哦'),
    new Comment(4, 1, '2017-01-01 12:12:12', '张三', 4, '不错哦'),
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
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
  ) {

  }
}

export class Comment {

  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
