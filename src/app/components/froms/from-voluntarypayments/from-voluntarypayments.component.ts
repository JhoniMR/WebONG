import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-from-voluntarypayments',
  templateUrl: './from-voluntarypayments.component.html',
  styleUrls: ['./from-voluntarypayments.component.css']
})
export class FromVoluntarypaymentsComponent implements OnInit {

  pagoFrom: FormGroup;

  id: string | null;

  submitted = false; 
  loading = false;
  
  image$: Observable<any>;

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router,   
    private aRouter: ActivatedRoute,
    private angularFireStorage: AngularFireStorage) { 

      this.pagoFrom = this.fb.group({
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        correo: ['', Validators.required],
        numerocelular: ['', Validators.required],
        tipodocumento: ['', Validators.required],
        cedula: ['', Validators.required],
        imagen: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id'); 
    }

    private  path ='pagosvoluntarios';

    ngOnInit(): void {
      this.esEdit();
    }
  
    agregarEditarNoticia(){

      if(this.pagoFrom.invalid){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Todos los campos son necesarios, recuerda llenar toda la información',
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
        nombres: this.pagoFrom.value.nombres,
        apellidos: this.pagoFrom.value.apellidos,
        correo: this.pagoFrom.value.correo,
        numerocelular: this.pagoFrom.value.numerocelular,
        tipodocumento: this.pagoFrom.value.tipodocumento,
        cedula: this.pagoFrom.value.cedula,
        imagen: this.pagoFrom.value.imagen,
        fechacreacion: new Date().getTime(),
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
        nombres: this.pagoFrom.value.nombres,
        apellidos: this.pagoFrom.value.apellidos,
        correo: this.pagoFrom.value.correo,
        numerocelular: this.pagoFrom.value.numerocelular,
        tipodocumento: this.pagoFrom.value.tipodocumento,
        cedula: this.pagoFrom.value.cedula,
        imagen: this.pagoFrom.value.imagen,
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
          this.pagoFrom.setValue({
            nombres: data.payload.data()['nombres'],
            apellidos: data.payload.data()['apellidos'],
            correo: data.payload.data()['correo'],
            numerocelular: data.payload.data()['numerocelular'],
            tipodocumento: data.payload.data()['tipodocumento'],
            cedula: data.payload.data()['cedula'],
            imagen: data.payload.data()['imagen'],
          })
        })
      }
    }
  
    uploadFile(event){
      this.loading = true;
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
            this.pagoFrom.get('imagen').setValue(url);
            this.loading = false;
          })
        })
      )
      .subscribe();
    }
  
  }
  
