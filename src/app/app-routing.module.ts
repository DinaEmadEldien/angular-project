import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderMasterComponent } from './Components/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductForCartComponent } from './Components/product-for-cart/product-for-cart.component';
import { ProductsComponent } from './Components/products/products.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    path:"",component:MainLayoutComponent,children:[
        //Default Path
      {path:"",redirectTo:"/OrderMaster",pathMatch:"full"},
      {path:"Products",component:ProductsComponent },
      {path:"OrderMaster",component:OrderMasterComponent,canActivate:[AuthGuard]},
      {path:"Register",component:UserRegisterComponent},
      {path:"Products/:Pid",component:ProductDetailsComponent},
      {path:"NewProduct",component:AddProductComponent},
      {path:"EditProduct/:Pid",component:AddProductComponent},
      {path:"NewCategory",component:AddCategoryComponent},
      {path:"Login",component:UserLoginComponent},
      {path:"Logout",component:UserLoginComponent},


    ]
  },
  {path:"Home",component:HomeComponent},


  //Wild-card-path
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
