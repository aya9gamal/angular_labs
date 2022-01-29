import { not } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/_services/product-service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
@Input() 
productItem !:product;

// @Output()
// itembed:EventEmitter<product>=new EventEmitter<product>();

//new way
// productservice=new ProductService();
  constructor(private productservice:ProductService) { }


  ngOnInit(): void {
  }
onAddToCart(){  
  // this.itembed.emit(this.productItem);
  // console.log(this.productItem)
  // this.productservice.addItemToCart(this.productItem);
  this.productservice.itemAdd.emit(this.productItem);
}
// getdata(){
//   this.productservice
// }

}
