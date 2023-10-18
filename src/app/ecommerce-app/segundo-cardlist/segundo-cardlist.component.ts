import { Component, Input } from '@angular/core';
import { Country } from '../interfaces/listado.interface';

@Component({
  selector: 'app-segundo-cardlist',
  templateUrl: './segundo-cardlist.component.html',
  styles: [
  ]
})
export class SegundoCardlistComponent {

  @Input()
  public Lista:Country[]=[]

}
