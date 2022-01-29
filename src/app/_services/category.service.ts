import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { ProductService } from './product-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories:Category[]= 
 [
   {id:1,name:'Arts & Crafts'},
   {id:2,name:'Automotive'},
   {id:3,name:'Baby'},
   {id:4,name:'Books'},
   {id:5,name:'Eletronics'},
   {id:6,name:'Womens Fashion'},
   {id:7,name:'Mens Fashion'},
   {id:8,name:'Health & Household'},
   {id:9,name:'Home & Kitchen'},
 ]

  constructor() { }
  getAllCategories():Category[]{
    return this.categories.slice(0);
  }
  getcategoryById(id:number):Category | undefined{
    return this.categories.find(cate=>cate.id==id);
  }

}
