import {Component, EventEmitter,Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Prescription} from "../../entities/prescription.entities";
import {Patient} from "../../entities/patient.entites";
import {PrescriptionsService} from "../../services/prescriptions.service";
import {PatientsService} from "../../services/patients.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-newprescriptionformedecin',
  templateUrl: './newprescriptionformedecin.component.html',
  styleUrls: ['./newprescriptionformedecin.component.css']
})
export class NewprescriptionformedecinComponent implements OnInit {
  @Input() medact?: FormGroup;
  @Output() newPrescriptionformedecin = new EventEmitter<Prescription>();
  prescriptionFormGroup? : FormGroup;
  submitted = false;
  pres?: Prescription;
  pat?: Patient;
  pats?: Patient[];

  constructor(private fb: FormBuilder, private prescriptionService: PrescriptionsService, private patientService: PatientsService) { }

  ngOnInit(): void {
    this.prescriptionFormGroup = this.fb.group({
      dateprescription : [formatDate(new Date(),'yyyy-MM-dd','en')],
      idpatient:[Validators.required]
    });

    this.patientService.getPatients().subscribe(
      data => {
        this.pats = data;
    });
  }

  onSavePrescription(): void{
    this.patientService.getPatient(this.prescriptionFormGroup?.value.idpatient).subscribe(
      element => {
        this.pat = element;

        this.prescriptionService.save(this.prescriptionFormGroup?.value, this.medact?.value, this.pat).subscribe(
          data => {
            alert('Sauvegarde effectuée');
            this.pres = data;
            this.newPrescriptionformedecin.emit(data)
          },
          error => {
            alert(error.headers.get("error"));
          }
        )
      },
      error => {
        alert("Patient inexistant");
      }
    );
  }
}
