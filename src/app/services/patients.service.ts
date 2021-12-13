import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Patient} from "../entities/patient.entites";

@Injectable({providedIn:"root"}) //providedIn:"root" permet de rendreaccessible cette classe partout dans l'application
export class ClientsService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  getClient(idpatient: number): Observable<Patient>{
    return this.http.get<Patient>(this.host + '/patients/' + idpatient);
  }

  searchClients(nom: string): Observable<Patient[]>{
    return this.http.get<Patient[]>(this.host + '/patients/nom=' + nom);
  }

  deleteClient(p: Patient): Observable<void>{
    return this.http.delete<void>(this.host + '/patients/' + p.idpatient);
  }

  save(p: Patient): Observable<Patient>{
    return this.http.post<Patient>(this.host + '/patients/', p);
  }

  updateClient(p: Patient): Observable<Patient>{
    return this.http.put<Patient>(this.host + '/patients/' + p.idpatient, p);
  }
}
