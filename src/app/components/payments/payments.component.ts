import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';



declare var paypal; 

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
  
})
export class PaymentsComponent implements OnInit {

  valor;

 @ViewChild('paypal', {static: true}) paypalElement: ElementRef;

 producto ={
    descripcion: 'Donación para la Fundación Meta Visible',
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
 
    paypal
    .Buttons({
      createOrder: (data, actions) =>{
        return actions.order.create({
          purchase_units:[{
            discripcion: this.producto.descripcion,
              amount:{
                currency_code: 'USD',
                value: this.valor
              }
          }]
        })
      },
          onApprove: async (data, actions) =>{
            const order = await actions.order.capture();
            console.log(order);
            Swal.fire(
              'La donacion a sido exitosa !!',
              '',
              'success'
            )
            this.router.navigate(['/home']); 
          },
            onError: err =>{
              console.log('Este es el error ->',err);
            }

    }).render(this.paypalElement.nativeElement);
  
  }

  nofunciona = false;

  fueraDeSerrvicio(){
    this.nofunciona = true;
  }

}
