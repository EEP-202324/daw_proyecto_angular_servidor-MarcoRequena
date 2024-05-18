import { Component, OnInit } from '@angular/core';

import { Aula } from '../aula';
import { AulaService } from '../aula.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

  selectedAula?: Aula;

  aulas: Aula[] = [];

  constructor(private aulaService: AulaService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAulas();
  }

  onSelect(aula: Aula): void {
    this.selectedAula = aula;
    this.messageService.add(`AulasComponent: Aula Seleccionada id=${aula.id}`);
  }

  getAulas(): void {
    this.aulaService.getAulas()
        .subscribe(aulas => this.aulas = aulas);
  }
}
