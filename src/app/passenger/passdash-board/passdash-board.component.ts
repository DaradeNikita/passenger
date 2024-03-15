import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/pass';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-passdash-board',
  templateUrl: './passdash-board.component.html',
  styleUrls: ['./passdash-board.component.scss']
})
export class PassdashBoardComponent implements OnInit {
passArray! : Array<Ipassenger>
checkedIn: any;
  checkdArray: any;
  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
 this.passArray =  this._passengerService.getAllPassenger()
  }
  getCheckedCount(){
    let checked= this.passArray.filter(pass => pass.checkedIn).length;
 }  
    onRemove(pass :any){
     this._passengerService.removePass(pass);
}
   onpass(){
  this.checkdArray = this.passArray.filter((pass:Ipassenger)=>{
    return pass.checkedIn
  })
  this.checkedIn = this.checkdArray.length
  }
}


