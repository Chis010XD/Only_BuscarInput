import { Component } from '@angular/core';
import { EcommerceService } from '../services/ecommerce.service';
import { Country } from '../interfaces/listado.interface';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styles: [
  ]
})
export class PrimeroComponent {
  constructor(private ecommerceService:EcommerceService){}

  public Lista: Country[]=[]

  searchInput(newInput:string){
    this.ecommerceService.getAll(newInput).subscribe(
      resp=>{
        this.Lista=resp
        console.log(resp)
      }
    )
  }

}
