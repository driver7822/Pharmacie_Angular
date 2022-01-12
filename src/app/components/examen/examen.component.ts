import { Component, OnInit } from '@angular/core';
import {PrescriptionsService} from "../../services/prescriptions.service";
import {MedecinsService} from "../../services/medecins.service";
import {PatientsService} from "../../services/patients.service";
import {Prescription} from "../../entities/prescription.entities";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css'],
  providers: [DatePipe]
})
export class ExamenComponent implements OnInit {

  pres?: Prescription[];

  constructor(private prescriptionService: PrescriptionsService, date: DatePipe) { }

  ngOnInit(): void {
  }

  onSearch(value: any){
    this.prescriptionService.getPrescriptionPatientAndMedecin(value.idDuPatient,value.idDuMedecin).subscribe(
      data => {
          this.pres = data
      },
      error => {
        alert("Aucune prescrescription pour l'id du patient et l'id du médecin");
      }
    );
  }

}
