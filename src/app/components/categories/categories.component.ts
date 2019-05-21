import { Component, OnInit, } from '@angular/core';

import { CategoriesService } from '../../services/categories.service';

import { Category } from '../../Class/category';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements  OnInit {


  allCategories: Category[];

  searchParam: string = '';



  constructor( private _categoriesService: CategoriesService ) {

      this.displayAllCategories();


  }

  displayAllCategories(){
    this._categoriesService.getCategories()
    .subscribe( (data: Category[]) => {
      this.allCategories = data;
    });
  }

  displayCategoriesBySearch(parameter: string){
    this.searchParam = parameter;
    this._categoriesService.searchCategories(this.searchParam)
    .subscribe( (data: Category[]) => {
      this.allCategories = data;
      console.log(this.searchParam);
    });

    if(this.searchParam.length === 0){
      this.displayAllCategories();
    }

  }


  ngOnInit(): void {

  }





}


