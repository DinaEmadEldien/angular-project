import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
// import * as EventEmitter from 'events';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProductsService } from 'src/app/Services/products.service';
// import { EventEmitter } from 'stream';
import { Router } from '@angular/router';
import { CartViewModel } from 'src/app/Models/cart-view-model';
import { APIproductsService } from 'src/app/Services/apiproducts.service';



@Component({
  selector: 'app-product-for-cart',
  templateUrl: './product-for-cart.component.html',
  styleUrls: ['./product-for-cart.component.scss']
})
export class ProductForCartComponent implements OnInit , OnChanges {
  // private ProductList:IProduct[];
  prdListOfCat:IProduct[]=[];

  @Input() recievedSelectedCatID:number=0;                   //ده هيجلنا من الاب
  // orderTotalPrice:number=0;                  //this will send it to parent (orderMaster)
  // @Output() onTotalPriceChanged:EventEmitter<number>;
  @Output() onAddedToCart:EventEmitter<CartViewModel>;

  cartVM:CartViewModel;

  constructor(//private productService:ProductsService,
              private router:Router,
              private prdApiService:APIproductsService) {      //inJection

    // this.onTotalPriceChanged=new EventEmitter<number>();

    this.onAddedToCart=new EventEmitter<CartViewModel>();

    this.cartVM={
      productID:0,
      productName:"",
      totalPrice:0,
      selectedQuantity:0
    }


    // this.ProductList=[
    //   {id:1,name:"Samsung",Quantity:8,price:20,Img:"assets/download.jpg",CategoryID:1},
    //   {id:2,name:"Dell",Quantity:1,price:30,Img:"assets/download.jpg",CategoryID:1},
    //   {id:3,name:"lenvou",Quantity:2,price:30,Img:"assets/download.jpg",CategoryID:1},
    //   {id:4,name:"HP",Quantity:0,price:30,Img:"assets/download.jpg",CategoryID:1},

    //   {id:5,name:"Huawie",Quantity:1,price:80,Img:"assets/download (1).jpg",CategoryID:2},
    //   {id:6,name:"Infinix",Quantity:7,price:90,Img:"assets/download (1).jpg",CategoryID:2},
    //   {id:7,name:"Apple",Quantity:5,price:30,Img:"assets/download (2).jpg",CategoryID:3}

    // ]

  }
  ngOnChanges(changes: SimpleChanges): void {
    // if(this.recievedSelectedCatID==0)
    // this.prdListOfCat=this.ProductList;
    // else
    // this.prdListOfCat=this.ProductList.filter(p=>p.CategoryID==this.recievedSelectedCatID);

    // this.prdListOfCat=this.productService.getProductsByCateogryID(this.recievedSelectedCatID);

    this.prdApiService.getProductByCatID(this.recievedSelectedCatID).subscribe(prdList=>{
      this.prdListOfCat=prdList;
    })

  }

  ngOnInit(): void {

    //if component don't have parent so there is no inputs so will not call ngOnChanges
    //in this state recievedSelectedCatID will be Zero and will return the whole array
    // this.prdListOfCat=this.productService.getProductsByCateogryID(this.recievedSelectedCatID);

    this.prdApiService.getAllProducts().subscribe(prdList=>{
      this.prdListOfCat=prdList;

    }
    )

  }

  // updateOrderTotalPrice(itemsCount:number,price:number)
  // {
  //   this.orderTotalPrice+=(itemsCount*price);

  //   //emit event
  //   this.onTotalPriceChanged.emit(this.orderTotalPrice);
  // }



  updateAddToCartTable(id:number,name:string,price:number,Quantity:number)
  {
    this.cartVM.productID=id;
    this.cartVM.productName=name;
    this.cartVM.totalPrice+=(Quantity*price);
    this.cartVM.selectedQuantity=Quantity;

    //emit event

    this.onAddedToCart.emit(this.cartVM);

  }





  DecreaseQuantity(item:IProduct)
  {
    if(item.quantity!=0)
    item.quantity--;

  }

  openProductDetails(prdID:number)
  {
    this.router.navigate(['/Products',prdID]);
  }

  addToCart(index:number)
  {

  }


  createimgpath=(serverpath:string)=> {

    return `https://localhost:9964/${serverpath}`

    }


}
