import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/pass';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passengerArray :Array<Ipassenger>  = [
    {
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  },
  {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
  }];

  
  constructor() { }


  getAllPassenger(){
    return this.passengerArray
  }

  updatePass(id : number,fullName : string){
   this.passengerArray.forEach(pass =>{
    if(pass.id === id){
      pass.fullname = fullName
    }
   })
  }

  removePass(id : number){
    let getIndex = this.passengerArray.findIndex(pass =>pass.id === id);
   this.passengerArray.splice(getIndex,1) 
  }
}
