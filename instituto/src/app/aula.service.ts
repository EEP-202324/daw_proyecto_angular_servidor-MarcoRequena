import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Aula } from './aula';
import { AULAS } from './mock-aulas';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class AulaService {

  constructor(private messageService: MessageService) { }

  getAulas(): Observable<Aula[]> {
    const aulas = of(AULAS);
    this.messageService.add('AulaService: Aulas actualizadas');
    return aulas;
  }
}
