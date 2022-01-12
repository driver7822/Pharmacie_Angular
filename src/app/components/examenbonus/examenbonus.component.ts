import { Component, OnInit } from '@angular/core';
import {PrescriptionsService} from "../../services/prescriptions.service";
import {DatePipe} from "@angular/common";
import {Prescription} from "../../entities/prescription.entities";

@Component({
  selector: 'app-examenbonus',
  templateUrl: './examenbonus.component.html',
  styleUrls: ['./examenbonus.component.css'],
  providers: [DatePipe]
})
export class ExamenbonusComponent implements OnInit {

  pres?: Prescription[];

  constructor(private prescriptionService : PrescriptionsService, date : DatePipe) { }

  ngOnInit(): void {
  }

  onSearch(value: any){
    this.prescriptionService.getPrescriptionPatientOrderByNomMedecin(value.idDuPatient).subscribe(
      data => {
        this.pres = data
      },
      error => {
        alert("Aucune prescrescription pour ce patient ou patient inexistant");
      }
    );
  }

}
