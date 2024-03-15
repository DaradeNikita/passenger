import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassCardComponent } from './pass-card/pass-card.component';
import { PassCountComponent } from './pass-count/pass-count.component';
import { PassdashBoardComponent } from './passdash-board/passdash-board.component';



@NgModule({
  declarations: [
    PassCardComponent,
    PassCountComponent,
    PassdashBoardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PassdashBoardComponent
  ]
})
export class PassengerModule { }
