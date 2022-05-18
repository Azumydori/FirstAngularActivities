import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{

heroes: string[] = ['SpiderMan', 'Hulk', 'Capitán America', 'SuperMan', 'Batman', 'Thor']
heroesBorrados: string = ''

borrarHeroe(){
 this.heroesBorrados =  this.heroes.shift() || '';

 
}

}