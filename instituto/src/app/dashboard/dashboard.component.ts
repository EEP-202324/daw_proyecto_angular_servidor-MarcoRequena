import { Component, OnInit } from '@angular/core';
import { Aula } from '../aula';
import { AulaService } from '../aula.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  aulas: Aula[] = [];

  constructor(private aulaService: AulaService) { }

  ngOnInit(): void {
    this.getAulas();
  }

  getAulas(): void {
    this.aulaService.getAulas()
      .subscribe(aulas => this.aulas = aulas.slice(1, 5));
  }
}
