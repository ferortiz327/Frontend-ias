import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Tecnico } from '../modelo/Tecnico';
import { TECNICOS } from '../Tecnico/tecnicos.json';
import { Observable, of, observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  private urlEndPoint: string  = 'http://localhost:8080/api/tecnicos';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient, private router: Router) { }
  
  getTecnicos(): Observable<Tecnico[]>{
    //return of(TECNICOS);
    return this.http.get<Tecnico[]>(this.urlEndPoint);
  }

  create(tecnico: Tecnico) :Observable<any> {
    return this.http.post<any>(this.urlEndPoint, tecnico, {headers: this.httpHeaders}).pipe(
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

  getTecnico(id: any): Observable<Tecnico>{
    return this.http.get<Tecnico>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e =>{
        this.router.navigate(['/listar']);
        console.error(e.error.mensaje);
        Swal.fire(
          'Error al editar',
          e.error.mensaje,
          'error'
        );
        return throwError(e);
      })
    );
  }
  update(tecnico: Tecnico): Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${tecnico.id}`, tecnico, { headers : this.httpHeaders}).pipe(
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
  delete(id: any): Observable<Tecnico>{
    return this.http.delete<Tecnico>(`${this.urlEndPoint}/${id}`, {headers : this.httpHeaders}).pipe(
      catchError(e=>{
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
