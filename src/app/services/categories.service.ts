import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Category } from '../Class/category';

@Injectable()
export class CategoriesService{

    url: string = "http://localhost:62052/api/categories/";


    constructor( private httpClient: HttpClient ){

    }

    getCategories(){

        const header = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.httpClient.get( this.url + 'getcategories');
    }
}