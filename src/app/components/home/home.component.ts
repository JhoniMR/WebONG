import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/data/auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user$: Observable<any> = this.authService.afAuth.user;

  public noMostrar: any;
  public isLogged = false;

  informacion: any[] = [];

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    //console.log(this.informacion.map.call.fechacreacion)

    if(this.noMostrar){
      this.isLogged = true;
  }
    this.getMostrar(this.path);
  }
  private  path ='noticias';

  /* RECORRE LA BASE DE DATOS DE FIREBASE Y ME TRAE LA INF Y SU ID*/   
  getMostrar( path: string){
    
    this.authService.getNoticias(this.path).subscribe(data =>{
      this.informacion = [];
        data.forEach((element:any) =>{
          this.informacion.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.informacion);
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
