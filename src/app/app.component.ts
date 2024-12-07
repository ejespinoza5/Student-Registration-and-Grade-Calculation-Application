import { Component } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaEstudianteComponent } from './tabla-estudiante/tabla-estudiante.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent, TablaEstudianteComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estudiantes: any[] = [];

  mostrarDatos(estudiante: any) {
    this.estudiantes.push(estudiante);
  }
}
