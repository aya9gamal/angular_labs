import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { product } from "../models/product.model";
@Injectable({
  providedIn:'root',
})
export class ProductService{
itemAdd: EventEmitter<any>=new EventEmitter<any>();

productArray:product[]=[
    {
      _id:1,
     data:[{id:1,name:'product 1',description:'product 1 des',lang:{id:1,name:'English'}}],    
      price:100,
      // discount:10,
      // imagesUrls:["../../assets/1.jpg"],
      imageUrl:"../../assets/1.jpg",
      count:1,
      category:{id:1,name:'category 1'},
      tages:[{id:1,name:'tag 1'},{id:2,name:'tag 2'}],
      paymentTypes:[{id:1,name:'payment 1'}],
    },
  
    {
      _id:2,
      data:[{id:2,name:'product 2',description:'product 2 des',lang:{id:2,name:'English'}}],    
       price:200,
      //  discount:10,
      // imagesUrls:["../../assets/1.jpg"],
      imageUrl:"../../assets/2.jpg",
      count:1,
       category:{id:1,name:'category 1'},
       tages:[{id:2,name:'tag 1'},{id:2,name:'tag 2'}],
       paymentTypes:[{id:2,name:'payment 2'}],
    },
    {
      _id:3,
     data:[{id:3,name:'product 3',description:'product 3 des',lang:{id:3,name:'English'}}],    
      price:300,
      discount:10,
      // imagesUrls:["../../assets/1.jpg"],
      imageUrl:"../../assets/3.jpg",
      count:1,
      category:{id:3,name:'category 3'},
      tages:[{id:3,name:'tag 3'},{id:3,name:'tag 3'}],
      paymentTypes:[{id:3,name:'payment 3'}],
    },
    {
      _id:4,
      data:[{id:4,name:'product 4',description:'product 4 des',lang:{id:4,name:'English'}}],    
       price:400,
       discount:10,
      //  imagesUrls:["../../assets/1.jpg"],
      imageUrl:"../../assets/1.jpg",
      count:1,
       category:{id:4,name:'category 4'},
       tages:[{id:4,name:'tag 4'},{id:4,name:'tag 4'}],
       paymentTypes:[{id:4,name:'payment 4'}],
    },
    {
      _id:5,
      data:[{id:5,name:'product 5',description:'product 5 des',lang:{id:5,name:'English'}}],    
       price:500,
       discount:10,
      //  imagesUrls:["../../assets/1.jpg"],
      imageUrl:"../../assets/3.jpg",
      count:1,
       category:{id:5,name:'category 5'},
       tages:[{id:5,name:'tag 5'},{id:5,name:'tag 2'}],
       paymentTypes:[{id:5,name:'payment 1'}],
    },
    {
      _id:6,
      data:[{id:6,name:'product 6',description:'product 6 des',lang:{id:6,name:'English'}}],    
       price:700,
       discount:10,
      //  imageUrl:"../../assets/3.jpg",
      // imagesUrls:["../../assets/1.jpg"],
      imageUrl:"../../assets/2.jpg",
      count:1,
       category:{id:6,name:'category 6'},
       tages:[{id:6,name:'tag 6'},{id:6,name:'tag 6'}],
       paymentTypes:[{id:6,name:'payment 6'}],
    },
    {
      _id:7,
      data:[{id:7,name:'product 7',description:'product 7 des',lang:{id:7,name:'English'}}],    
       price:650,
       discount:25,
      //  imagesUrls:["../../assets/1.jpg"],
      imageUrl:"../../assets/1.jpg",
      count:1,
       category:{id:7,name:'category 7'},
       tages:[{id:7,name:'tag 7'},{id:7,name:'tag 7'}],
       paymentTypes:[{id:7,name:'payment 7'}],
    },
    {
      _id:8,
      data:[{id:8,name:'product 8',description:'product 8 des',lang:{id:8,name:'English'}}],    
       price:190,
       discount:10,
      //  imagesUrls:["../../assets/1.jpg"],
      imageUrl:"../../assets/3.jpg",
      count:1,
       category:{id:1,name:'category 1'},
       tages:[{id:8,name:'tag 8'},{id:2,name:'tag 8'}],
       paymentTypes:[{id:8,name:'payment 8'}],
    },
    {
      _id:9,
      data:[{id:9,name:'product 9',description:'product 9 des',lang:{id:9,name:'English'}}],
      price:900,
      // discount:10,
      // imagesUrls:["../../assets/1.jpg"],
      imageUrl:"../../assets/2.jpg",
      count:1,
      category:{id:1,name:'category 9'},
      tages:[{id:9,name:'tag 9'},{id:9,name:'tag 9'}],
      paymentTypes:[{id:9,name:'payment 9'}],
    },
   ];
  


 // productArray:product[]=[
    //   {
    //     _id:1,
    //    data:[{id:1,name:'product 1',description:'product 1 des',lang:{id:1,name:'English'}}],    
    //     price:100,
    //     discount:10,
    //     imagesUrls:["../../assets/1.jpg"],
    //     // imageUrl:"../../assets/1.jpg",
       
    //     category:{id:1,name:'category 1'},
    //     tages:[{id:1,name:'tag 1'},{id:2,name:'tag 2'}],
    //     paymentTypes:[{id:1,name:'payment 1'}],
    //   },
    
    //   {
    //     _id:2,
    //     data:[{id:2,name:'product 2',description:'product 2 des',lang:{id:2,name:'English'}}],    
    //      price:200,
    //     //  discount:10,
    //     imagesUrls:["../../assets/1.jpg"],
    //     // imageUrl:"../../assets/2.jpg",
       
    //      category:{id:1,name:'category 1'},
    //      tages:[{id:2,name:'tag 1'},{id:2,name:'tag 2'}],
    //      paymentTypes:[{id:2,name:'payment 2'}],
    //   },
    //   {
    //     _id:3,
    //    data:[{id:3,name:'product 3',description:'product 3 des',lang:{id:3,name:'English'}}],    
    //     price:300,
    //     discount:10,
    //     imagesUrls:["../../assets/1.jpg"],
    //     category:{id:3,name:'category 3'},
    //     tages:[{id:3,name:'tag 3'},{id:3,name:'tag 3'}],
    //     paymentTypes:[{id:3,name:'payment 3'}],
    //   },
    //   {
    //     _id:4,
    //     data:[{id:4,name:'product 4',description:'product 4 des',lang:{id:4,name:'English'}}],    
    //      price:400,
    //      discount:10,
    //      imagesUrls:["../../assets/1.jpg"],        
    //      category:{id:4,name:'category 4'},
    //      tages:[{id:4,name:'tag 4'},{id:4,name:'tag 4'}],
    //      paymentTypes:[{id:4,name:'payment 4'}],
    //   },
    //   {
    //     _id:5,
    //     data:[{id:5,name:'product 5',description:'product 5 des',lang:{id:5,name:'English'}}],    
    //      price:500,
    //      discount:10,
    //      imagesUrls:["../../assets/1.jpg"],
    //     // imageUrl:"../../assets/3.jpg",
    //     // count:1,
    //      category:{id:5,name:'category 5'},
    //      tages:[{id:5,name:'tag 5'},{id:5,name:'tag 2'}],
    //      paymentTypes:[{id:5,name:'payment 1'}],
    //   },
    //   {
    //     _id:6,
    //     data:[{id:6,name:'product 6',description:'product 6 des',lang:{id:6,name:'English'}}],    
    //      price:700,
    //      discount:10,
    //      imagesUrls:["../../assets/1.jpg"],
    //     // imageUrl:"../../assets/2.jpg",
    //     // count:1,
    //      category:{id:6,name:'category 6'},
    //      tages:[{id:6,name:'tag 6'},{id:6,name:'tag 6'}],
    //      paymentTypes:[{id:6,name:'payment 6'}],
    //   },
    //   {
    //     _id:7,
    //     data:[{id:7,name:'product 7',description:'product 7 des',lang:{id:7,name:'English'}}],    
    //      price:650,
    //      discount:25,
    //      imagesUrls:["../../assets/1.jpg"],
    //     // imageUrl:"../../assets/1.jpg",
    //     // count:1,
    //      category:{id:7,name:'category 7'},
    //      tages:[{id:7,name:'tag 7'},{id:7,name:'tag 7'}],
    //      paymentTypes:[{id:7,name:'payment 7'}],
    //   },
    //   {
    //     _id:8,
    //     data:[{id:8,name:'product 8',description:'product 8 des',lang:{id:8,name:'English'}}],    
    //      price:190,
    //      discount:10,
    //      imagesUrls:["../../assets/1.jpg"],
    //     // imageUrl:"../../assets/3.jpg",
    //     // count:1,
    //      category:{id:1,name:'category 1'},
    //      tages:[{id:8,name:'tag 8'},{id:2,name:'tag 8'}],
    //      paymentTypes:[{id:8,name:'payment 8'}],
    //   },
    //   {
    //     _id:9,
    //     data:[{id:9,name:'product 9',description:'product 9 des',lang:{id:9,name:'English'}}],
    //     price:900,
    //     discount:10,
    //     imagesUrls:["../../assets/1.jpg"],
    //     // imageUrl:"../../assets/2.jpg",
    //     // count:1,
    //     category:{id:1,name:'category 9'},
    //     tages:[{id:9,name:'tag 9'},{id:9,name:'tag 9'}],
    //     paymentTypes:[{id:9,name:'payment 9'}],
    //   },
    //  ];



cartArray:product[]=[];    
// constructor(private httpclient:HttpClient){}
constructor(){}
getAllproducts():product[]{
   return this.productArray.slice();
}
// getAllproducts():Observable<{product:product[],numberOfProducts:number}>{
//   const token:string=localStorage.getItem('token')!;
//   const headers=new HttpHeaders({
//     authorization:token
//   })
//  return this.httpclient.get<{product:product[],numberOfProducts:number}>(environment.baseUrl+'product')
  
// }
// getProductById(id:string):Observable<product>{
// return this.httpclient.get<product>(environment.baseUrl+'product'+id)!;
// }
getProductById(id:number):product| undefined {
    return this.productArray.find(i=>i._id===id);
}
addProduct(product:product):void{
    this.productArray.push(product);
}
addItemToCart(product:product){
       this.cartArray.push(product);
    // const res=this.cartArray;
    // console.log(res);
//    var index =this.cartArray.findIndex(x => x.id == product.id)
// if (index === -1) {
//   this.cartArray.push(product);
 
// }
// else 
// {
//   console.log("object already exists");
//   this.cartArray[index].count++;
//    console.log(this.cartArray[index].count);
  
// } 
}
deleteCard(id:number){
    // let index = this.cartArray.findIndex(ele => ele.id == id);
    // if (this.cartArray[index].count == 1) {
    //   this.cartArray.splice(index, 1);

    // }
    // else if (this.cartArray[index].count > 1) {
    //   this.cartArray[index]!.count--;
    // }
}
deleteProduct(id:number):product[]{
 return this.productArray.filter(item=>item._id !=id);
}
}