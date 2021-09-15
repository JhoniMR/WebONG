import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firestore: AngularFirestore,  public afAuth: AngularFireAuth,
              private router: Router) { }

  /* CRUD - NOTICIAS EN FIREBASE */            
  agregarNoticias(valores: any, path: string): Promise<any>{
  return this.firestore.collection(path).add(valores);
  }

  /* CRUD - MOSTRAR LAS NOTICIAS DESDE FIREBASE*/   
  getNoticias( path: string): Observable<any>{
    return this.firestore.collection(path, ref =>ref.orderBy('fechacreacion', 'desc').limit(15)).snapshotChanges();
  }

  /*ELIMINAR EMPLEADO*/
  eliminarNoticia(id: string, path: string): Promise<any>{
    return this.firestore.collection(path).doc(id).delete();
  }

  getNoticia(id: string, path: string): Observable<any>{
    return this.firestore.collection(path).doc(id).snapshotChanges();
  }

  actualizarNoticia(path: string, id: string, data: any): Promise<any>{
    return this.firestore.collection(path).doc(id).update(data);
  }

 


  /* LOGIN */      
  async login(correo: string, contrasena: string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(correo,contrasena);
      result;
    }catch(error){
      console.log('Este es el error de LOGIN: ', error);
    }
  }

 /* REGISTRAME */    
  async register (correo: string, contrasena: string ){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(correo, contrasena);
      return; 
    } catch (error) {
      console.log('Este es el error de REGISTER: ', error);
    } 
  }

  /* SALIRME DEL LOGIN */  
  async logout() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log('Este es el error de LOGOUT: ', error);
    }
  }

} 
