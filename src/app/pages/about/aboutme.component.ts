import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
  animations: [trigger('fade', [transition('void => *', [style({ opacity: 0 }), animate('2000ms', style({ opacity: 1 }))])])],
})
export class AboutmeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
