import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MedicamentsComponent} from "./components/medicaments/medicaments.component";
import {MedecinsComponent} from "./components/medecins/medecins.component";
import {PatientsComponent} from "./components/patients/patients.component";

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'medecins', component: MedecinsComponent},
  {path : 'patients', component: PatientsComponent},
  {path : 'medicaments', component: MedicamentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
