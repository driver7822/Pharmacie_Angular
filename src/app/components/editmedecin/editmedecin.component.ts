import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MedecinsService} from "../../services/medecins.service";
import {ActivatedRoute} from "@angular/router";
import {Prescription} from "../../entities/prescription.entities";
import {PrescriptionsService} from "../../services/prescriptions.service";

@Component({
  selector: 'app-editmedecin',
  templateUrl: './editmedecin.component.html',
  styleUrls: ['./editmedecin.component.css']
})
export class EditmedecinComponent implements OnInit {
  medecinFormGroup?: FormGroup;
  submitted = false;
  idMedecin: number;
  prescriptions? : Prescription[]

  constructor(private medecinsService: MedecinsService,private prescriptionService: PrescriptionsService,private fb: FormBuilder, activatedRoute: ActivatedRoute) {
    this.idMedecin = activatedRoute.snapshot.params.idmedecin;
  }

  ngOnInit(): void {
    this.medecinsService.getMedecin(this.idMedecin).subscribe(
      medecin => {
        this.medecinFormGroup = this.fb.group({
          idmedecin: [medecin.idmedecin, Validators.required],
          matricule: [medecin.matricule, Validators.required],
          nom: [medecin.nom, Validators.required],
          prenom: [medecin.prenom, Validators.required],
          tel: [medecin.tel, Validators.required]
        })
      }
    );
  }

  onUpdateMedecin(): void{
    this.submitted = true;
    if (this.medecinFormGroup?.invalid){
      return;
    }
    this.medecinsService.updateMedecin(this.medecinFormGroup?.value).subscribe(
      data => alert("Mise à jour avec succès"),
      error => alert(error.headers.get("error"))
    )
  }

  onSeePrescription(){
    this.prescriptionService.getPrescriptionMedecin(this.idMedecin).subscribe(
      data=> {this.prescriptions = data},
      error => alert(error.headers.get("error"))
    )
  }

}
