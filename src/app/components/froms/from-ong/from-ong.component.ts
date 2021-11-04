import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-from-ong',
  templateUrl: './from-ong.component.html',
  styleUrls: ['./from-ong.component.css']
})
export class FromOngComponent implements OnInit {
 
  fromAbout: FormGroup;
  loading = false;

  id: string | null;

  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private router: Router, 
              private aRouter: ActivatedRoute,) {

                this.fromAbout = this.fb.group({
                  titulo: ['', Validators.required],
                  descripcion: ['', Validators.required],
                })
                this.id = this.aRouter.snapshot.paramMap.get('id'); 
              }

              private  path ='nuestraOng';

  ngOnInit(): void {
    this.esEdit();
    this.textarea();
  }

  textarea(){
    const myText = document.getElementById("my-text");
          myText.style.cssText = `height: ${myText.scrollHeight}px; overflow-y: hidden`;
          
          myText.addEventListener("input", function(){
            this.style.height = "auto";
            this.style.height = `${this.scrollHeight}px`;
          });
  }

  agregarEditarNoticia(){
    if(this.fromAbout.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son necesarios, recuerda llenar toda la informacion.',
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
      titulo: this.fromAbout.value.titulo,
      descripcion: this.fromAbout.value.descripcion,
      fechacreacion: new Date().getTime(),
    }

    this.loading = true;
    this.authService.agregarNoticias(valores, this.path).then(() => {
     Swal.fire(
        'Se a guardado con exito!',
        '',
        'success'
      )
    this.router.navigate(['/nuestraOng']); 
    return;   
    }).catch(error =>{
      
      console.log('Esto es un error');
    })

  }

  editarNoticia(id: string){
    const valores: any = {
      titulo: this.fromAbout.value.titulo,
      descripcion: this.fromAbout.value.descripcion,
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
     this.router.navigate(['/nuestraOng']); 
  }

  esEdit(){
    if(this.id !== null){
      this.loading = true;  
      this.authService.getNoticia(this.id, this.path).subscribe(data =>{
        this.loading = false;
        this.fromAbout.setValue({
          titulo: data.payload.data()['titulo'],
          descripcion: data.payload.data()['descripcion'],
        })
      })
    }
  }


}
