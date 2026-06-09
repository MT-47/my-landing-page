import { Injectable } from '@angular/core';
import { ICategory } from '../_models/icategory';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private categories: ICategory[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Stationery' },
  ];

  getAll(): ICategory[] {
    return this.categories;
  }

  getById(id: number): ICategory | undefined {
    return this.categories.find((c) => c.id === id);
  }
}
