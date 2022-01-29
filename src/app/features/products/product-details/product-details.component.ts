import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/_services/product-service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // productservice=new ProductService();
   constructor(private activateRouter:ActivatedRoute,private productservice:ProductService) { }
  // constructor(private productservice:ProductService) { }
  // @Input() 
product !:product[];
  ngOnInit(): void {  
  //  this.productservice.itemAdd.subscribe(
  //    (next)=>{
  //      console.log(next);
  //      this.product.push(next);
  //    }
  //  )
  
  let id=this.activateRouter.snapshot.params;

  //  console.log(this.activateRouter.snapshot)
   console.log(id);
  //  if(id){
   this.getProductBYID(+id);
  //  console.log(d);
  //  }
  //  console.log(id);
  }
getProductBYID(id:number){
  // this.productservice.getProductById(id).subscribe(
  //   (res)=>{
  //     console.log(res);
  //     this.product=res;
  //   }
  // )
  let d=this.productservice.getProductById(id);
  console.log(d);
}

}
