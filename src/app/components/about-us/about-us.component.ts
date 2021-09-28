import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public user$: Observable<any> = this.authService.afAuth.user;

  formAbout : FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router) { 

      this.formAbout = this.fb.group({
        nombre: ['', Validators.required],
        correo: ['', Validators.required],
        descripcion: ['', Validators.required],
      })
    }

    private path ='comentarios'

    ngOnInit(): void {
    }



    agregarComentario(){
      
      if(this.formAbout.invalid){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Todos los campos son necesarios, recuerda llenar toda la informacion',
        })
        return;
       }else{

        const valores: any = {
          nombre: this.formAbout.value.nombre,
          correo: this.formAbout.value.correo,
          descripcion: this.formAbout.value.descripcion,
          fechacreacion: new Date().getTime(),
        }
        this.loading = true;
  
        this.authService.agregarNoticias(valores, this.path).then(() => {
         Swal.fire(
            'Se a guardado con exito!',
            '',
            'success'
         )
        //this.router.navigate(['/about-us']); 
         this.loading = false;
         this.formAbout.reset();
        return;   
        }).catch(error =>{
          
          console.log('Esto es un error');
        })

         
       }

     
  
    }

  

}
