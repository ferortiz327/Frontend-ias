import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/modelo/servicio';
import { Tecnico } from 'src/app/modelo/Tecnico';
import { ServicioService } from 'src/app/Service/servicio.service';
import { TecnicoService } from 'src/app/Service/Tecnico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public tecnico: Tecnico = new Tecnico();
  public servicio: Servicio;
  constructor(private tecnicoService: TecnicoService, private activatedRoute: ActivatedRoute, private serviceServicio: ServicioService) { }

  ngOnInit(): void {
    this.cargarTecnico();
  }

  cargarTecnico(): void {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.tecnicoService.getTecnico(id).subscribe((tecnico) => this.tecnico = tecnico)
    }
  }

  delete(servicio: Servicio): void{
    console.log(servicio);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Está',
      text: `¿Está de eliminar el Servicio ${servicio.descripcion} Creado con exito`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceServicio.delete(servicio.id).subscribe(
          cliente =>{
            this.tecnico.servicio = this.tecnico.servicio?.filter(ser => ser !== servicio)
            swalWithBootstrapButtons.fire(
              'Servicio Eliminado!',
              `Servicio ${servicio.descripcion} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }
}
