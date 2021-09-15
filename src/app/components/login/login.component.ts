import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user$: Observable<any> = this.authService.afAuth.user;

  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,  private router: Router) { 
    this.formLogin = this.fb.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
    })
  }

  ngOnInit() {
   
  }

  onLogin(){
    const {correo, contrasena} = this.formLogin.value;
    try {
    const user = this.authService.login(correo, contrasena);
      if(user){
        this.router.navigate(['/home']);
      }
    } catch (error) {
      this.router.navigate(['/#/home']);
      console.log('SUCEDIO UN ERROR EN LOGIN', error)
    }
  }

  refresh(): void{
    window.location.reload();
  }

}
