import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/data/auth.service';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  informacion: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getMostrar();
  }

  getMostrar(){
    this.authService.getNoticias().subscribe(data =>{
      this.informacion = [];
        data.forEach((element:any) =>{
          this.informacion.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.informacion);
    });
  }

}
