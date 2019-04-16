import { Component, OnInit, Inject } from '@angular/core';
import { PatientDetailService } from '../shared/patient-detail.service';
import { NgForm, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PatientComponent } from '../patient.component';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  constructor( public service:PatientDetailService,
               private dialogBox:MatDialogRef<PatientComponent>,
               @Inject(MAT_DIALOG_DATA) public data : any ) { }

  ngOnInit() {
  }

  // Resets the form
  resetForm(form:NgForm){
    form.reset();

    // Sets the formData Id to 0 and then 
    // refreshes the list
    this.service.formData.Id = 0;
    this.service.fetchPatients();
  }

  onSubmit(form:NgForm){

    // Checking if any of the form inputs are invalid
    if(this.service.formData.FirstName && this.service.formData.LastName && this.service.formData.BirthDate)
    {

      // Checking if it is an update or addition of a new record
      if(this.service.formData.Id == 0)
        this.service.addPatient(this.service.formData)
                  .subscribe(res=>{this.resetForm(form);}, err=>{console.log();});
      
      else
        this.service.updatePatient(this.service.formData)
                  .subscribe(res=>{this.resetForm(form);}, err=>{console.log();});
    }
    else
      alert("There was an error in your submission. Please try again.");
    
    this.closeDialog();
  }

  // Closed the dialog box
  closeDialog(){
    this.dialogBox.close();
    this.service.formData.Id = 0;
    this.service.formData.FirstName = 
    this.service.formData.LastName = 
    this.service.formData.BirthDate = "";
  }

}
