import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MedicamentsService} from "../../services/medicaments.service";
import {Observable} from "rxjs";
import {Medicament} from "../../entities/medicament.entities";

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  medicaments?: Medicament[]; //le ? signifie que la valeur null est acceptée
  constructor(private medicamentsService: MedicamentsService, private router:Router) { }

  ngOnInit(): void {
  }

  onSearch(value: any){
    this.medicamentsService.searchMedicament(value.nom).subscribe(
      data => {this.medicaments=data}
    );
  }

  onNewMedicament(){
    this.router.navigateByUrl('newMedicament')
  }

  onDelete(m: Medicament){
    let message = confirm('êtes vous sûr de vouloir supprimer le médicament ?');
    if (message) {
      this.medicamentsService.deleteMedicament(m).subscribe(
        data => {
              this.onSearch(m); //rafraîchissment de la page actuelle
          },
          err => {
            alert(err.headers.get("error"));
          }
      )
    };
  }

  onEdit(m: Medicament){

  }

}
