import { Component, OnInit, Input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

@Input() foto:string;
@Input() nombre:string;
@Input() title:string;
@Input() id:string;




  constructor(private shared:SharedModule) { }

  ngOnInit() {
   
  }

}
