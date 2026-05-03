import { Component } from '@angular/core';

interface TechDomain {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  domains: TechDomain[] = [
    {
      category: 'Frontend',
      items: ['Angular', 'React', 'TypeScript', 'HTML5 / CSS3'],
    },
    {
      category: 'Backend & Services',
      items: ['Node.js', 'Java', 'C#', 'Microservices / ECS', 'Apache Kafka', 'NoSQL', 'SQL'],
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['AWS', 'ECS', 'Cloudflare CDN', 'Cloudflare WAF'],
    },
    {
      category: 'AI Engineering',
      items: ['MCP Servers', 'Cloudflare Agents SDK', 'Claude Code', 'Opencode', 'GitHub Copilot'],
    },
  ];
}
