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
    NewprescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
