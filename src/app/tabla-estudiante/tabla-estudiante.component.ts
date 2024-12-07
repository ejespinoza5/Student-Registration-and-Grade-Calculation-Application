import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tabla-estudiante',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './tabla-estudiante.component.html',
  styleUrls: ['./tabla-estudiante.component.css']
})
export class TablaEstudianteComponent {
  @Input() estudiantes: any[] = [];
}
