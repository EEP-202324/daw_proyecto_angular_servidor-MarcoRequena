import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Aula } from './aula';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const aulas = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {aulas};
  }

  // Overrides the genId method to ensure that a aula always has an id.
  // If the aulas array is empty,
  // the method below returns the initial number (11).
  // if the aulas array is not empty, the method below returns the highest
  // aula id + 1.
  genId(aulas: Aula[]): number {
    return aulas.length > 0 ? Math.max(...aulas.map(aula => aula.id)) + 1 : 11;
  }
}


  