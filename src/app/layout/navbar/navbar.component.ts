import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/_services/product-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartOPen = false;
  @Input() 
  theaddedproduct !: product[];
  // productservice=new ProductService();
  
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {

    // this.theaddedproduct=this.productservice.cartArray;
    this.productservice.itemAdd.subscribe(
      (next) => {
        // console.log("next = ",next);
        // this.theaddedproduct.push(next);
     // }
        var index = this.theaddedproduct.findIndex(x => x._id == next._id)
        if (index === -1) {
          this.theaddedproduct.push(next);

        }
        else {
          console.log("object already exists");
          this.theaddedproduct[index].count++;
          console.log(this.theaddedproduct[index].count);

        }
      },
      (error) => { },
      () => { }
    )
  }


  DeleteItem(id: number) {

    let index = this.theaddedproduct!.findIndex(ele => ele._id == id);
        if (this.theaddedproduct[index].count == 1) {
      this.theaddedproduct.splice(index, 1);

    }
    else if (this.theaddedproduct[index].count > 1) {
      this.theaddedproduct[index]!.count--;
    }
     this.productservice.deleteCard(id);
  }


  number() {
    let num2 = 0;
    if (this.theaddedproduct.length > 0) {
      for (let i = 0; i < this.theaddedproduct.length; i++) {
        num2 = num2 + this.theaddedproduct[i].count;
      }
      return num2;
    }
    else {
      return 0;
    }

  }
total(){
  let c=0;
  for(let i=0;i<this.theaddedproduct.length;i++){
c=c+(this.theaddedproduct[i].discount ? this.theaddedproduct[i].price-this.theaddedproduct[i].discount!:this.theaddedproduct[i].price)*this.theaddedproduct[i].count;
  }
  return c;
}

}
