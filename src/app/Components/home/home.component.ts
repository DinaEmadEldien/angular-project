import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { APIproductsService } from 'src/app/Services/apiproducts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  prdList:IProduct[]=[];

  constructor(private prdApiService:APIproductsService) { }

  ngOnInit(): void {
    this.prdApiService.getAllProducts().subscribe(prdList=>{
      this.prdList=prdList;

    }
    )
  }

}
