import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ApiCategoryService } from 'src/app/Services/api-category.service';
import { APIproductsService } from 'src/app/Services/apiproducts.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  newProduct:IProduct={} as IProduct;
  categoryList:ICategory[]=[];

  message:string="";


  constructor(private apiPrdService:APIproductsService ,private router:Router,private apiCategory:ApiCategoryService,private httpClient:HttpClient) {

    // this.newProduct={
    //   "id":5,
    //   "name": "Iphone",
    //   "price": 300,
    //   "Quantity": 2,
    //   "Img": "https://fakeimg.pl/300/",
    //   "CategoryID": 2
    // }

    this.apiCategory.getAllCategories().subscribe(categoryList=>{
      this.categoryList=categoryList;
    })

  }

  ngOnInit(): void {
  }

  saveProduct()
  {
    this.apiPrdService.AddNewProduct(this.newProduct).subscribe(prd=>{
      this.router.navigate(['/OrderMaster']);
    })
  }

  uploadfile(files:any,Myfile:string)

  {

    if (files.length === 0) {

      return;

    }

    let fileToUpload = <File>files[0];

    const formData = new FormData();

    formData.append('file', fileToUpload, fileToUpload.name);



    this.httpClient.post('https://localhost:9964/api/Upload', formData, {reportProgress: true, observe: 'events'})

      .subscribe({

        next: (event) => {

        if (event.type === HttpEventType.UploadProgress){}

          // this.progress = Math.round(100 * event.loaded / event.total);

        else if (event.type === HttpEventType.Response) {



               this.newProduct.img=Myfile.split('\\')[2];

               console.log(this.newProduct.img);

               this.message = 'Upload success.';



          //this.onUploadFinished.emit(event.body);

        }

      },

      //error: (err: HttpErrorResponse) => console.log(err)

    });

  }

}
