import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-request',
  templateUrl: './meeting-request.component.html',
  styleUrls: ['./meeting-request.component.css']
})
export class MeetingRequestComponent implements OnInit {
  meetingRequestForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.meetingRequestForm = this.fb.group({
      scoutFirstName: ['', Validators.required],
      scoutLastName: ['', Validators.required],
      rank: ['', Validators.required],
      scoutEmail: ['', [Validators.required, Validators.email]],
      dateRequested: ['', Validators.required],
      topics: [''],
      parentFirstName: ['', Validators.required],
      parentLastName: ['', Validators.required],
      parentEmail: ['', [Validators.required, Validators.email]],
      meritBadges: [''],
      notes: ['']
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.meetingRequestForm.valid) {
      // Store form data in session storage
      sessionStorage.setItem('meetingRequestData', JSON.stringify(this.meetingRequestForm.value));
      // Navigate to confirmation page
      this.router.navigate(['/confirmation']);
    } else {
      // Mark all fields as touched to trigger validation display
    }
  }

  // Helper methods remain the same
  get f() { 
    return this.meetingRequestForm.controls; 
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.meetingRequestForm.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched || this.submitted)) : false;
  }

  getErrorMessage(fieldName: string): string {
    const control = this.meetingRequestForm.get(fieldName);
    if (control && control.errors) {
      if (control.errors['required']) {
        return `${fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()} is required`;
      }
      if (control.errors['email']) {
        return 'Please enter a valid email address';
      }
    }
    return '';
  }
}
