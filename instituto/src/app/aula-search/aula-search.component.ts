import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Aula } from '../aula';
import { AulaService } from '../aula.service';

@Component({
  selector: 'app-aula-search',
  templateUrl: './aula-search.component.html',
  styleUrls: [ './aula-search.component.css' ]
})
export class AulaSearchComponent implements OnInit {
  aulas$!: Observable<Aula[]>;
  private searchTerms = new Subject<string>();

  constructor(private aulaService: AulaService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.aulas$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.aulaService.searchAulas(term)),
    );
  }
}
