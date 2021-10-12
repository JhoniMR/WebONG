import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/data/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-pagos',
  templateUrl: './tabla-pagos.component.html',
  styleUrls: ['./tabla-pagos.component.css']
})
export class TablaPagosComponent implements OnInit {

  paginacion: number = 1;
  
  informacion: any[] = [];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getMostrar(this.path)
  }

  private path ='pagosvoluntarios';

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