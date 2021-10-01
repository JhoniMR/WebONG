import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import Swal from 'sweetalert2';

import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FirestoresService } from 'app/data/firestores.service';



@Component({
  selector: 'app-from-award',
  templateUrl: './from-award.component.html',
  styleUrls: ['./from-award.component.css']
})
export class FromAwardComponent implements OnInit {


  fromCondecoracion: FormGroup;
  id: string | null;

  submitted = false; 
  loading = false;
  cargaimg = false;

  image$: Observable<any>;
 

  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private router: Router,   
              private aRouter: ActivatedRoute,
              private angularFireStorage: AngularFireStorage,
              private firestoresService: FirestoresService) { 

      this.fromCondecoracion = this.fb.group({
        titulo: ['', Validators.required],
        imagen: ['', Validators.required],
        descripcion: ['', Validators.required]
      })
         this.id = this.aRouter.snapshot.paramMap.get('id'); 
    }

    private  path ='condecoracion';

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
      titulo: this.fromCondecoracion.value.titulo,
      imagen: this.fromCondecoracion.value.imagen,
      descripcion: this.fromCondecoracion.value.descripcion,
      fechacreacion: new Date().getTime(),
    }

    this.loading = true;
    this.authService.agregarNoticias(valores, this.path).then(() => {
     Swal.fire(
        'Se a guardado con exito!',
        '',
        'success'
      )
    this.router.navigate(['/about-us']); 
    return;   
    }).catch(error =>{
      console.log('Esto es un error');
    })

  }

  

  editarNoticia(id: string){

    const valores: any = {
      titulo: this.fromCondecoracion.value.titulo,
      imagen: this.fromCondecoracion.value.imagen,
      descripcion: this.fromCondecoracion.value.descripcion,
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
     this.router.navigate(['/about-us']); 
  }

  esEdit(){
    if(this.id !== null){
      this.loading = true;  
      this.authService.getNoticia(this.id, this.path).subscribe(data =>{
        this.loading = false;
        this.fromCondecoracion.setValue({
          titulo: data.payload.data()['titulo'],
          imagen: data.payload.data()['imagen'],
          descripcion: data.payload.data()['descripcion'],
        })
      })
    }
  }

  async uploadFile(event){
    this.cargaimg = true;
    const file = event.target.files[0];
    const name = event.target.files[0].name;
    const fileRef = this.angularFireStorage.ref(name); 
    const task = this.angularFireStorage.upload(name, file);
    

    task.snapshotChanges()
    .pipe(
      finalize(() =>{
      
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url =>{
          console.log('esta es la URL->', url);
          this.fromCondecoracion.get('imagen').setValue(url);
          this.cargaimg = false;
        })
      })
      
    )
    .subscribe();
  }


 

  

}
