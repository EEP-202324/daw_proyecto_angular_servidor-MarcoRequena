import { Component, OnInit } from '@angular/core';

import { Aula } from '../aula';
import { AulaService } from '../aula.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {
  aulas: Aula[] = [];

  constructor(private aulaService: AulaService) { }

  ngOnInit(): void {
    this.getAulas();
  }

  getAulas(): void {
    this.aulaService.getAulas()
    .subscribe(aulas => this.aulas = aulas);
  }
}
