import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/pass';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-count',
  templateUrl: './pass-count.component.html',
  styleUrls: ['./pass-count.component.scss']
})
export class PassCountComponent implements OnInit {
@Input() getCount !: number;
@Input() getCheckedIn !: any;
getpassengerArr !: Array<Ipassenger>
  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
    this.getpassengerArr = this._passengerService.getAllPassenger();
    this.getCheckedIn = this.getpassengerArr.filter(pass => pass.checkedIn===true).length
  }

}
