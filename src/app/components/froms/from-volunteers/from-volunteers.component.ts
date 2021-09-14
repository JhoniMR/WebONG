import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-from-volunteers',
  templateUrl: './from-volunteers.component.html',
  styleUrls: ['./from-volunteers.component.css']
})
export class FromVolunteersComponent implements OnInit {

  private  path ='voluntarios';
  registroFrom: FormGroup;
  submitted = false;
  loading = false;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router, private aRouter: ActivatedRoute) { 

      this.registroFrom = this.fb.group({
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        correo: ['', Validators.required],
        tipodocumento: ['', Validators.required],
        numerodocumento: ['', Validators.required],
        lugardeexpedicion: ['', Validators.required],
        lugarnacimiento: ['', Validators.required],
        fechanacimiento: ['', Validators.required],
        sexo: ['', Validators.required],
        direccion: ['', Validators.required],
        departamento: ['', Validators.required],
        ciudad: ['', Validators.required],
        telefonofijo: ['', Validators.required],
        numerocelular: ['', Validators.required],
        poblacion: ['', Validators.required],
        eps: ['', Validators.required],
        regimen: ['', Validators.required],
        profesion: ['', Validators.required],
        areavoluntaria: ['', Validators.required],
        pasaporte: ['', Validators.required],
        rh: ['', Validators.required],
        puntuación: ['', Validators.required],
        tenerencuenta: ['', Validators.required],
      })
      
    }

    

  ngOnInit(): void {
  }

  agregarEditarNoticia(){

  this.submitted = true; 

   if(this.registroFrom.invalid){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Todos los campos son necesarios, recuerda llenar toda la informacion, si no sabes que agregar pon (N/A) en el campo',
    })
    return;
  }

  const valuesFormVoluntarios: any ={
    nombres: this.registroFrom.value.nombres,
    apellidos: this.registroFrom.value.apellidos,
    correo: this.registroFrom.value.correo,
    tipodocumento: this.registroFrom.value.tipodocumento,
    numerodocumento: this.registroFrom.value.numerodocumento,
    lugardeexpedicion: this.registroFrom.value.lugardeexpedicion,
    lugarnacimiento: this.registroFrom.value.lugarnacimiento,
    fechanacimiento: this.registroFrom.value.fechanacimiento,
    sexo: this.registroFrom.value.sexo,
    direccion: this.registroFrom.value.direccion,
    departamento: this.registroFrom.value.departamento,
    ciudad: this.registroFrom.value.ciudad,
    telefonofijo: this.registroFrom.value.telefonofijo,
    numerocelular: this.registroFrom.value.numerocelular,
    poblacion: this.registroFrom.value.poblacion,
    eps: this.registroFrom.value.eps,
    regimen: this.registroFrom.value.regimen,
    profesion: this.registroFrom.value.profesion,
    areavoluntaria: this.registroFrom.value.areavoluntaria,
    pasaporte: this.registroFrom.value.pasaporte,
    rh: this.registroFrom.value.rh,
    puntuación: this.registroFrom.value.puntuación,
    tenerencuenta: this.registroFrom.value.tenerencuenta,
    fechaCreacion: new Date(),
  }

  this.loading = true;
    this.authService.agregarNoticias(valuesFormVoluntarios, this.path).then(() => {
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
   




  console.log(this.registroFrom.value);
   
  }  

  /* agregarNoticia(){
    const valores: any = {
        nombres: this.registroFrom.value.nombres,
        apellidos: this.registroFrom.value.apellidos,
        correo: this.registroFrom.value.correo,
        tipodocumento: this.registroFrom.value.tipodocumento,
        numerodocumento: this.registroFrom.value.numerodocumento,
        lugardeexpedicion: this.registroFrom.value.lugardeexpedicion,
        lugarnacimiento: this.registroFrom.value.lugarnacimiento,
        fechanacimiento: this.registroFrom.value.fechanacimiento,
        sexo: this.registroFrom.value.sexo,
        direccion: this.registroFrom.value.direccion,
        departamento: this.registroFrom.value.departamento,
        ciudad: this.registroFrom.value.ciudad,
        telefonofijo: this.registroFrom.value.telefonofijo,
        numerocelular: this.registroFrom.value.numerocelular,
        poblacion: this.registroFrom.value.poblacion,
        eps: this.registroFrom.value.eps,
        regimen: this.registroFrom.value.regimen,
        profesion: this.registroFrom.value.profesion,
        areavoluntaria: this.registroFrom.value.areavoluntaria,
        pasaporte: this.registroFrom.value.pasaporte,
        rh: this.registroFrom.value.rh,
        puntuación: this.registroFrom.value.puntuación,
        tenerencuenta: this.registroFrom.value.tenerencuenta,
        descripcion: this.registroFrom.value.descripcion,
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

  } */

/*  editarNoticia(id: string){

    const valores: any = {
      titulo: this.registroFrom.value.titulo,
      imagen: this.registroFrom.value.imagen,
      descripcion: this.registroFrom.value.descripcion,
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
        this.registroFrom.setValue({
          titulo: data.payload.data()['titulo'],
          imagen: data.payload.data()['imagen'],
          descripcion: data.payload.data()['descripcion'],
        })
      })
    }
  } */


}
