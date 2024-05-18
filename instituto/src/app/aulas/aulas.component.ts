import { Component } from '@angular/core';
import { Aula } from '../Aula';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent {
  aula: Aula = {
    id: 1,
    name: '3º B'
  };
}
