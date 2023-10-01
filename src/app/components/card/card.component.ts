import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover:string = '';

  // card-label component
  @Input()
  label:string = '';

  // card-princing component
  @Input()
  title:string= '';
  
  @Input()
  gameType:string = '';
  
  @Input()
  price:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
