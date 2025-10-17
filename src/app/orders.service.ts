import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class OrdersService {
  getOrders() {
    return [
      {
        OrderID: 1,
        OrderName: 'Veg-Food',
        OrderLocation: 'Bangolore',
      },
      {
        OrderID: 2,
        OrderName: 'Non-Veg-Food',
        OrderLocation: 'Hyderabad',
      },
    ];
  }


  getCustomersList(){
    return [
      {
        OrderID: 1,
        CustomerName : "Ram",
        CustomerFoodName : ["Daal","Rice"],
        CustomerAge  : 25,
        CustomerGender : 'Male',
        CusotmerLocation : 'Bangolore',
        Information   : "He is a software engineer from HSR Layout"
      },
      {
        OrderID: 2,
        CustomerName : "Sahithi",
        CustomerFoodName : ["CB","Non-veg-curry"],
        CustomerAge  : 24,
        CustomerGender : 'Female',
        CusotmerLocation : 'Hyderabad',
         Information   : "she is a HR from BTM"
      },
    ];
  }



}