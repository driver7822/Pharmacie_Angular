import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MedicamentsService} from "../../services/medicaments.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editmedicament',
  templateUrl: './editmedicament.component.html',
  styleUrls: ['./editmedicament.component.css']
})
export class EditmedicamentComponent implements OnInit {
  medicamentFormGroup?: FormGroup;
  submitted = false;
  idMedicament: number;

  constructor(private medicamentsService: MedicamentsService, private fb: FormBuilder, activatedRoute: ActivatedRoute) {
    this.idMedicament = activatedRoute.snapshot.params.idmedicament;
  }

  ngOnInit(): void {
    this.medicamentsService.getMedicament(this.idMedicament).subscribe(
      medicament => {this.medicamentFormGroup = this.fb.group({
        idmedicament: [medicament.idmedicament, Validators.required],
        code: [medicament.code, Validators.required],
        nom: [medicament.nom, Validators.required],
        description: [medicament.description, Validators.required],
        prixunitaire: [medicament.prixunitaire, Validators.required]
      })}
    );
  }

  onUpdateMedicament(): void{
    this.submitted = true;
    if (this.medicamentFormGroup?.invalid){return;}
    this.medicamentsService.updateMedicament(this.medicamentFormGroup?.value).subscribe(
      data => alert('Mise à jour effectuée'),
      error => {
        alert(error.headers.get("error"));
      }
    )
  }

}
