import { Injectable } from '@angular/core';
import { PatientDetail } from './patient-detail.model'; 
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailService {
  // YOUR API URL GOES HERE
  readonly url : string = "https://patient-test-api.azurewebsites.net/api/patientdetails";

  list : PatientDetail[];
  formData: PatientDetail = new PatientDetail();

  constructor(private http:HttpClient) { }

  // Adds a new patient 
  addPatient(formData:PatientDetail){
    return this.http.post(this.url,formData);
  }

  // Updates the selected patient
  updatePatient(formData:PatientDetail){
    return this.http.put(this.url + "/" + formData.Id,formData);
  }

  // Deleted the selected patient
  deletePatient(id:number){
    return this.http.delete(this.url + "/" + id);
  }

  // Fetches all the patients
  fetchPatients(){
    this.http.get(this.url).toPromise().then(
      res => this.list = res as PatientDetail[]
    );
    
  }
}
