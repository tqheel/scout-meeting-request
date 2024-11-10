import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingRequestComponent } from './meeting-request/meeting-request.component';
import { MeetingConfirmationComponent } from './meeting-confirmation/meeting-confirmation.component';

const routes: Routes = [
  { path: '', component: MeetingRequestComponent },
  { path: 'confirmation', component: MeetingConfirmationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
