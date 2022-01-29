import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/_services/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
//   productArray:product[]=[
// {
//   id:1,
//   name:'Photo Camer 1',
//   price:100,
//   // discount:10,
//   imageUrl:"../../assets/3.jpg",
//   descriptipn:"desc",
//   count:1
// },
// {id:2,
//   name:'Photo Camer 2',
//   price:200,
//   discount:10,
//   imageUrl:'../../assets/2.jpg',
//   descriptipn:"desc",
//   count:1
// },
// {
//   id:3,
//   name:'Photo Camer 3',
//   price:300,
//   // discount:10,
//   imageUrl:'../../assets/1.jpg',
//   descriptipn:"desc"
//   ,
//   count:1
// },
// {
//   id:4,
//   name:'Photo Camer 4',
//   price:400,
//   discount:10,
//   imageUrl:'../../assets/1.jpg',
//   descriptipn:"desc"
//   ,
//   count:1
// },
// {
//   id:5,
//   name:'Photo Camer 5',
//   price:500,
//   discount:10,
//   imageUrl:'../../assets/3.jpg',
//   descriptipn:"desc"
//   ,
//   count:1
// },
// {
//   id:6,
//   name:'Photo Camer 6',
//   price:600,
//   // discount:10,
//   imageUrl:'../../assets/2.jpg',
//   descriptipn:"desc"
//   ,
//   count:1
// },
// {
//   id:7,
//   name:'Photo Camer 7',
//   price:400,
//   discount:10,
//   imageUrl:'../../assets/1.jpg',
//   descriptipn:"desc"  ,
//   count:1
// },
// {
//   id:9,
//   name:'Photo Camer 8',
//   price:500,
//   discount:10,
//   imageUrl:'../../assets/3.jpg',
//   descriptipn:"desc" ,
//   count:1
// },
// {
//   id:1,
//   name:'Photo Camer 9',
//   price:600,
//   // discount:10,
//   imageUrl:'../../assets/2.jpg',
//   descriptipn:"desc" ,
//   count:1
// },
//   ]
//  sortarray(){
//    this.productArray.sort((a,b)=>{
//      if(a.price>b.price){
//        return 1
//      }
//      if(a.price < b.price){
//        return -1;
//      }
//    })
//  } 
// @Output()
// itembed:EventEmitter<product>=new EventEmitter<product>();

productArray!:product[];

@Output()
productEMd:EventEmitter<product>=new EventEmitter<product>();
// new way
productServices=new ProductService();

  constructor() { }
// constructor(private productservice:ProductService){}
  ngOnInit():void {   
   this.productArray=this.productServices.getAllproducts();
  //  this.getall();
  }
  
// getall(){
//   this.productservice.getAllproducts().subscribe(
//     (res)=>{
//       this.productArray=res.product;
//     },
//     (err)=>{},
//     ()=>{}
//   )
// }

  onItem(product:product){
    // console.log(product);    
    this.productEMd.emit(product);
    }
  
    sort(event: any) {
      switch (event.target.value) {
        case "Low":
          {
            this.productArray = this.productArray.sort((low, high) => low.price - high.price);
            break;
          }
  
        case "High":
          {
            this.productArray = this.productArray.sort((low, high) => high.price - low.price);
            break;
          }
        //   case "Name":
        // {
        //   this.productArray = this.productArray.sort(function (low, high) {
        //     if (low.name < high.name) {
        //       return -1;
        //     }
        //     else if (low.name > high.name) {
        //       return 1;
        //     }
        //     else {
        //       return 0;
        //     }
          // })
          // break;
        // }
  
        default: {
          this.productArray = this.productArray.sort((low, high) => low.price - high.price);
          break;
        }
  
      }
      return this.productArray;
  
    }  
}
