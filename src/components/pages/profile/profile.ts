import { Component, OnInit } from '@angular/core';
import { FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormService } from '../../../services/dynamic-form.service';
import { profileFields } from './profile-data';
import { InputCompont } from '../../form-controls/input.compont/input.compont';
import { ButtonComponent } from '../../form-controls/button.component/button.component';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [InputCompont, ButtonComponent, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  providers: [DynamicFormService],
})
export class Profile implements OnInit {
  profileFields = profileFields;

  profileForm!: FormGroup;
  isDisabled = false;
  constructor(
    private dynamicFormService: DynamicFormService,
    private headerService: HeaderService,
  ) {}

  ngOnInit(): void {
    this.upadateHeaderTitle();
    this.createProfileForm();
  }

  upadateHeaderTitle(): void {
    this.headerService.setHeaderTitle('Profile');
  }

  createProfileForm(): void {
    this.profileForm = this.dynamicFormService.createForm(profileFields);
    console.log(this.profileForm.value);
    console.log(this.profileForm.value);
  }

  onInput(event: any): void {
    console.log(event, this.profileForm.value, this.profileFields);
  }

  inputChanges(event: any): void {
    console.log(event);
    this.profileForm.controls[event.field]?.setValue(event.value);
  }

  save(): void {
    console.log(this.profileForm.value, this.profileFields);
  }
}
