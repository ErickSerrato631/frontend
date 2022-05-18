import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private http:HttpClient) { console.log('Probando consumo de API') }

  getEmployeeList() {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

    return this.http.get( 'api/employe/list', {headers:header});
  }

  detailEmployee(val:any) {
    return this.http.get('api/employe/detail',val);
  }

  addEmployee(val:any) {
    return this.http.post('api/employe/create',val);
  }

  updateEmployee(val:any) {
    return this.http.put('api/employe/update',val);
  }

  deleteEmployee(val:any) {
    return this.http.delete('api/employe/delete',val);
  }

}
