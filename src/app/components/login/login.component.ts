import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user$: Observable<any> = this.authService.afAuth.user;

  formLogin: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private authService: AuthService,  private router: Router) { 
    this.formLogin = this.fb.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
    })
  }

  ngOnInit() {
   
  }

  async onLogin(){
    if(this.formLogin.valid){
      this.loading = true;
      const value = this.formLogin.value;
      this.authService.login(value.correo, value.contrasena)
      .then(() =>{
        this.router.navigate(['/home'])
      })
      .catch(() =>{
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El correo o contraseña son incorrectos',
        })
      });
    }
  }



  refresh(): void{
    window.location.reload();
  }

}
