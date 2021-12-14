import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MedicamentsService} from "../../services/medicaments.service";

@Component({
  selector: 'app-newmedicament',
  templateUrl: './newmedicament.component.html',
  styleUrls: ['./newmedicament.component.css']
})
export class NewmedicamentComponent implements OnInit {
  submitted = false;
  medicamentFormGroup?: FormGroup;
  constructor(private fb: FormBuilder, private medicamentsService: MedicamentsService) { }

  ngOnInit(): void {
    this.medicamentFormGroup = this.fb.group({
      code: ['', Validators.required],
      nom: ['', Validators.required],
      description: ['',Validators.required],
      prixunitaire: ['', Validators.compose([Validators.required,Validators.min(0)])],
    });
  }

  onSaveMedicament() {
    this.submitted = true;
    if (this.medicamentFormGroup?.invalid) {
      return;
    }
    this.medicamentsService.save(this.medicamentFormGroup?.value).subscribe(
      data => alert('Sauvegarde effectuée'),
      error => {
        alert(error.headers.get("error"));
      }
    )
  }

}
