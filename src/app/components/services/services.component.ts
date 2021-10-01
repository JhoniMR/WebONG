import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/data/auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public user$: Observable<any> = this.authService.afAuth.user;
  public isLogged = false;
  informacion: any[] = [];


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getMostrar(this.path);
  }

  private  path ='servicios';

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

}
