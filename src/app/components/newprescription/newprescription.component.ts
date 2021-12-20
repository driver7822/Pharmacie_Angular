import {Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Prescription} from "../../entities/prescription.entities";
import {PrescriptionsService} from "../../services/prescriptions.service";
import {MedecinsService} from "../../services/medecins.service";
import {formatDate} from "@angular/common";
import {Medecin} from "../../entities/medecin.entities";
import {Observable} from "rxjs";

@Component({
  selector: 'app-newprescription',
  templateUrl: './newprescription.component.html',
  styleUrls: ['./newprescription.component.css']
})
export class NewprescriptionComponent implements OnInit {
  @Input() patiact? : FormGroup;
  @Output() newPrescription = new EventEmitter<Prescription>();
  prescriptionFormGroup? : FormGroup;
  submitted = false;
  pres? : Prescription;
  med?: Medecin;
  meds?: Medecin[];

  constructor(private fb: FormBuilder, private prescriptionService: PrescriptionsService, private medecinService: MedecinsService) { }

  ngOnInit(): void {
    this.prescriptionFormGroup = this.fb.group({
      dateprescription : [formatDate(new Date(), 'yyyy-MM-dd','en')],
      idmedecin:['', Validators.required]
    });

    this.medecinService.getMedecins().subscribe(
      data => {
        this.meds = data;
      }
    );
  }

  onSavePrescription(): void {
    this.medecinService.getMedecin(this.prescriptionFormGroup?.value.idmedecin).subscribe(
      element => {
        this.med = element;

        this.prescriptionService.save(this.prescriptionFormGroup?.value,this.med,this.patiact?.value).subscribe(
          data=> {
            alert('Sauvegarde effectuée');
            this.pres = data;
            this.newPrescription.emit(data)

          },
          error => {
            alert(error.headers.get("error"));
          }
        )
      },
      error => {
        alert("Medecin inexistant");
      });

  }

}
