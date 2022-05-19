import { Component, Input } from '@angular/core';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {

//@Input() personajes:any[] = []

get personajes () {
  return this.dbzService.personajes;
}

constructor (private dbzService: dbzService) {

}

}
