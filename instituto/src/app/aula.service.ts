import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Aula } from './aula';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class AulaService {

  private aulasUrl = 'api/aulas';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET aulas from the server */
  getAulas(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.aulasUrl)
      .pipe(
        tap(_ => this.log('fetched aulas')),
        catchError(this.handleError<Aula[]>('getAulas', []))
      );
  }

  /** GET aula by id. Return `undefined` when id not found */
  getAulaNo404<Data>(id: number): Observable<Aula> {
    const url = `${this.aulasUrl}/?id=${id}`;
    return this.http.get<Aula[]>(url)
      .pipe(
        map(aulas => aulas[0]), // returns a {0|1} element array
        tap(a => {
          const outcome = a ? 'fetched' : 'did not find';
          this.log(`${outcome} aula id=${id}`);
        }),
        catchError(this.handleError<Aula>(`getAula id=${id}`))
      );
  }

  /** GET aula by id. Will 404 if id not found */
  getAula(id: number): Observable<Aula> {
    const url = `${this.aulasUrl}/${id}`;
    return this.http.get<Aula>(url).pipe(
      tap(_ => this.log(`fetched aula id=${id}`)),
      catchError(this.handleError<Aula>(`getAula id=${id}`))
    );
  }

  /* GET aulas whose name contains search term */
  searchAulas(term: string): Observable<Aula[]> {
    if (!term.trim()) {
      // if not search term, return empty aula array.
      return of([]);
    }
    return this.http.get<Aula[]>(`${this.aulasUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found aulas matching "${term}"`) :
         this.log(`no aulas matching "${term}"`)),
      catchError(this.handleError<Aula[]>('searchAulas', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new aula to the server */
  addAula(aula: Aula): Observable<Aula> {
    return this.http.post<Aula>(this.aulasUrl, aula, this.httpOptions).pipe(
      tap((newAula: Aula) => this.log(`added aula w/ id=${newAula.id}`)),
      catchError(this.handleError<Aula>('addAula'))
    );
  }

  /** DELETE: delete the aula from the server */
  deleteAula(id: number): Observable<Aula> {
    const url = `${this.aulasUrl}/${id}`;

    return this.http.delete<Aula>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted aula id=${id}`)),
      catchError(this.handleError<Aula>('deleteAula'))
    );
  }

  /** PUT: update the aula on the server */
  updateAula(aula: Aula): Observable<any> {
    return this.http.put(this.aulasUrl, aula, this.httpOptions).pipe(
      tap(_ => this.log(`updated aula id=${aula.id}`)),
      catchError(this.handleError<any>('updateAula'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AulaService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AulaService: ${message}`);
  }
}
