import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { APIproductsService } from 'src/app/Services/apiproducts.service';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductForCartComponent } from '../product-for-cart/product-for-cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit ,AfterViewInit{

  myStore:Store;
  // ClientName:string="dina";
  ProductList:IProduct[];
  categoryList:ICategory[];
  ClientName:string;

// @ViewChild("Client") ClientInp:ElementRef={} as ElementRef;
@ViewChild("Client") ClientInp!:ElementRef;


  TodayDate:Date=new Date();

  newlist:IProduct[]=[];
  constructor() {
    this.myStore={
      name:"DinaStore",
      branches:["b1","b2","b3"],
      logo:"https://fakeimg.pl/350x200/?text=Hello"
    }

    this.ProductList=[
      {id:1,name:"Samsung",quantity:3,price:20,img:"assets/download.jpg",CategoryID:1},
      {id:2,name:"Dell",quantity:1,price:30,img:"assets/download.jpg",CategoryID:1},
      {id:3,name:"lenvou",quantity:2,price:30,img:"assets/download.jpg",CategoryID:1},
      {id:4,name:"HP",quantity:0,price:30,img:"assets/download.jpg",CategoryID:1},

      {id:5,name:"Huawie",quantity:1,price:80,img:"assets/download (1).jpg",CategoryID:2},
      {id:6,name:"Infinix",quantity:7,price:90,img:"assets/download (1).jpg",CategoryID:2},
      {id:7,name:"Apple",quantity:5,price:30,img:"assets/download (2).jpg",CategoryID:3}


    ]

    this.categoryList=[{id:1,name:"Laptop"},{id:2,name:"Mobile"},{id:3,name:"iPad"}]

    this.ClientName="Dina";
  }



  ngOnInit(): void {
  }


  // onOptionsSelected(value:any){

  //   console.log(this.ProductList.filter(p => p.CategoryID==value))
  //   // this.newlist=this.ProductList.filter(p => p.CategoryID===value);
  // }

  ngAfterViewInit():void{
    this.ClientInp.nativeElement.style.backgroundColor="lightblue";


  }

  showproduct(id:string)
  {
    this.newlist=this.ProductList.filter(p=>p.CategoryID==parseInt(id))
  }



}
