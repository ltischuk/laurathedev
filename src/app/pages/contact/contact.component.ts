import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [trigger('flyIn', [state('in', style({ transform: 'translateX(0)' })), transition('void => *', [style({ transform: 'translateX(-100%)' }), animate('1000ms')])])],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
