import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  private productsService = inject(ProductsService);

  products$ = this.productsService.GetProducts();

  cart: Product[] = [];
  cartSum = 0;

  addProductToCart(product: Product) {
    const index = this.cart.indexOf(product);
    if (index === -1) {
      this.cart.push(product);
    } else {
      this.cart.splice(index, 1);
    }
    this.cartSum = this.cart.reduce((acc, product) => acc + product.price, 0);
  }
}
