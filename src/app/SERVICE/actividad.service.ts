import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  url='http://localhost:8080/api/actividades';
  constructor(private http: HttpClient) 
  {

  }
  getActividades():Observable<any> 
  {
    return this.http.get(this.url);
  }
  getUnaActividad (id: string): Observable<any>
  {
    return this.http.get(this.url + '/' + id);
  }
  saveActividad(actividad: Actividad): Observable<any> 
  {
    return this.http.post(this.url,actividad);
  }
  editActividad(id: string, actividad: Actividad): Observable<any>
  {
    return this.http.put(this.url + '/' + id, actividad);
  }
  deleteTarea(id: string): Observable<any>
  {
    return this.http.delete(this.url + '/' + id);
  }
}
export interface Actividad 
{
  id: string,
  nombre: string;
  estado: boolean;
  fechaEjecucion: Date;
  diasRetraso: number;
  idEmpleado: number;
}
