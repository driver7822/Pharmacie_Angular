import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Prescription} from "../../entities/prescription.entities";
import {PrescriptionsService} from "../../services/prescriptions.service";
import {Router} from "@angular/router";
import {Medecin} from "../../entities/medecin.entities";
import {MedecinsService} from "../../services/medecins.service";

@Component({
  selector: 'app-editprescription',
  templateUrl: './editprescription.component.html',
  styleUrls: ['./editprescription.component.css']
})
export class EditprescriptionComponent implements OnInit {
  prescriptionFormGroup?: FormGroup;
  submitted = false;
  @Input() prescription?: Prescription;
  deleted = false;
  med?: Medecin;

  constructor(private prescriptionService: PrescriptionsService,private medecinService: MedecinsService,private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.prescriptionFormGroup = this.fb.group({
      idprescription: [this.prescription?.idprescription],
      dateprescription: [this.prescription?.dateprescription, Validators.required],
      nomdumed: [this.prescription?.medecin.nom+" "+this.prescription?.medecin?.prenom ],
    });

  }

  onUpdatePrescription(): void {
    this.submitted = true;

    if (this.prescriptionFormGroup?.invalid){
      return;
    }

    this.prescriptionService.updatePrescription(this.prescriptionFormGroup?.value).subscribe(
      data => {
        alert("Mise à jour effectuée")
      },
      error => {
        alert(error.headers.get("error"));
      }
      );

  }

  onDeletePrescription(){
    let v = confirm('Êtes vous sûr de vouloir supprimer ?');
    if (v){
      this.prescriptionService.deletePrescription(this.prescriptionFormGroup?.value).subscribe(
        data => {
          alert('Effacement effectuée');
          this.deleted = true;
        },
        error => {
          alert(error.headers.get('error'));
        }
      );
    }
  }

}
