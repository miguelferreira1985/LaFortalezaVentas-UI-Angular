import { Component, OnInit, } from '@angular/core';

import { CategoriesService } from '../../services/categories.service';

import { Category } from '../../Class/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements  OnInit {

  dtOptions: DataTables.Settings = {};

  allCategories: Category[];



  constructor( private _categoriesService: CategoriesService ) {

    this._categoriesService.getCategories()
    .subscribe( (data: Category[] ) => {
    this.allCategories = data;;
} );
   }

  ngOnInit(): void {

  }





}


