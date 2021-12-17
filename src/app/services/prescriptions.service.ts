import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {formatDate} from '@angular/common';
import {Prescription} from "../entities/prescription.entities";
@Injectable({providedIn:"root"})
export class PrescriptionsService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  deletePrescription(p: Prescription): Observable<void>{
    return this.http.delete<void>(this.host + '/prescriptions/' + p.idprescription);
  }

  /*save(c: Comfact,cl:Client): Observable<Comfact>{
    c.client=cl;
    return this.http.post<Comfact>(this.host + '/prescriptions/',c);
  }*/

  getPrescription(idprescription: number): Observable<Prescription>{
    return this.http.get<Prescription>(this.host + '/prescriptions/' + idprescription);
  }

  updatePrescription(p: Prescription): Observable<Prescription>{
    return this.http.put<Prescription>(this.host + '/prescriptions/' + p.idprescription, p);
  }

  getPrescriptionPatient(idPatient: number) : Observable<Prescription[]>{
    return this.http.get<Prescription[]>(this.host + '/prescriptions/idpatient=' +
      idPatient);
  }

}
