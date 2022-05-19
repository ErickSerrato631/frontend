import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private http:HttpClient) { }

  getEmployeeList():Observable<any[]> {
    return this.http.get<any[]>('api/employe/list');
  }

  detailEmployee(val:any) {
    return this.http.get('api/employe/detail',val);
  }

  addEmployee(val:any) {
    return this.http.post('api/employe/create',val);
  }

  updateEmployee(val:any) {
    return this.http.put('/api/employe/update/', val);
  }

  deleteEmployee(val:any) {
    return this.http.delete('api/employe/delete/'+ val);
  }

}
