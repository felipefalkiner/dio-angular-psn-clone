import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

  @Input()
  title:string= 'Play It Now!';
  
  @Input()
  gameType:string = 'Full Game | PS4';
  
  @Input()
  price:string = 'R$ 299,90';
  
  constructor() { }

  ngOnInit(): void {
  }

}
