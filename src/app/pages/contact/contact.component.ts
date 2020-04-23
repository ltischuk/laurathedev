import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [trigger('fade', [transition('void => *', [style({ opacity: 0 }), animate('2000ms 500ms', style({ opacity: 1 }))])])],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
