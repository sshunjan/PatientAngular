import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor( private dialog?:MatDialog) { }

  dialogConfig = { hasBackdrop: true, skipHide: true, width: '50%' };

  ngOnInit() {
  }

  // Opens the Dialog box with a form to add new patients.
  openDialog(){
      const dialogBox = this.dialog.open(PatientDetailsComponent, this.dialogConfig);
  }

}