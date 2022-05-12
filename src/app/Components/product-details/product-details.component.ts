import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { APIproductsService } from 'src/app/Services/apiproducts.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  private currPrdID:number=0;

  currentProduct:IProduct|undefined=undefined;

  private prodIDsList:number[]=[];

  constructor(private activatedRoute:ActivatedRoute,
    //private prodService:ProductsService ,
    private location:Location,
    private router:Router,
    private prdServiceApi:APIproductsService
    ) { }

  ngOnInit(): void {
    // this.currPrdID=Number(this.activatedRoute.snapshot.paramMap.get("Pid"));
    // // alert(this.prdID);
    // this.currentProduct=this.prodService.getProductByID(this.currPrdID);

  //   this.prodIDsList=this.prodService.getPrdListIDs();

  //   this.activatedRoute.paramMap.subscribe(paramMap=>{this.currPrdID=Number(paramMap.get("Pid"));
  //   this.currentProduct=this.prodService.getProductByID(this.currPrdID);
  // })

    this.currPrdID=Number(this.activatedRoute.snapshot.paramMap.get("Pid"));

    this.prdServiceApi.getProductByID(this.currPrdID).subscribe(prd=>{
      this.currentProduct=prd;
    })


  }

  goback(){
    this.location.back();
  }

  pevProduct()
  {
    let currIndex=this.prodIDsList.findIndex(val=>val==this.currPrdID);
    // alert(currIndex);
    if(currIndex!=0)
    {
      this.currPrdID=this.prodIDsList[currIndex-1];
      this.router.navigate(['/Products',this.currPrdID]);
    }

  }

  nextProduct()
  {
    let currIndex=this.prodIDsList.findIndex(val=>val==this.currPrdID);
    // alert(currIndex);
    if(currIndex<this.prodIDsList.length-1)
    {
      this.currPrdID=this.prodIDsList[currIndex+1];
      this.router.navigate(['/Products',this.currPrdID]);

    }
  }


  isFirstItem():boolean
  {
    return this.currPrdID==this.prodIDsList[0];

  }

  isLastItem():boolean
  {
    return this.currPrdID==this.prodIDsList[this.prodIDsList.length-1];
  }

}
