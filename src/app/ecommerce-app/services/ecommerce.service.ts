import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from '../interfaces/listado.interface';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor(private Http:HttpClient) { }

  public UrlApi:string='https://restcountries.com/v3.1/capital'


  getAll(newIn:string):Observable<Country[]>{
    return this.Http.get<Country[]>(this.UrlApi+'/'+newIn)
  }

}
