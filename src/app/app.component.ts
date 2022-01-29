import { Component, Output } from '@angular/core';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_day1';
 count=1;
  addproduct:product []=[];
  
//  printProduct_parent(e:product){      
// // this.addproduct.push(e);
// var index =this.addproduct.findIndex(x => x.id == e.id)
// if (index === -1) {
//   this.addproduct.push(e);
 
// }
// else 
// {
//   console.log("object already exists");
//   this.addproduct[index].count++;
//    console.log(this.addproduct[index].count);
  
// } 

// }

}
