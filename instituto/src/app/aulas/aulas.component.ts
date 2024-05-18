import { Component } from '@angular/core';
import { Aula } from '../aula';
import { AULAS } from '../mock-aulas';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})

export class AulasComponent {
  aulas = AULAS;
  selectedAula?: Aula;

  onSelect(aula: Aula): void {
    this.selectedAula = aula;
  }
}
