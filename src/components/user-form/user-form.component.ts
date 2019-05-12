import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../helpers/must-match.validator';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  currentUser: User;

  constructor(private formBuilder: FormBuilder) {
    this.currentUser = new User();
  }

  ngOnInit() {
    this.buildForm();
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value.name);
    console.log('user', this.currentUser)
  }

  buildForm(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      surnames: ['', [Validators.required, Validators.minLength(6)]],
      identityCard: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',  Validators.required]
    }, { validator: MustMatch('password', 'confirmPassword') });
  }

  get form() { return this.registerForm.controls; }
}
