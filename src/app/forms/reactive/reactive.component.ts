import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, AsyncValidatorFn, Validators} from '@angular/forms';
import {first, map} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  form: FormGroup;

  get skills() {
    return this.form.controls.skills as FormArray;
  }

  ngOnInit() {
    // this.form = new FormGroup(
    //   {
    //   credentials: new FormGroup({
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl(null, [Validators.required, createPasswordStrengthValidator]),
    //   }),
    //   username: new FormControl(null, [Validators.required]),
    //   age: new FormControl(null, [Validators.required, Validators.pattern('[0-1]?\d{1,2}')]),
    //   skills: new FormArray([]),
    // },
    //   // {
    //   //   validators: VotreValidateur
    //   // }
    // );
    this.form = this.formBuilder.group(
      {
      credentials: this.formBuilder.group({
        email: [null,
          {
            validators: [Validators.required, Validators.email],
            asyncValidators: [userExistsValidator(this.authService)],
            updateOn: 'blur'
          }],
        password: [null, {validators: [Validators.required, createPasswordStrengthValidator()]}],
      }),
      username: [null, {validators: [Validators.required]}],
      age: [null, {validators: [Validators.required, Validators.pattern('[0-1]?\d{1,2}')]}],
      skills: this.formBuilder.array([
        // this.formBuilder.control( null, [Validators.required])
      ])
    },
      // {
      //   validators: VotreValidateur
      // }
    );
    // this.buildForm();
  }

  addSkill(): void {
    const skillFormControl = this.formBuilder.group({
      name: [null, Validators.required]
    });
    this.skills.push(skillFormControl);
  }

  // buildForm() {
  //   this.form = this.formBuilder.group({
  //     email: [null, [Validators.required, Validators.email]],
  //     username: [null, [Validators.required]],
  //     userCategory: ['employee'],
  //     institution: [null],
  //     company: [null],
  //     salary: [null],
  //   });
  // }


  process() {
    console.log(this.form);
  }

}

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    console.log('in pass str valid');
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
    return !passwordValid ? {passwordStrength: true} : null;
  };
}

export function creatDateRangeValidator(): ValidatorFn {
  return (form: FormGroup): ValidationErrors | null => {
    const start: Date = form.get('startAt').value;
    const end: Date = form.get('endAt').value;
    if (start && end) {
      const isRangeValid = (end.getTime() - start.getTime() > 0);
      return isRangeValid ? null : {dateRange: true};
    }
    return null;
  };
}

export function userExistsValidator(authService: AuthService): AsyncValidatorFn  {
  return (control: AbstractControl) => {
    return authService.findUserByEmail(control.value).pipe(
      first()
    );
  };
    // const toReturn = authService.findUserByEmail(control.value)
    //   .pipe(
    //     map(user => {
    //         console.log('in user', user);
    //         if (user) { return  {userExists: true}; } else  {return null; }
    //     }
    //     )
    //   );
    // console.log(typeof toReturn);
  // };
}
