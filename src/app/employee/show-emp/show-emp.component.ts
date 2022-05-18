import { Component, OnInit } from '@angular/core';

import {SharedService} from 'app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})

export class ShowEmpComponent {

  title = 'employeeList';

  constructor(
    private service:SharedService
    ) {
    this.service.getEmployeeList().subscribe(resp => {
      console.log(resp);
    })
  }


}
