import { Component, OnInit } from '@angular/core';
import { PatientDetailService } from '../shared/patient-detail.service';
import { PatientDetail } from '../shared/patient-detail.model';
import { PatientComponent } from '../../patient/patient.component'

@Component({
  selector: 'app-patient-details-list',
  templateUrl: './patient-details-list.component.html',
  styleUrls: ['./patient-details-list.component.css']
})
export class PatientDetailsListComponent implements OnInit {

  constructor(public service: PatientDetailService,
              private model: PatientDetail,
              private patientDetails: PatientComponent ) { }

  patients : PatientDetail[] = [];
  searchInput: string;

  ngOnInit() {
    this.service.fetchPatients();
  }

  //Populates the form for an update
  populateForm(pd : PatientDetail){
    this.patientDetails.openDialog();

    // Copying the data object so that the changes
    // to update the object won't be shown in the list at runtime
    this.service.formData = Object.assign({},pd);
  }

  // Deletes the patient
  removePatient(id:number){
    if (confirm("Are you sure?"))
    this.service.deletePatient(id).subscribe(res=>{this.service.fetchPatients();}, err=>{console.log()});
  }

  // Search function 
  search(){

    // When the input is empty, refresh the list
    if(this.searchInput != "")
      this.service.list = this.service.list.filter(result => {return result.FirstName.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase())});
    else
      this.service.fetchPatients();
  }

}
