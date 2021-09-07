import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firestore: AngularFirestore) { }

  agregarNoticias(valores: any): Promise<any>{
  return this.firestore.collection('noticias').add(valores);
  }
} 
