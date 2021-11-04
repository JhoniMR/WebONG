import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fromchat',
  templateUrl: './fromchat.component.html',
  styleUrls: ['./fromchat.component.css']
})
export class FromchatComponent implements OnInit {

  fromChat: FormGroup;
  loading = false;

  private path ='eventos';

   id: string | null;

  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private router: Router,
              private aRouter: ActivatedRoute) { 
                
        this.fromChat = this.fb.group({
          titulo: ['', Validators.required],
          link: ['', Validators.required],
          descripcion: ['', Validators.required],
          fecha: ['', Validators.required],
          hora: ['', Validators.required],
          jornada: ['', Validators.required],
          lugar: ['', Validators.required],
          code:['', Validators.required],
        })
        this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.textarea();
    this.esEdit();
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
    if(this.fromChat.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Recuerda agregar toda la información necesaria',
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
      titulo: this.fromChat.value.titulo,
      link: this.fromChat.value.link,
      descripcion: this.fromChat.value.descripcion,
      fecha: this.fromChat.value.fecha,
      hora: this.fromChat.value.hora,
      jornada: this.fromChat.value.jornada,
      lugar: this.fromChat.value.lugar,
      code: this.fromChat.value.code,
      fechacreacion: new Date().getTime(),
    }
    this.loading = true;
    this.authService.agregarNoticias(valores, this.path).then(() => {
     Swal.fire(
        'Se a guardado con exito!',
        '',
        'success'
      )
    this.router.navigate(['/events']); 
    return;   
    }).catch(error =>{
      console.log('Esto es un error');
    })

  }

  editarNoticia(id: string){
    const valores: any = {
      titulo: this.fromChat.value.titulo,
      link: this.fromChat.value.link,
      descripcion: this.fromChat.value.descripcion,
      fecha: this.fromChat.value.fecha,
      hora: this.fromChat.value.hora,
      jornada: this.fromChat.value.jornada,
      lugar: this.fromChat.value.lugar,
      code: this.fromChat.value.code,
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
     this.router.navigate(['/events']); 
  }

  esEdit(){
    if(this.id !== null){
      this.loading = true;  
      this.authService.getNoticia(this.id, this.path).subscribe(data =>{
        this.loading = false;
        this.fromChat.setValue({
          titulo: data.payload.data()['titulo'],
          link: data.payload.data()['link'],
          descripcion: data.payload.data()['descripcion'],
          fecha: data.payload.data()['fecha'],
          hora: data.payload.data()['hora'],
          jornada: data.payload.data()['jornada'],
          lugar: data.payload.data()['lugar'],
          code: data.payload.data()['code'],
        })
      })
    }
  }

}
