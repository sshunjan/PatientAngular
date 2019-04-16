// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button'

// Components 
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientDetailsListComponent } from './patient/patient-details-list/patient-details-list.component';
import { PatientDetail } from './patient/shared/patient-detail.model';

// Services
import { PatientDetailService } from './patient/shared/patient-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientDetailsComponent,
    PatientDetailsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  entryComponents: [ PatientDetailsComponent ], 
  providers: [PatientDetailService, PatientDetail, PatientDetailsComponent, PatientComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
