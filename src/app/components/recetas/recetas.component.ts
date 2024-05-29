import { Component } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';
import { Receta } from '../../interfaces/recetas-response.interface';
import { DetallesReceta } from '../../interfaces/detalles-receta.interface';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css',
})
export class RecetasComponent {
  recetas: Receta[] = [];
  cargandoRecetas: boolean = false;
  detallesDeReceta?: DetallesReceta;
  cargandoDetalles: boolean = false;

  constructor(private recetasService: RecetasService) {}

  cargarRecetas(): void {
    this.cargandoRecetas = true;
    this.recetasService.obtenerRecetas().subscribe({
      next: (res) => {
        this.recetas = res;
        this.cargandoRecetas = false;
      },
      error: (err) => {
        console.log(err);
        this.cargandoRecetas = false;
      },
    });
  }

  obtenerDetallesReceta(path: string): void {
    this.cargandoDetalles = true;
    this.recetasService.obtenerDetallesReceta(path).subscribe({
      next: (detalles) => {
        this.detallesDeReceta = detalles;
        this.cargandoDetalles = false;
      },
      error: (err) => {
        console.log(err);
        this.cargandoDetalles = false;
      },
    });
  }
}
