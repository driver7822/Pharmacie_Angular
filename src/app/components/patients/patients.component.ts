import { Component, OnInit } from '@angular/core';
import {Patient} from "../../entities/patient.entites";
import {PatientsService} from '../../services/patients.service'
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [DatePipe]
})


export class PatientsComponent implements OnInit {
  patients?: Patient[]; //le ? signifie que la valeur null est acceptée

  constructor(private patientsService: PatientsService, private router: Router, date: DatePipe) { }

  ngOnInit(): void {
  }

  onSearch(value: any){
    this.patientsService.searchPatients(value.nom).subscribe(
      data => {this.patients=data}
    );
  }

  onNewPatient(){
    this.router.navigateByUrl('newPatient');
  }

  onDelete(p: Patient){
    let message = confirm('êtes vous sûr de vouloir supprimer le patient ?');
    if(message){
      this.patientsService.deletePatient(p).subscribe(
        data => {
          this.onSearch(p); //rafraîchissment de la page actuelle
        },
        err =>{
          alert(err.headers.get("error"));
        }
      )
    };
  }

  onEdit(p: Patient){
    this.router.navigateByUrl('editPatient/'+p.idpatient);
  }

}
