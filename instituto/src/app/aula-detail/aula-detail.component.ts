import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Aula } from '../aula';
import { AulaService } from '../aula.service';

@Component({
  selector: 'app-aula-detail',
  templateUrl: './aula-detail.component.html',
  styleUrls: [ './aula-detail.component.css' ]
})
export class AulaDetailComponent implements OnInit {
  aula: Aula | undefined;

  constructor(
    private route: ActivatedRoute,
    private aulaService: AulaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAula();
  }

  getAula(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.aulaService.getAula(id)
      .subscribe(aula => this.aula = aula);
  }

  goBack(): void {
    this.location.back();
  }
}
