import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var paypal;

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;

  producto ={
    descripcion: 'no lo se',
    precio: 19.99,
    img: 'img aqui'
  }

  constructor() { }

  ngOnInit(): void {

   /* paypal
    .Buttons({
      createOrder: (data, actions) =>{
        return actions.order.create({
          purchase_units:[{
            discripcion: this.producto.descripcion,
              amount:{
                currency_code: 'USD',
                value: this.producto.precio
              }
          }]
        })
      },
          onApprove: async (data, actions) =>{
            const order = await actions.order.capture();
            console.log(order);
          },
            onError: err =>{
              console.log(err);
            }

    }).render(this.paypalElement.nativeElement);*/

  }

}
