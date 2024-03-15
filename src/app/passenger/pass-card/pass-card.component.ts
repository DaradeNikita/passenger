import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/pass';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
@Input() getPass !: Ipassenger;
isInEditMode : boolean = false;
@Output() emitPassId : EventEmitter<number>= new EventEmitter<number>()
  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
  }
  onUpdate(fullName:string){
 this._passengerService.updatePass(this.getPass.id,fullName)
  }
  onPassDelete(id : number){
  this._passengerService.removePass(id);
  this.emitPassId.emit(id);

  }
}
