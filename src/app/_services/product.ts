import { Injectable } from '@angular/core';
import { IProduct } from '../_models/iproduct';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private storageKey = 'products';

  private defaultProducts: IProduct[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
      quantity: 10,
      imgUrl: 'https://picsum.photos/200?random=1',
      catId: 1,
    },
    {
      id: 2,
      name: 'Mouse',
      price: 25,
      quantity: 0,
      imgUrl: 'https://picsum.photos/200?random=2',
      catId: 1,
    },
    {
      id: 3,
      name: 'T-Shirt',
      price: 30,
      quantity: 1,
      imgUrl: 'https://picsum.photos/200?random=3',
      catId: 2,
    },
    {
      id: 4,
      name: 'Jeans',
      price: 70,
      quantity: 25,
      imgUrl: 'https://picsum.photos/200?random=4',
      catId: 2,
    },
    {
      id: 5,
      name: 'Coffee Mug',
      price: 12,
      quantity: 0,
      imgUrl: 'https://picsum.photos/200?random=5',
      catId: 3,
    },
    {
      id: 6,
      name: 'Notebook',
      price: 8,
      quantity: 100,
      imgUrl: 'https://picsum.photos/200?random=6',
      catId: 3,
    },
  ];

  private load(): IProduct[] {
    const data = localStorage.getItem(this.storageKey);
    if (data) return JSON.parse(data);
    this.save(this.defaultProducts);
    return this.defaultProducts;
  }

  private save(products: IProduct[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  getAll(): IProduct[] {
    return this.load();
  }
  getByCat(catId: number): IProduct[] {
    return this.load().filter((p) => p.catId === catId);
  }
  getById(id: number): IProduct | undefined {
    return this.load().find((p) => p.id === id);
  }
}
