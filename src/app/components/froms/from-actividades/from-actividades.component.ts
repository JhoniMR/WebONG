import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-from-actividades',
  templateUrl: './from-actividades.component.html',
  styleUrls: ['./from-actividades.component.css']
})
export class FromActividadesComponent implements OnInit {

  fromActividades: FormGroup;
  loading = false;

  id: string | null;

  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private router: Router, 
              private aRouter: ActivatedRoute,) {

                this.fromActividades = this.fb.group({
                  titulo: ['', Validators.required],
                  descripcion: ['', Validators.required],
                })
                this.id = this.aRouter.snapshot.paramMap.get('id'); 
              }

              private  path ='actividades';

  ngOnInit(): void {
    this.esEdit();
  }

  agregarEditarNoticia(){
    if(this.id === null){
      this.agregarNoticia();
    }else{
      this.editarNoticia(this.id);
    }
  }  

  agregarNoticia(){
    const valores: any = {
      titulo: this.fromActividades.value.titulo,
      descripcion: this.fromActividades.value.descripcion,
      fechacreacion: new Date().getTime(),
    }

    this.loading = true;
    this.authService.agregarNoticias(valores, this.path).then(() => {
     Swal.fire(
        'Se a guardado con exito!',
        '',
        'success'
      )
    this.router.navigate(['/actividades']); 
    return;   
    }).catch(error =>{
      
      console.log('Esto es un error');
    })

  }

  editarNoticia(id: string){
    const valores: any = {
      titulo: this.fromActividades.value.titulo,
      descripcion: this.fromActividades.value.descripcion,
    }
    this.loading = true;
    this.authService.actualizarNoticia(this.path, id, valores ).then(()=>{
      this.loading = false;
      Swal.fire(
        'Se a guardado con exito!',
        '',
        'success'
      )
    });
     this.router.navigate(['/actividades']); 
  }

  esEdit(){
    if(this.id !== null){
      this.loading = true;  
      this.authService.getNoticia(this.id, this.path).subscribe(data =>{
        this.loading = false;
        this.fromActividades.setValue({
          titulo: data.payload.data()['titulo'],
          descripcion: data.payload.data()['descripcion'],
        })
      })
    }
  }


}
