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
product !:product;
relatedProductsArray!:product[];
  ngOnInit(): void {  
  //  this.productservice.itemAdd.subscribe(
  //    (next)=>{
  //      console.log(next);
  //      this.product.push(next);
  //    }
  //  )
  
 //let id=this.activateRouter.snapshot.params['productId'];
// console.log(this.activateRouter.queryParams.subscribe());
  //  console.log(this.activateRouter.snapshot)
  this.activateRouter.params.subscribe(
    (params)=>{
      console.log(params);
      const id = params['productId'];
      if(id){
        this.getProductById(id)
        this.getAllProducts();
      }
      
    }
  )
      
    }
    getProductById(id:string){
      this.productservice.getProductById(id).subscribe(
        (res)=>{this.product=res;}
      )
    }
    getAllProducts(){
      this.productservice.getAllproducts().subscribe(
        (res)=>{
    this.relatedProductsArray=res.product.splice(0,6);
        }
      )
    }

}
