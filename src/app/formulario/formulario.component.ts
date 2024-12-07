import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombreEstudiante: string = '';
  notaPrimerParcial: number = 0;
  notaSegundoParcial: number = 0;
  notaTercerParcial: number = 0;

  @Output() enviarDatos = new EventEmitter<any>();

  calcularPromedio() {
    const promedio = (this.notaPrimerParcial + this.notaSegundoParcial + this.notaTercerParcial);
    const promedioSobre20 =promedio/3;
    const estado = promedioSobre20 >= 14 ? 'Aprobado' : 'Reprobado';

    const estudiante = {
      nombre: this.nombreEstudiante,
      promedio: promedioSobre20.toFixed(2),
      estado: estado,
      primerParcial: this.notaPrimerParcial,
      segundoParcial: this.notaSegundoParcial,
      tercerParcial: this.notaTercerParcial
    };
    this.enviarDatos.emit(estudiante);
  }
}
