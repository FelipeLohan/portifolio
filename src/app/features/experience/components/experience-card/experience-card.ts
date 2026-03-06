import { Component, input } from '@angular/core';
import { Experience } from '../../../../core/models/experience.model';
import { Badge } from '../../../../shared/components/badge/badge';

const TECH_ICONS: Record<string, string> = {
  'Java':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'Spring':       'https://cdn.simpleicons.org/spring/6DB33F',
  'Spring Boot':  'https://cdn.simpleicons.org/springboot/6DB33F',
  'Node.js':      'https://cdn.simpleicons.org/nodedotjs/339933',
  'NestJS':       'https://cdn.simpleicons.org/nestjs/E0234E',
  'Express':      'https://cdn.simpleicons.org/express/64748B',
  'TypeScript':   'https://cdn.simpleicons.org/typescript/3178C6',
  'Angular':      'https://cdn.simpleicons.org/angular/DD0031',
  'React':        'https://cdn.simpleicons.org/react/06B6D4',
  'Next.js':      'https://cdn.simpleicons.org/nextdotjs/0F172A',
  'PostgreSQL':   'https://cdn.simpleicons.org/postgresql/4169E1',
  'MySQL':        'https://cdn.simpleicons.org/mysql/4479A1',
  'MongoDB':      'https://cdn.simpleicons.org/mongodb/47A248',
  'Redis':        'https://cdn.simpleicons.org/redis/DC382D',
  'Docker':       'https://cdn.simpleicons.org/docker/2496ED',
  'AWS':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Azure':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  'Kafka':        'https://cdn.simpleicons.org/apachekafka/374151',
  'RabbitMQ':     'https://cdn.simpleicons.org/rabbitmq/FF6600',
  'Git':          'https://cdn.simpleicons.org/git/F05032',
  'Supabase':     'https://cdn.simpleicons.org/supabase/3ECF8E',
};

@Component({
  selector: 'app-experience-card',
  imports: [Badge],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css'
})
export class ExperienceCard {
  experience = input.required<Experience>();

  iconUrl(tag: string): string | undefined {
    return TECH_ICONS[tag];
  }
}
