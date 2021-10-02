import { Component, OnInit } from '@angular/core';
import { TECNICOS } from '../tecnicos.json';
import {Tecnico} from '../../modelo/Tecnico';
import { TecnicoService } from '../../Service/Tecnico.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tecnicos ?: Tecnico[]; 

  constructor(private tecnicoService: TecnicoService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.tecnicoService.getTecnicos().subscribe(
       tecnicos => this.tecnicos = tecnicos
     );
  }

  editar(id : any){
    this.router.navigate(['add', id]);
  }
  delete(tecnico: Tecnico): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Está',
      text: `¿Está de eliminar el técnico  ${tecnico.nombre} Creado con exito`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.tecnicoService.delete(tecnico.id).subscribe(
          cliente =>{
            this.tecnicos = this.tecnicos?.filter(tec => tec !== tecnico)
            swalWithBootstrapButtons.fire(
              'Técnico Eliminado!',
              `Cliente ${tecnico.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }
  detalle(id : any){
    this.router.navigate(['listarServicio', id]);
  }
}
