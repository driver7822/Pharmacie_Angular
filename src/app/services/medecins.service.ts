import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Medecin} from "../entities/medecin.entities";

@Injectable({providedIn:"root"}) //providedIn:"root" permet de rendre accessible cette classe partout dans l'application
export class MedecinsService {
  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  getMedecin(idmedecin: number): Observable<Medecin>{
    return this.http.get<Medecin>(this.host+'/medecins/'+idmedecin);
  }

  getMedecins(): Observable<Medecin[]>{
    return this.http.get<Medecin[]>(this.host + '/medecins/');
  }

  searchMedecin(nom: string): Observable<Medecin[]>{
    return this.http.get<Medecin[]>(this.host + '/medecins/nom='+nom);
  }

  deleteMedecin(m: Medecin): Observable<void>{
    return this.http.delete<void>(this.host + '/medecins/'+m.idmedecin);
  }

  save(m: Medecin): Observable<Medecin>{
    return this.http.post<Medecin>(this.host+'/medecins/',m);
  }

  updateMedecin(m: Medecin): Observable<Medecin>{
    return this.http.put<Medecin>(this.host+'/medecins/'+ m.idmedecin,m);
  }
}
