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
counts={};
  ngOnInit(): void {

    // this.theaddedproduct=this.productservice.cartArray;
    this.productservice.itemAdd.subscribe(
      (next) => {
        // console.log("next = ",next);
        // for (let num of this.theaddedproduct) {
        //   this.counts[num] =this.counts[num] ?this.counts[num] + 1 : 1;
        // }
        this.theaddedproduct.push(next);
     // }
        // var index = this.theaddedproduct.findIndex(x => x._id == next._id)
        // if (index === -1) {
        //   this.theaddedproduct.push(next);

        // }
        // else {
        //   console.log("object already exists");
        //   this.theaddedproduct[index].count++;
        //   console.log(this.theaddedproduct[index].count);

        // }
      },
      (error) => { },
      () => { }
    )
  //  console.log(this.findOcc(this.theaddedproduct,this.theaddedproduct[0]._id));
  }


  DeleteItem(id: number) {

    let index = this.theaddedproduct!.findIndex(ele => ele._id == id);    
    //     if (this.theaddedproduct[index].count == 1) {
      this.theaddedproduct.splice(index, 1);

    // }
    // else if (this.theaddedproduct[index].count > 1) {
    //   this.theaddedproduct[index]!.count--;
    // }
    //  this.productservice.deleteCard(id);
  }


  number() {
    // let num2 = 0;
    // if (this.theaddedproduct.length > 0) {
    //   for (let i = 0; i < this.theaddedproduct.length; i++) {
    //     num2 = num2 + this.theaddedproduct[i].count;
    //   }
    //   return num2;
    // }
    // else {
    //   return 0;
    // }

  }
total(){
//   let c=0;
//   for(let i=0;i<this.theaddedproduct.length;i++){
// c=c+(this.theaddedproduct[i].discount ? this.theaddedproduct[i].price-this.theaddedproduct[i].discount!:this.theaddedproduct[i].price)*this.theaddedproduct[i].count;
//   }
//   return c;
}
findOcc(arr:any, key:number){
  let arr2:any = [];
    
  arr.forEach((x:any)=>{
       
    // Checking if there is any object in arr2
    // which contains the key value
     if(arr2.some((val:any)=>{ return val[key] == x[key] })){
         
       // If yes! then increase the occurrence by 1
       arr2.forEach((k:any)=>{
         if(k[key] === x[key]){ 
           k["occurrence"]++
         }
      })
         
     }else{
       // If not! Then create a new object initialize 
       // it with the present iteration key's value and 
       // set the occurrence to 1
       let a :any= {}
       a[key] = x[key]
       a["occurrence"] = 1
       arr2.push(a);
     }
  })
    
  return arr2
}
}
