import { Component, OnInit } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import { ToastrService } from 'ngx-toastr';

//import { Observable } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  crearNoticia: FormGroup;
  submitted = false; 
  loading = false;

  //items: Observable<any[]>;
  
  constructor(private fb: FormBuilder, private authService: AuthService,
               private router: Router,private toastr: ToastrService ) { 
    //this.items = firestore.collection('noticias').valueChanges();

    this.crearNoticia = this.fb.group({
      titulo: ['', Validators.required],
      imagen: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }

  agregarNoticia(){
    this.submitted = true;

    if(this.crearNoticia.invalid){
      return;
    }

    const valores: any = {
      titulo: this.crearNoticia.value.titulo,
      imagen: this.crearNoticia.value.imagen,
      descripcion: this.crearNoticia.value.descripcion,
      fechacreacion: new Date(),
    }
    
    this.loading = true;
    

    this.authService.agregarNoticias(valores).then(() => {
      this.toastr.success('Hola maricos');
    this.router.navigate(['/inicio']);    
    }).catch(error =>{
      
      console.log('Esto es un error');
    })
  }

  ngOnInit(): void {
  }

}
