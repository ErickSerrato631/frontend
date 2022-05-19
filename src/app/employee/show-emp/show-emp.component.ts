import { Component, OnInit } from '@angular/core';
import {SharedService} from 'app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})

export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) {}

  employees:any = [];

  ModalTitle:string ="";
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp ={
      id:0,
      nombre: "",
      apellido_paterno:"",
      apellido_materno:"",
      fecha_nacimiento:"",
      fecha_ingreso_laboral:""
    }
    this.ModalTitle="Agregar empleado"
    this.ActivateAddEditEmpComp=true;
  }


  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }

  deleteClick(item){
    if(confirm('Estas seguro de eliminar este empleado?')){
      this.service.deleteEmployee(item.id).subscribe(data =>{
        alert('Empleado eliminado!');
        this.refreshEmpList();
      })
      }
    }

  editClick(item){
    this.emp=item;
    this.ModalTitle = "Editar empleado";
    this.ActivateAddEditEmpComp=true;
  }
}
