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
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.aulaService.getAula(id)
      .subscribe(aula => this.aula = aula);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.aula) {
      this.aulaService.updateAula(this.aula)
        .subscribe(() => this.goBack());
    }
  }
}
