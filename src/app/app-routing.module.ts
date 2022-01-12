import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MedicamentsComponent} from "./components/medicaments/medicaments.component";
import {MedecinsComponent} from "./components/medecins/medecins.component";
import {PatientsComponent} from "./components/patients/patients.component";
import {NewmedicamentComponent} from "./components/newmedicament/newmedicament.component";
import {EditmedicamentComponent} from "./components/editmedicament/editmedicament.component";
import {NewpatientComponent} from "./components/newpatient/newpatient.component";
import {EditpatientComponent} from "./components/editpatient/editpatient.component";
import {PrescriptionComponent} from "./components/prescription/prescription.component";
import {EditmedecinComponent} from "./components/editmedecin/editmedecin.component";
import {NewmedecinComponent} from "./components/newmedecin/newmedecin.component";
import {ExamenComponent} from "./components/examen/examen.component";
import {ExamenbonusComponent} from "./components/examenbonus/examenbonus.component";

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'medecins', component: MedecinsComponent},
  {path : 'patients', component: PatientsComponent},
  {path : 'medicaments', component: MedicamentsComponent},
  {path : 'newMedicament', component: NewmedicamentComponent},
  {path : 'editMedicament/:idmedicament', component: EditmedicamentComponent},
  {path : 'newPatient', component: NewpatientComponent},
  {path : 'editPatient/:idpatient', component: EditpatientComponent},
  {path : 'prescriptions', component: PrescriptionComponent},
  {path : 'editMedecin/:idmedecin', component: EditmedecinComponent},
  {path : 'newMedecin', component: NewmedecinComponent},
  {path : 'examen', component: ExamenComponent},
  {path : 'examenBonus', component: ExamenbonusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
