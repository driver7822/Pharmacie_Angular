import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MedecinsService} from "../../services/medecins.service";

@Component({
  selector: 'app-newmedecin',
  templateUrl: './newmedecin.component.html',
  styleUrls: ['./newmedecin.component.css']
})
export class NewmedecinComponent implements OnInit {
  submitted = false;
  medecinFormGroup?: FormGroup;

  constructor(private fb: FormBuilder, private medecinService: MedecinsService) { }

  ngOnInit(): void {
    this.medecinFormGroup = this.fb.group({
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required]
    })
  }

  onSaveMedecin(){
    this.submitted = true;
    if (this.medecinFormGroup?.invalid){
      return;
    }

    this.medecinService.save(this.medecinFormGroup?.value).subscribe(
      data => alert('Sauvegarde effectuée'),
      error => alert(error.headers.get("error"))
    );
  }

}
