import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Receta } from '../interfaces/recetas-response.interface';
import { DetallesReceta } from '../interfaces/detalles-receta.interface';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  constructor(private http: HttpClient) {}

  obtenerRecetas(): Observable<Receta[]> {
    const url = 'https://recipe-book2.p.rapidapi.com/recipes-popular';

    const headers = new HttpHeaders({
      'x-rapidapi-key': 'd5958d7e67mshed5cdfa08c6a56bp14686bjsn051dc6ddbe7a',
      'x-rapidapi-host': 'recipe-book2.p.rapidapi.com',
    });

    return this.http.get<Receta[]>(url, { headers });
  }

  obtenerDetallesReceta(path: string): Observable<DetallesReceta> {
    const url = 'https://recipe-book2.p.rapidapi.com/recipe-details';
    const headers = new HttpHeaders({
      'x-rapidapi-key': 'd5958d7e67mshed5cdfa08c6a56bp14686bjsn051dc6ddbe7a',
      'x-rapidapi-host': 'recipe-book2.p.rapidapi.com',
    });
    const params = {
      path,
    };

    return this.http.get<DetallesReceta>(url, { headers, params });
  }
}
