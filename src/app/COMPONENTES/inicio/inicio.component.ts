import { Component, OnInit } from '@angular/core';
import { ActividadService } from 'src/app/SERVICE/actividad.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private actividadService: ActividadService) { }

  lista: any = [];
  ngOnInit(): void {
    this.listarActividades();
  }
  listarActividades()
  {
    this.actividadService.getActividades().subscribe(
      res => {this.lista=res},
      err=>console.log(err)
    )
  }
  eliminar(id: string)
  {
    this.actividadService.deleteTarea(id).subscribe(
      res=>{this.ngOnInit()},
      err=>console.log(err)
    );
  }
}
