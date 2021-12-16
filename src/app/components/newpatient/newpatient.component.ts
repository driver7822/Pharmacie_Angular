import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PatientsService} from "../../services/patients.service";

@Component({
  selector: 'app-newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css']
})
export class NewpatientComponent implements OnInit {
  submitted = false;
  patientFormGroup?: FormGroup;
  constructor(private fb: FormBuilder, private patientService: PatientsService) { }

  ngOnInit(): void {
    this.patientFormGroup = this.fb.group({
      nss: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      datenaissance: ['', Validators.required]
    });
  }

  onSavePatient(){
    this.submitted = true;
    if (this.patientFormGroup?.invalid){
      return;
    }

    this.patientService.save(this.patientFormGroup?.value).subscribe(
      data => alert('Sauvegarde effectée'),
      error => {
        alert(error.headers.get("error"));
      }
    );
  }

}
