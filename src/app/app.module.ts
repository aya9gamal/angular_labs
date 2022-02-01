import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductListContainerComponent } from './features/products/product-list-container/product-list-container.component';
import { TestingComponent } from './testing/testing.component';
import { ProductService } from './_services/product-service';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { ContactUsComponent } from './features/products/contact-us/contact-us.component';
import { AddProductComponent } from './features/products/add-product/add-product.component';
import { AboutUsComponent } from './features/products/about-us/about-us.component';
import { LoginInComponent } from './features/products/login-in/login-in.component';
import { RegisterPageComponent } from './features/products/register-page/register-page.component';
import { ProductAddComponent } from './features/products/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    TopNavbarComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductListContainerComponent,
    TestingComponent,
    ProductDetailsComponent,
    ContactUsComponent,
    AddProductComponent,
    AboutUsComponent,
    LoginInComponent,
    RegisterPageComponent,
    ProductAddComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
  ],
  providers: [
  ProductService,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
