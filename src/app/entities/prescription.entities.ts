import {Patient} from "./patient.entites";

export interface Prescription {
  idprescription : number;
  dateprescription : string;
  patient: Patient;
}
