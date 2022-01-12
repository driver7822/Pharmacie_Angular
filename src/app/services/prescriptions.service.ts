import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {formatDate} from '@angular/common';
import {Prescription} from "../entities/prescription.entities";
import {Patient} from "../entities/patient.entites";
import {Medecin} from "../entities/medecin.entities";

@Injectable({providedIn:"root"})
export class PrescriptionsService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  deletePrescription(p: Prescription): Observable<void>{
    return this.http.delete<void>(this.host + '/prescriptions/' + p.idprescription);
  }

  save(pres: Prescription,med: Medecin, pat: Patient): Observable<Prescription>{
    pres.patient = pat;
    pres.medecin = med;
    return this.http.post<Prescription>(this.host + '/prescriptions/',pres);
  }

  getPrescription(idprescription: number): Observable<Prescription>{
    return this.http.get<Prescription>(this.host + '/prescriptions/' + idprescription);
  }

  updatePrescription(p: Prescription): Observable<Prescription>{
    return this.http.put<Prescription>(this.host + '/prescriptions/' + p.idprescription, p);
  }

  getPrescriptionPatient(idPatient: number) : Observable<Prescription[]>{
    return this.http.get<Prescription[]>(this.host + '/prescriptions/idpatient=' + idPatient);
  }

  getPrescriptionMedecin(idMedecin: number) : Observable<Prescription[]>{
    return this.http.get<Prescription[]>(this.host + '/prescriptions/idmedecin='+ idMedecin);
  }

  getPrescriptionPatientAndMedecin(idPatient: number, idMedecin: number) : Observable<Prescription[]>{
    return this.http.get<Prescription[]>(this.host + '/prescriptions/idpatient='+ idPatient+ '/idmedecin='+idMedecin);
  }

  getPrescriptionPatientOrderByNomMedecin(idPatient: number) : Observable<Prescription[]>{
    return  this.http.get<Prescription[]>(this.host + '/prescriptions/idpatient='+idPatient+ '/orderByNomMedecin');
  }

}
