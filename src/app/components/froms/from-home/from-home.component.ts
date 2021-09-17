import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-from-home',
  templateUrl: './from-home.component.html',
  styleUrls: ['./from-home.component.css']
})
export class FromHomeComponent implements OnInit {

  crearNoticia: FormGroup;
  id: string | null;

  submitted = false; 
  loading = false;
 

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router, private aRouter: ActivatedRoute) { 

      this.crearNoticia = this.fb.group({
        titulo: ['', Validators.required],
        imagen: ['', Validators.required],
        video: ['', Validators.required],
        descripcion: ['', Validators.required]
      })
      this.id = this.aRouter.snapshot.paramMap.get('id'); 
    }

    private  path ='noticias';

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
      titulo: this.crearNoticia.value.titulo,
      imagen: this.crearNoticia.value.imagen,
      descripcion: this.crearNoticia.value.descripcion,
      video: this.crearNoticia.value.video,
      fechacreacion: new Date(),
    }
    this.loading = true;
    this.authService.agregarNoticias(valores, this.path).then(() => {
     Swal.fire(
        'Se a guardado con exito!',
        '',
        'success'
      )
    this.router.navigate(['/home']); 
    return;   
    }).catch(error =>{
      
      console.log('Esto es un error');
    })

  }

  editarNoticia(id: string){

    const valores: any = {
      titulo: this.crearNoticia.value.titulo,
      imagen: this.crearNoticia.value.imagen,
      video: this.crearNoticia.value.video,
      descripcion: this.crearNoticia.value.descripcion,
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
     this.router.navigate(['/home']); 
  }

  esEdit(){
    if(this.id !== null){
      this.loading = true;  
      this.authService.getNoticia(this.id, this.path).subscribe(data =>{
        this.loading = false;
        this.crearNoticia.setValue({
          titulo: data.payload.data()['titulo'],
          imagen: data.payload.data()['imagen'],
          video: data.payload.data()['video'],
          descripcion: data.payload.data()['descripcion'],
        })
      })
    }
  }

}
