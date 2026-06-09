import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../../_models/iproduct';
import { ICategory } from '../../../_models/icategory';
import { ProductService } from '../../../_services/product';
import { CategoryService } from '../../../_services/category';

@Component({
  selector: 'app-productlist',
  imports: [FormsModule],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist implements OnInit {
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  categories: ICategory[] = [];
  products: IProduct[] = [];
  selectedCatId: number = 0;
  totalOrderPrice: number = 0;

  ngOnInit() {
    this.categories = this.categoryService.getAll();
  }

  onCategoryChange() {
    this.products = this.selectedCatId ? this.productService.getByCat(this.selectedCatId) : [];
  }

  buy(price: number, quantity: string) {
    this.totalOrderPrice += price * +quantity;
  }
}
