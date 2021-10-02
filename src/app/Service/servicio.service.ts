import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Servicio } from '../modelo/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private urlEndPoint: string  = 'http://localhost:8080/api/servicios';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`);
  }

  createServicio(servicio: Servicio) :Observable<any> {
    return this.http.post<any>(this.urlEndPoint, servicio, {headers: this.httpHeaders}).pipe(
      catchError(e=>{
        if(e.status === 400){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        Swal.fire(
          e.error.mensaje,
          e.error.error,
          'error'
        )
        return throwError(e);
      })
    );
  }
}
