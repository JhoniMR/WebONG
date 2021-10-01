import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-from-abeneficios',
  templateUrl: './from-abeneficios.component.html',
  styleUrls: ['./from-abeneficios.component.css']
})
export class FromAbeneficiosComponent implements OnInit {
 
  fromServices: FormGroup;
  loading = false;

  id: string | null;

  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private router: Router, 
              private aRouter: ActivatedRoute,) {

                this.fromServices = this.fb.group({
                  titulo: ['', Validators.required],
                  descripcion: ['', Validators.required],
                })
                this.id = this.aRouter.snapshot.paramMap.get('id'); 
              }

              private  path ='beneficios';

  ngOnInit(): void {
    this.esEdit();
  }

  agregarEditarNoticia(){
     
    if(this.fromServices.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son necesarios, recuerda llenar toda la informacion, si no sabes que agregar pon (N/A) en el campo',
      })
      return;
     }

    if(this.id === null){
      this.agregarNoticia();
    }else{
      this.editarNoticia(this.id);
    }
  }  

  agregarNoticia(){
    const valores: any = {
      titulo: this.fromServices.value.titulo,
      descripcion: this.fromServices.value.descripcion,
      fechacreacion: new Date().getTime(),
    }

    this.loading = true;
    this.authService.agregarNoticias(valores, this.path).then(() => {
     Swal.fire(
        'Se a guardado con exito!',
        '',
        'success'
      )
    this.router.navigate(['/beneficios']); 
    return;   
    }).catch(error =>{
      
      console.log('Esto es un error');
    })

  }

  editarNoticia(id: string){

    const valores: any = {
      titulo: this.fromServices.value.titulo,
      descripcion: this.fromServices.value.descripcion,
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
     this.router.navigate(['/beneficios']); 
  }

  esEdit(){
    if(this.id !== null){
      this.loading = true;  
      this.authService.getNoticia(this.id, this.path).subscribe(data =>{
        this.loading = false;
        this.fromServices.setValue({
          titulo: data.payload.data()['titulo'],
          descripcion: data.payload.data()['descripcion'],
        })
      })
    }
  }


}
