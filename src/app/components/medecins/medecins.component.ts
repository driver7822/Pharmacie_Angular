import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
import {Medecin} from "../../entities/medecin.entities";
import {MedecinsService} from "../../services/medecins.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css'],
  providers:[DatePipe]
})
export class MedecinsComponent implements OnInit {
  medecins?: Medecin[]; //le ? signifie que la valeur null est acceptée

  constructor(private medecinsService: MedecinsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(value:any){
    this.medecinsService.searchMedecin(value.nom).subscribe(
      data => {this.medecins = data}
    );
  }

  onNewMedecin(){
    this.router.navigateByUrl('newMedecin');
  }

  onDelete(m: Medecin){
    let message = confirm("êtes vous sûr de vouloir supprimer le médecin ?");

    if(message){
      this.medecinsService.deleteMedecin(m).subscribe(
        data => {
          this.onSearch(m); //rafraîchissment de la page actuelle
        },
        error => {
          alert(error.headers.get("error"));
        }
      )
    };

  }

  onEdit(m: Medecin){
    this.router.navigateByUrl('editMedecin/'+m.idmedecin);
  }

}
