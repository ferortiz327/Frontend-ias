import { Component, OnInit } from '@angular/core';
import { Tecnico } from '../modelo/Tecnico';
import { TecnicoService } from '../Service/Tecnico.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  tecnicos ?: Tecnico[]; 

  constructor(private tecnicoService: TecnicoService) { }

  ngOnInit(): void {
    this.tecnicoService.getTecnicos().subscribe(
      tecnicos => this.tecnicos = tecnicos
    );
  }

}
