import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenueComponent } from './Components/side-menue/side-menue.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { ProductCardDirective } from './Directives/product-card.directive';
import { NationalIDPipe } from './Pipes/national-id.pipe';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { ProductForCartComponent } from './Components/product-for-cart/product-for-cart.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { HomeComponent } from './Components/home/home.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';

import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter()
{
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SideMenueComponent,
    OrderMasterComponent,
    ProductCardDirective,
    NationalIDPipe,
    CreditCardPipe,
    ProductForCartComponent,
    UserRegisterComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddProductComponent,
    HomeComponent,
    AddCategoryComponent,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:9964"],
        disallowedRoutes:[]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
