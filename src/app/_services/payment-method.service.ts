import { Injectable } from '@angular/core';
import { PaymentType } from '../models/payment.type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
paymentMethods:PaymentType[]=[
  {id:1,name:'Direct Bank '},
  {id:2,name:'Cheque Payment'},
  {id:3,name:'Paypal'},
  {id:4,name:'Visa'},
  {id:5,name:'Mastercard'},
  {id:6,name:'On Dilivery'}
]
  constructor() { }
  getAllPayment():PaymentType[]{
    return this.paymentMethods.splice(0);
  }
}
