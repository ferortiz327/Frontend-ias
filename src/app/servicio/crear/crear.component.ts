import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/modelo/servicio';
import { Tecnico } from 'src/app/modelo/Tecnico';
import { ServicioService } from 'src/app/Service/servicio.service';
import { TecnicoService } from 'src/app/Service/Tecnico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  tecnicos ?: Tecnico[]; 
  servicio : Servicio = new Servicio;
  public errores: string[];

  constructor(private tecnicoService: TecnicoService, private servicioService: ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.tecnicoService.getTecnicos().subscribe(
      tecnicos => this.tecnicos = tecnicos
    );
  }

  public createsServicio(): void {
    console.log(this.servicio );
    
    this.servicioService.createServicio(this.servicio).subscribe(json => {
      const  tec: any  = this.servicio.tecnico.id;
      console.log(tec);
      this.router.navigate(['listarServicio', tec]);
      Swal.fire(
        'Nuevo Servicio',
        `${json.mensaje}: ${this.servicio.id}`,
        'success'
      );
    },
    err => {
      let arrayErrores: string[] = Object.values(err.error);
      console.log(arrayErrores);
      this.errores = arrayErrores;
      console.error('Código del error desde el backend: '+err.status);
      console.error(err.error);
    }
    );
  }

}
