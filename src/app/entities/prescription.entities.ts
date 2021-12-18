import {Patient} from "./patient.entites";
import {Medecin} from "./medecin.entities";

export interface Prescription {
  idprescription : number;
  dateprescription : string;
  medecin: Medecin;
  patient: Patient;
}
