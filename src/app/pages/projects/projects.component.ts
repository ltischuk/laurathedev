import { Component } from '@angular/core';

interface Project {
  number: string;
  status: string;
  statusTheme: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      number: '01',
      status: 'Flagship Production',
      statusTheme: 'purple',
      title: '$2B eCommerce Platform',
      subtitle: 'Enterprise SaaS · Ticketing & Attractions',
      description:
        "Lead architect and engineering leader behind a high-performance, multi-tenant SaaS eCommerce system processing over $2 billion in annual transactions. Powers ticketing, admissions, and commerce for theme parks, museums, and global attractions worldwide — if you bought a ticket to an attraction, there's a good chance you used this system.",
      tech: ['JavaScript', 'Java', 'PHP', 'SaaS', 'Multi-tenant', 'High Availability'],
    },
    {
      number: '02',
      status: 'Active Build',
      statusTheme: 'green',
      title: 'Agentic Commerce',
      subtitle: 'OpenAI Agents SDK',
      description:
        'Building AI-powered commerce agents using the OpenAI Agents SDK that autonomously navigate product discovery, purchasing decisions, and customer interactions — enabling a new paradigm of intelligent, frictionless commerce that operates with minimal human intervention.',
      tech: ['OpenAI SDK', 'AI Agents', 'TypeScript', 'Node.js'],
    },
    {
      number: '03',
      status: 'Active Build',
      statusTheme: 'orange',
      title: 'Edge Agent Infrastructure',
      subtitle: 'Cloudflare Agents SDK',
      description:
        "Designing and deploying production AI agents on Cloudflare's global edge network using the Cloudflare Agents SDK. Purpose-built for low-latency, geo-distributed intelligent automation — running closer to users than traditional cloud infrastructure allows.",
      tech: ['Cloudflare SDK', 'Workers', 'Edge AI', 'Durable Objects'],
    },
    {
      number: '04',
      status: 'Pioneering',
      statusTheme: 'pink',
      title: 'Agentic Ticketing & Events',
      subtitle: 'Next Frontier · Commerce × AI',
      description:
        "Spearheading the convergence of ticketing and events with agentic AI — architecting systems where autonomous agents handle discovery, personalized recommendations, and seamless purchasing for millions of event-goers. Bringing the agentic commerce revolution to one of the world's most human-centric industries.",
      tech: ['AI Agents', 'Commerce', 'Ticketing', 'Events', 'LLMs'],
    },
  ];
}
