import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CartViewModel } from 'src/app/Models/cart-view-model';
import { ICategory } from 'src/app/Models/icategory';
import { ApiCategoryService } from 'src/app/Services/api-category.service';
import { ProductForCartComponent } from '../product-for-cart/product-for-cart.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit ,AfterViewInit {

  categoryList:ICategory[];
  selectedCatID:number=0;
  recievedOrderTotalPrice:number=0;

  cart:CartViewModel[]=[];

  // @ViewChild(ProductForCartComponent) prodComponentObj!:ProductForCartComponent;



  constructor(private catService:ApiCategoryService) {


    this.categoryList=[{id:1,name:"Laptop"},{id:2,name:"Mobile"},{id:3,name:"iPad"}]


  }

  ngOnInit(): void {

    this.catService.getAllCategories().subscribe(categoryList=>{
      this.categoryList=categoryList;
    })
  }


  ngAfterViewInit():void{
    // this.prodComponentObj.prdListOfCat.pop();

  }

  updateTotalPrice(totalPrice:number)
  {
    this.recievedOrderTotalPrice=totalPrice;
  }



  addToCart(cartItem:CartViewModel)
  {
    // for (let i = 0; i < this.cart.length; i++)
    // {
    //   if(this.cart[i].productID===cartItem.productID)
    //   {
    //     this.cart[i].selectedQuantity++;
    //   }
    // }

    this.cart.push(cartItem);
  }


}
