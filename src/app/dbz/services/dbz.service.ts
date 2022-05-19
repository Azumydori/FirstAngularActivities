import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()


 export class dbzService {
    private _personajes: Personaje[] = [
        {
        nombre:'Goku',
        poder:15000
      },
      {
        nombre:'Vegeta',
        poder:8000
      },
      {
        nombre:'Piccolo',
        poder:4000
      },
      {
        nombre:'Trunks',
        poder:20000
      }
    ];
    
    get personajes(): Personaje[] {
        return [...this._personajes]
    }
     constructor () {
     }

     agregarPersonaje(personaje: Personaje){
         this._personajes.push(personaje);
     }

}