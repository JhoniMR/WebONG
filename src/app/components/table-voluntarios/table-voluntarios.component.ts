import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/data/auth.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-table-voluntarios',
  templateUrl: './table-voluntarios.component.html',
  styleUrls: ['./table-voluntarios.component.css']
})
export class TableVoluntariosComponent implements OnInit {

  buscar: string; 
  informacion: any[] = [];  

  fileName= 'listaVoluntarios.xlsx';
  paginacion: number = 1;

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);

  }
  
 
  constructor(private authService: AuthService) {  }

  ngOnInit(): void {
    this.getMostrar(this.path)
  }

  private path ='voluntarios';

  getMostrar( path: string){
    this.authService.getVoluntarios(this.path).subscribe(data =>{
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

  buscador(){
    this.authService.getVoluntarios(this.path).subscribe(data =>{
      this.informacion = [];
        data.forEach((element:any) =>{
          this.informacion.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.informacion);
        this.informacion = this.informacion.filter(data =>{
          return data.numerodocumento.toString().trim() === this.buscar;
        })

        if(this.informacion.length === 0){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Dato no encontrado',
            footer: ''
          })
        }else{
          Swal.fire(
            '',
            'Dato encontrado con exito',
            'success'
          )
        }
    });
 }
 

}
