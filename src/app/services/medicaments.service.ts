import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Medicament} from '../entities/medicament.entities';

@Injectable({providedIn:"root"}) //providedIn:"root" permet de rendre accessible cette classe partout dans l'application
export class MedicamentsService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  getMedicament(idmedicament: number): Observable<Medicament>{
    return this.http.get<Medicament>(this.host + '/medicaments/' + idmedicament);
  }

  searchMedicament(nom: string): Observable<Medicament[]>{
    return this.http.get<Medicament[]>(this.host + '/medicaments/nom=' + nom);
  }

  deleteMedicament(m: Medicament): Observable<void>{
    return this.http.delete<void>(this.host + '/medicaments/' + m.idmedicament);
  }

  save(m: Medicament): Observable<Medicament>{
    return this.http.post<Medicament>(this.host + '/medicaments/', m);
  }

  updateMedicament(m: Medicament): Observable<Medicament>{
    return this.http.put<Medicament>(this.host + '/medicaments/' + m.idmedicament, m);
  }
}
