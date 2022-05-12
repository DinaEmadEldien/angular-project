import { Injectable } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  myStore:Store;
  // ClientName:string="dina";
  ProductList:IProduct[];
  categoryList:ICategory[];
  ClientName:string;

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


  getAllProducts(): IProduct[] {
    return this.ProductList;
  }

  getProductsByCateogryID(catID: number): IProduct[] {
    if (catID == 0) {
      return this.ProductList;
    }
    else
      return this.ProductList.filter(prd => prd.CategoryID == catID);
  }

  getProductByID(prdID: number): IProduct|undefined   //if do not find this id
  {
    return this.ProductList.find(prd=>prd.id==prdID);
  }

  // addNewProduct(prd:IProduct):void
  // {
  //   this.ProductList.push(prd);
  // }

  getPrdListIDs():number[]
  {
    return this.ProductList.map(p=>p.id);
  }

}
