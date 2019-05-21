import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from '../Class/category';

@Injectable()
export class CategoriesService{

    url: string = "http://localhost:62052/api/categories/";


    constructor( private httpClient: HttpClient ){

    }

    getCategories(){
        return this.httpClient.get( this.url + 'getcategories');
    }

    searchCategories(searchParam: string){
        return this.httpClient.get( this.url + 'searchactivecategories?searchParam=' + searchParam);
    }
}