import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientsService} from "../../services/patients.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Prescription} from "../../entities/prescription.entities";
import {PrescriptionsService} from "../../services/prescriptions.service";

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.component.html',
  styleUrls: ['./editpatient.component.css'],
  providers: [DatePipe]
})
export class EditpatientComponent implements OnInit {
  patientFormGroup?: FormGroup;
  submitted = false;
  idPatient: number;
  prescriptions? :Prescription[]


  constructor(private patientsService: PatientsService, private prescriptionsService: PrescriptionsService,private fb: FormBuilder, activatedRoute: ActivatedRoute,private datePipe: DatePipe) {
    this.idPatient = activatedRoute.snapshot.params.idpatient;
  }

  ngOnInit(): void {
    this.patientsService.getPatient(this.idPatient).subscribe(
      patient => {
        this.patientFormGroup = this.fb.group({
          idpatient: [patient.idpatient, Validators.required],
          nss: [patient.nss, Validators.required],
          nom: [patient.nom, Validators.required],
          prenom: [patient.prenom, Validators.required],
          datenaissance : [this.datePipe.transform(patient.datenaissance,"yyyy-MM-dd"), Validators.required]
        })
      }
    );
  }

  onUpdatePatient(): void{
    this.submitted = true;
    if (this.patientFormGroup?.invalid){
      return;
    }
    this.patientsService.updatePatient(this.patientFormGroup?.value).subscribe(
      data => alert('Mise à jour effectuée'),
      error => {
        alert(error.headers.get("error"));
      }
    )
  }

  onSeePrescription(){
    this.prescriptionsService.getPrescriptionPatient(this.idPatient).subscribe(
      data => {this.prescriptions = data},
      error => {
        alert(error.headers.get("error"));
      }
    );
  }

  onAddPrescription(pr: Prescription) {
    this.prescriptions?.push(pr);
  }
}
