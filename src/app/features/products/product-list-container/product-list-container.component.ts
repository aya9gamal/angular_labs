import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {
 @Output()
 onAddedContainer:EventEmitter<product>=new EventEmitter<product>(); 
// listItem={

// }
  constructor() { }

  ngOnInit(): void {
  }
 printProduct(event:product){
   console.log(event);
   this.onAddedContainer.emit(event);
  }
}
