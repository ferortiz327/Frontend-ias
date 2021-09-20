import { Component, OnInit } from '@angular/core';
import { TecnicoService } from 'src/app/Service/Tecnico.service';
import { Tecnico } from './../../modelo/Tecnico';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public tecnico: Tecnico = new Tecnico();
  public titulo: string = 'Crear Técnico';

  constructor(private tecnicoService: TecnicoService, private router: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.cargarTecnico();
  }

  public create(): void {
    this.tecnicoService.create(this.tecnico).subscribe(json => {
      this.router.navigate(['/listar']);
      Swal.fire(
        'Nuevo Técnico',
        `${json.mensaje}: ${this.tecnico.nombre}`,
        'success'
      );
    });
  }
  cargarTecnico(): void {
      let id = this.activateRoute.snapshot.paramMap.get("id");
      if(id){
        this.tecnicoService.getTecnico(id).subscribe((tecnico) => this.tecnico = tecnico)
      }
  }
  update(): void{
    this.tecnicoService.update(this.tecnico).subscribe
    (
      json => {
        this.router.navigate(['/listar']);
        Swal.fire(
          'Técnico Actualizado',
          `${json.mensaje}: ${this.tecnico.nombre}`,
          'success'
        )
      })
  }

}
