import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-confirmation',
  templateUrl: './meeting-confirmation.component.html',
  styleUrls: ['./meeting-confirmation.component.css']
})
export class MeetingConfirmationComponent implements OnInit {
  submittedData: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const data = sessionStorage.getItem('meetingRequestData');
    if (data) {
      this.submittedData = JSON.parse(data);
    } else {
      // Redirect to form if no data is found
      this.router.navigate(['/']);
    }
  }

  submitAnother() {
    sessionStorage.removeItem('meetingRequestData');
    this.router.navigate(['/']);
  }
}
