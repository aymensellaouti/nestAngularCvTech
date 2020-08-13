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
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      (reponse) => {
        localStorage.setItem('token', reponse.id);
        this.message = '';
        this.router.navigate(['']);
      },
      (erreur) => this.message = 'Veuillez vérifier vos credantials'
    );
  }
}
