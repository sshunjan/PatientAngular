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

  isPopupOpen = true;

  constructor( public service:PatientDetailService,
               private dialogBox:MatDialogRef<PatientComponent>,
               @Inject(MAT_DIALOG_DATA) public data : any ) { }

  ngOnInit() {
  }

  resetForm(form:NgForm){
    form.reset();
    this.service.formData.Id = 0;
    this.service.fetchPatients();
  }

  onSubmit(form:NgForm){

    if(this.service.formData.FirstName && this.service.formData.LastName && this.service.formData.BirthDate)
    {
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

  closeDialog(){
    this.dialogBox.close();
    this.service.formData.Id = 0;
    this.service.formData.FirstName = 
    this.service.formData.LastName = 
    this.service.formData.BirthDate = "";
  }

}
