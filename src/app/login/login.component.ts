import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message = '';
  user =  {
    username: 'init username',
    password: 'fake password'
  };
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      (reponse) => {
        localStorage.setItem('token', reponse.access_token);
        this.message = '';
        this.router.navigate(['']);
      },
      (erreur) => this.message = 'Veuillez vérifier vos credantials'
    );
  }
}
