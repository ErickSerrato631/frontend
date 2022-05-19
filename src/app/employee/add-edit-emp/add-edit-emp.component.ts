import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '@app/shared.service';
import internal from 'stream';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  id: number ;
  nombre:string ;
  apellido_paterno:string;
  apellido_materno:string ;
  fecha_nacimiento:string ;
  fecha_ingreso_laboral:string ;

  ngOnInit(): void {
    this.id = this.emp.id;
    this.nombre = this.emp.nombre;
    this.apellido_paterno = this.emp.apellido_paterno;
    this.apellido_materno = this.emp.apellido_materno;
    this.fecha_nacimiento = this.emp.fecha_nacimiento;
    this.fecha_ingreso_laboral = this.emp.fecha_ingreso_laboral;
  }

  addEmployee(){
    var val = {
      id:this.id,
      nombre:this.nombre,
      apellido_paterno:this.apellido_paterno,
      apellido_materno:this.apellido_materno,
      fecha_nacimiento:this.fecha_nacimiento,
      fecha_ingreso_laboral:this.fecha_ingreso_laboral
    };

    this.service.addEmployee(val).subscribe(res =>{
      alert('Empleado creado correctamente!');
    });
    }

  updateEmployee(){
    var val = {
      nombre:this.nombre,
      apellido_paterno:this.apellido_paterno,
      apellido_materno:this.apellido_materno,
      fecha_nacimiento:this.fecha_nacimiento,
      fecha_ingreso_laboral:this.fecha_ingreso_laboral
    };

    this.service.updateEmployee(val).subscribe(res =>{
      alert('Empleado actualizado');
    });
  }

}
