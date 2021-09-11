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

  informacion: any[] = [];

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.getMostrar();
  }

  /* RECORRE LA BASE DE DATOS DE FIREBASE Y ME TRAE LA INF Y SU ID*/   
  getMostrar(){
    this.authService.getNoticias().subscribe(data =>{
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

  eliminarNoticia(id: string){
    this.authService.eliminarNoticia(id).then(() =>{
    }).catch(error =>{
      console.log('Este es el ERROR ->',error);
    })
  }

  preguntaEliminar(id: string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarNoticia(id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        )
      }
    })
  }
  
}
