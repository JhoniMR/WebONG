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

  formAbout: FormGroup

  public user$: Observable<any> = this.authService.afAuth.user;
  public isLogged = false;
  loading = false;

  informacion: any[] = [];
  condecoracion: any[] = [];

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router) { 

      this.formAbout = this.fb.group({
        nombre: ['', Validators.required],
        correo: ['', Validators.required],
        descripcion: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.getMostrar(this.path);
    this.getMostrarCondecoracio('condecoracion');
  }

  private  path ='nosotros';

  /* RECORRE LA BASE DE DATOS DE FIREBASE Y ME TRAE LA INF Y SU ID*/   
  getMostrar( path: string){
    this.authService.getservicios(this.path).subscribe(data =>{
      this.informacion = [];
        data.forEach((element:any) =>{
          this.informacion.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });

        if(this.informacion === null){
          this.isLogged = false;
          return
        }else{
          this.isLogged = true;
          return
        }
    });
  }

  eliminarNoticia(id: string, path: string){
    this.authService.eliminarNoticia(id, this.path).then(() =>{
    }).catch(error =>{
      console.log('Este es el ERROR ->',error);
    })
  }

  preguntaEliminar(id: string){
    Swal.fire({
      title: '¿Estas seguro de eliminarlo?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarNoticia(id,this.path);
        Swal.fire(
          'Deleted!',
          'Se a eliminado con exito!',
          'success',
        )
      }
    })
  }

  getMostrarCondecoracio( path: string){
    path = 'condecoracion';
    this.authService.getservicios(path).subscribe(data =>{
      this.condecoracion = [];
        data.forEach((element:any) =>{
          this.condecoracion.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });

        if(this.condecoracion === null){
          this.isLogged = false;
          return
        }else{
          this.isLogged = true;
          return
        }
    });
  }

  eliminarNoticiacondecoracion(id: string, path: string){
    this.authService.eliminarNoticia(id, 'condecoracion').then(() =>{
    }).catch(error =>{
      console.log('Este es el ERROR ->',error);
    })
  }

  preguntaEliminarCondecoracion(id: string){
    Swal.fire({
      title: '¿Estas seguro de eliminarlo?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarNoticiacondecoracion(id, 'condecoracion');
        Swal.fire(
          'Deleted!',
          'Se a eliminado con exito!',
          'success',
        )
      }
    })
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
        
      this.authService.agregarNoticias(valores, 'comentarios').then(() => {
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
