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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.aulaService.addAula({ name } as Aula)
      .subscribe(aula => {
        this.aulas.push(aula);
      });
  }

  delete(aula: Aula): void {
    this.aulas = this.aulas.filter(h => h !== aula);
    this.aulaService.deleteAula(aula.id).subscribe();
  }

}
