import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { PaymentType } from 'src/app/models/payment.type.model';
import { product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentMethodService } from 'src/app/_services/payment-method.service';
import { ProductService } from 'src/app/_services/product-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  cateog !:Category[];
  product={} as product;
  paymentmethod!:PaymentType[];
    constructor(private categoryservice:CategoryService,private paymethod:PaymentMethodService,private productService:ProductService,private router:Router ) {
     }

     ngOnInit(): void {
      this.cateog=this.getcategories();
      this.paymentmethod=this.getallpayment();
      
        }
        getcategories():Category[]{
          return this.categoryservice.getAllCategories();
        }
        getallpayment():PaymentType[]{
          return this.paymethod.getAllPayment();
        }
        onFormSubmit(myproductForm:NgForm):void{
          console.log(myproductForm.value)
        }
        oncheckbox(i:number){
          console.log(this.paymentmethod[i]);
        }
      onclickAdd(myproductForm:NgForm){
         // this.productservice.itemAdd.emit(this.productItem);
        console.log(myproductForm.value)
        this.productService.itemAdd.emit(myproductForm.value);
      }
     oncancer(){
      this.router.navigateByUrl('/home')
     } 

}
