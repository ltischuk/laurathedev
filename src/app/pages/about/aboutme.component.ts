import { Component } from '@angular/core';

interface TechItem {
  name: string;
  src: string;
  alt: string;
}

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  tech: TechItem[] = [
    { name: 'Angular', src: '/assets/angular.svg', alt: 'Angular' },
    { name: 'React', src: '/assets/react.svg', alt: 'React' },
    { name: 'Node.js', src: '/assets/nodejs.svg', alt: 'Node.js' },
    { name: 'HTML5', src: '/assets/html5.png', alt: 'HTML5' },
    { name: 'C#', src: '/assets/csharp.png', alt: 'C#' },
    { name: 'Java', src: '/assets/java.png', alt: 'Java' },
    { name: 'PHP', src: '/assets/php.svg', alt: 'PHP' },
  ];
}
