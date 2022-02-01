import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './features/products/about-us/about-us.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { ContactUsComponent } from './features/products/contact-us/contact-us.component';
import { LoginInComponent } from './features/products/login-in/login-in.component';
import { ProductAddComponent } from './features/products/product-add/product-add.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { ProductListContainerComponent } from './features/products/product-list-container/product-list-container.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { RegisterPageComponent } from './features/products/register-page/register-page.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

const routes: Routes = [
  {path:'home',component:ProductListContainerComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'product',children:[
  {path:'details/:productId',component:ProductDetailsComponent},
    {path:'add',component:ProductAddComponent}]
  },
  {path:'product-list',component:ProductListComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'login',component:LoginInComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'**',component:NavbarComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
