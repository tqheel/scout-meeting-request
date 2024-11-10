import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingRequestComponent } from './meeting-request/meeting-request.component';
import { MeetingConfirmationComponent } from './meeting-confirmation/meeting-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingRequestComponent,
    MeetingConfirmationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
