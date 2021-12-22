import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';
import { MedicamentsComponent } from './components/medicaments/medicaments.component';
import { MedecinsComponent } from './components/medecins/medecins.component';
import { PatientsComponent } from './components/patients/patients.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NewmedicamentComponent } from './components/newmedicament/newmedicament.component';
import { EditmedicamentComponent } from './components/editmedicament/editmedicament.component';
import { NewpatientComponent } from './components/newpatient/newpatient.component';
import { EditpatientComponent } from './components/editpatient/editpatient.component';
import { NewprescriptionComponent } from './components/newprescription/newprescription.component';
import { EditprescriptionComponent } from './components/editprescription/editprescription.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { DatePipe } from "@angular/common";
import { EditmedecinComponent } from './components/editmedecin/editmedecin.component';
import { NewmedecinComponent } from './components/newmedecin/newmedecin.component';
import { NewprescriptionformedecinComponent } from './components/newprescriptionformedecin/newprescriptionformedecin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    MedicamentsComponent,
    MedecinsComponent,
    PatientsComponent,
    NewmedicamentComponent,
    EditmedicamentComponent,
    NewpatientComponent,
    EditpatientComponent,
    NewprescriptionComponent,
    EditprescriptionComponent,
    PrescriptionComponent,
    EditmedecinComponent,
    NewmedecinComponent,
    NewprescriptionformedecinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
