import { Component, OnInit } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';


//import { Observable } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  crearNoticia: FormGroup;
  submitted = false; 
  loading = false;

  id: string | null;


  
  constructor(private fb: FormBuilder, private authService: AuthService,
               private router: Router, private aRouter: ActivatedRoute ) { 
    
    this.crearNoticia = this.fb.group({
      titulo: ['', Validators.required],
      imagen: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id'); 
    console.log(this.id);
  }

  ngOnInit(): void {
    this.esEdit();
  }

  agregarEditarNoticia(){
    this.submitted = true;

    if(this.crearNoticia.invalid){
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
      titulo: this.crearNoticia.value.titulo,
      imagen: this.crearNoticia.value.imagen,
      descripcion: this.crearNoticia.value.descripcion,
      fechacreacion: new Date(),
    }
    this.loading = true;
    this.authService.agregarNoticias(valores).then(() => {
     Swal.fire(
        'Se a guardado con exito!',
        '',
        'success'
      )
    this.router.navigate(['/inicio']); 
    return;   
    }).catch(error =>{
      
      console.log('Esto es un error');
    })

  }

  editarNoticia(id: string){

    const valores: any = {
      titulo: this.crearNoticia.value.titulo,
      imagen: this.crearNoticia.value.imagen,
      descripcion: this.crearNoticia.value.descripcion,
    }

    this.loading = true;
    this.authService.actualizarNoticia(id, valores).then(()=>{
      this.loading = false;
      console.log('GUARDAO CON EXITO!!!!');
    });
     this.router.navigate(['/inicio']); 
  }

  esEdit(){
    if(this.id !== null){
      this.loading = true;  
      this.authService.getNoticia(this.id).subscribe(data =>{
        this.loading = false;
        this.crearNoticia.setValue({
          titulo: data.payload.data()['titulo'],
          imagen: data.payload.data()['imagen'],
          descripcion: data.payload.data()['descripcion'],
        })
      })
    }
  }
}
