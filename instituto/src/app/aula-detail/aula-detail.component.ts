import { Component, Input } from '@angular/core';
import { Aula } from '../aula';

@Component({
  selector: 'app-aula-detail',
  templateUrl: './aula-detail.component.html',
  styleUrls: ['./aula-detail.component.css']
})
export class AulaDetailComponent {
  @Input() aula?: Aula | undefined;
}
