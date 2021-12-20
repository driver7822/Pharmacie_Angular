import { Component, OnInit } from '@angular/core';
import {Prescription} from "../../entities/prescription.entities";
import {PrescriptionsService} from "../../services/prescriptions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
  prescription: Prescription | null = null;
  idprescription : number=0;

  constructor(private prescriptionService: PrescriptionsService, private router: Router) { }

  ngOnInit(): void {

  }

  onSearch() {
    this.prescription = null;
    this.prescriptionService.getPrescription(this.idprescription).subscribe(
      data => {
        this.prescription = data;
      },
      error => {
        alert("Prescription introuvable");
      }
    )

  }

}
