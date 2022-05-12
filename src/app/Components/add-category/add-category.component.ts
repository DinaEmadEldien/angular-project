import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { ApiCategoryService } from 'src/app/Services/api-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  newCategory:ICategory={} as ICategory;


  constructor(private apicategory:ApiCategoryService,private router:Router) { }

  ngOnInit(): void {
  }

  saveCategory()
  {
    this.apicategory.AddNewCategory(this.newCategory).subscribe(cat=>{
      this.router.navigate(['/OrderMaster']);    
    })

  }

}
