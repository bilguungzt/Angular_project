import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.scss',
  standalone: false,
})
export class UserprofileComponent {
  counter = 0;

  userProfileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
  });

  get Name(): string | null | undefined {
    return this.userProfileForm.value.name;
  }

  get Email(): string | null | undefined {
    return this.userProfileForm.value.email;
  }

  get DoB(): string | null | undefined {
    return this.userProfileForm.value.dob;
  }

  get welcome(): string {
    if (this.Name) return `Welcome, ${this.Name}!`;
    return '';
  }

  get isInputEmpty(): boolean {
    return Object.values(this.userProfileForm.controls).every(
      (control) => !control.value
    );
  }

  onReset() {
    this.userProfileForm.reset();
  }

  onSave() {
    this.counter++;
    Object.values(this.userProfileForm.value).map((v) => console.log(v));
  }
}
