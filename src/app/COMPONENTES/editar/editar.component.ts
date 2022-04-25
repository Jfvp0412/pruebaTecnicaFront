import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad, ActividadService } from 'src/app/SERVICE/actividad.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  id:string = "";
  actividadActual: Actividad = 
  {
    id:'',
    nombre: '',
    estado: false,
    fechaEjecucion: new Date(),
    diasRetraso: 0,
    idEmpleado: 1,

  }
  constructor(private actividadService: ActividadService, 
    private antivateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.antivateRouter.snapshot.params['id'];
    this.actividadService.getUnaActividad(this.id).subscribe(
      res=>{this.actividadActual = res},
      err=>console.log(err)
    )
  }
  guardar()
  {
    this.actividadService.editActividad(this.id, this.actividadActual).subscribe(
      res=>{this.router.navigate(['/inicio'])},
      err=>console.log(err)
    )
  }

}
