import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad, ActividadService } from 'src/app/SERVICE/actividad.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  
  actividadNueva: Actividad = 
  {
    id:'',
    nombre: '',
    estado: false,
    fechaEjecucion: new Date(),
    diasRetraso: 0,
    idEmpleado: 1,

  }
  constructor(private actividadService: ActividadService, private router: Router) { }

  ngOnInit(): void {

  }
  agregarActividad()
  {
    this.actividadService.saveActividad(this.actividadNueva).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/inicio']);
      },
      err=>console.log(err)
    );
  }
}
