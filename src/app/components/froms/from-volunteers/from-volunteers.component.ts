import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/data/auth.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-from-volunteers',
  templateUrl: './from-volunteers.component.html',
  styleUrls: ['./from-volunteers.component.css']
})
export class FromVolunteersComponent implements OnInit {

  public user$: Observable<any> = this.authService.afAuth.user;

  private  path ='voluntarios';
  registroFrom: FormGroup;
  id: string | null;

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
        numerocelular: ['', Validators.required],
        poblacion: ['', Validators.required],
        eps: ['', Validators.required],
        regimen: ['', Validators.required],
        profesion: ['', Validators.required],
        areavoluntaria: ['', Validators.required],
        pasaporte: ['', Validators.required],
        rh: ['', Validators.required],
        estado: [''],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id'); 
    }

    
  ngOnInit(): void {
    this.esEdit();
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

  if(this.id === null){
    this.agregarNoticiaq();
  }else{
    this.editarNoticiaq(this.id);
  }
}

  agregarNoticiaq(){

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
    numerocelular: this.registroFrom.value.numerocelular,
    poblacion: this.registroFrom.value.poblacion,
    eps: this.registroFrom.value.eps,
    regimen: this.registroFrom.value.regimen,
    profesion: this.registroFrom.value.profesion,
    areavoluntaria: this.registroFrom.value.areavoluntaria,
    pasaporte: this.registroFrom.value.pasaporte,
    rh: this.registroFrom.value.rh,
    estado: this.registroFrom.value.estado,
    fechaCreacion: new Date().getTime(),
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
   
  }  


  editarNoticiaq(id: string){

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
      numerocelular: this.registroFrom.value.numerocelular,
      poblacion: this.registroFrom.value.poblacion,
      eps: this.registroFrom.value.eps,
      regimen: this.registroFrom.value.regimen,
      profesion: this.registroFrom.value.profesion,
      areavoluntaria: this.registroFrom.value.areavoluntaria,
      pasaporte: this.registroFrom.value.pasaporte,
      rh: this.registroFrom.value.rh,
      estado: this.registroFrom.value.estado,
    }

    this.loading = true;
    this.authService.actualizarNoticia(this.path, id, valuesFormVoluntarios ).then(()=>{
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
          nombres: data.payload.data()['nombres'],
          apellidos: data.payload.data()['apellidos'],
          correo: data.payload.data()['correo'],
          tipodocumento: data.payload.data()['tipodocumento'],
          numerodocumento: data.payload.data()['numerodocumento'],
          lugardeexpedicion:  data.payload.data()['lugardeexpedicion'],
          lugarnacimiento:  data.payload.data()['lugarnacimiento'],
          fechanacimiento: data.payload.data()['fechanacimiento'],
          sexo: data.payload.data()['sexo'],
          direccion: data.payload.data()['direccion'],
          departamento: data.payload.data()['departamento'],
          ciudad: data.payload.data()['ciudad'],
          numerocelular: data.payload.data()['numerocelular'],
          poblacion: data.payload.data()['poblacion'],
          eps: data.payload.data()['eps'],
          regimen: data.payload.data()['regimen'],
          profesion: data.payload.data()['profesion'],
          areavoluntaria: data.payload.data()['areavoluntaria'],
          pasaporte: data.payload.data()['pasaporte'],
          rh: data.payload.data()['rh'],
          estado: data.payload.data()['estado'],
          
        });
      });

    }
  }


  


}
