import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { Tech } from '../models/tech.model';

export interface About {
  name: string;
  pronouns: string;
  location: string;
  title: string;
  bio: string;
  awards: Award[];
}

export interface Award {
  title: string;
  event: string;
  year: number;
  medal: string;
  image: string;
  description: string;
  imagePosition?: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  getAbout(): About {
    return {
      name: 'Felipe Lohan',
      pronouns: 'ele/dele',
      location: 'Recife, Pernambuco, Brasil',
      title: 'Desenvolvedor Full-Stack | Focado em Java e Node.js',
      bio: `Desenvolvedor Full-Stack apaixonado por construir soluções escaláveis e bem arquitetadas.
Com experiência sólida em Java, Spring, Node.js e NestJS no back-end, e Angular, React e Next.js no front-end,
atuo com foco em qualidade de código, microsserviços e arquiteturas modernas.
Atualmente Analista de Sistemas Estagiário no Bradesco, onde trabalho com Angular e Java em ambiente híbrido.
Vencedor de hackathons como o Bradesco Hackathon e o HackerCidadão 2025, com experiências em projetos reais
de CRM, integrações cloud e sistemas distribuídos. Acredito que boas decisões técnicas fazem a diferença
no produto final — e é isso que me motiva todos os dias.`,
      awards: [
        {
          title: '1º Lugar',
          event: 'Bradesco Hackathon',
          year: 2025,
          medal: '🥇',
          image: 'BradescoHackathon.jpg',
          imagePosition: 'top',
          description:
            'Vencedores do Bradesco Hackathon 2025 com o FinTrack — plataforma de educação financeira com análise de gastos por IA, metas personalizadas e dashboards interativos para clientes do banco.',
        },
        {
          title: '1º Lugar',
          event: 'HackerCidadão 2025 — Prefeitura do Recife',
          year: 2025,
          medal: '🥇',
          image: 'HackerCidadão.jpg',
          imagePosition: 'top',
          description:
            'Vencedores do HackerCidadão 2025 com o CidadeConecta — plataforma que conecta cidadãos à Prefeitura do Recife com geolocalização e acompanhamento de demandas urbanas em tempo real.',
        },
        {
          title: '2º Lugar',
          event: 'LuminaThon',
          year: 2025,
          medal: '🥈',
          image: 'Luminathon.jpg',
          description:
            '2º lugar no LuminaThon com o LuminaBoard — ferramenta colaborativa de gestão de projetos com quadros Kanban em tempo real, integração com APIs externas e notificações via WebSocket.',
        },
        {
          title: 'Participação',
          event: 'HackaHealth',
          year: 2025,
          medal: '🏅',
          image: 'HackaHealth.jpg',
          imagePosition: 'top',
          description:
            'Participação no HackaHealth, hackathon voltado à inovação em saúde, desenvolvendo solução de impacto social com foco em acessibilidade e tecnologia aplicada ao bem-estar.',
        },
        {
          title: 'Participação',
          event: 'NASA Space Apps Challenge',
          year: 2025,
          medal: '🚀',
          image: 'Nasa%20Hackathon.jpg',
          description:
            'Participação no NASA Space Apps Challenge, maior hackathon do mundo, com solução voltada à exploração espacial e visualização de dados abertos da NASA.',
        },
      ],
    };
  }

  getExperiences(): Experience[] {
    return [
      {
        id: '1',
        company: 'Bradesco',
        logo: 'bradesco_logo.jpg',
        role: 'Analista de Sistemas Estagiário',
        period: 'dez/2025 – atual',
        description:
          'Atuação como Analista de Sistemas Estagiário, desenvolvendo soluções com Angular no front-end e Java no back-end em ambiente híbrido. Participação em projetos internos do banco com foco em qualidade e escalabilidade.',
        tags: ['Angular', 'Java', 'Spring', 'TypeScript', 'Git'],
        current: true,
        location: 'Recife, PE',
        type: 'Estágio · Híbrido',
      },
      {
        id: '2',
        company: 'Hundert AI',
        logo: 'hundert_logo.jpg',
        role: 'Desenvolvedor Full-Stack JR',
        period: 'jul/2025 – set/2025',
        description:
          'Desenvolvimento full-stack autônomo com NestJS no back-end e Next.js/React no front-end. Responsável pela modelagem de dados e tomada de decisões técnicas da aplicação.',
        tags: ['NestJS', 'Next.js', 'React', 'TypeScript', 'PostgreSQL'],
        current: false,
        location: 'Remoto',
        type: 'Autônomo · Remoto',
      },
      {
        id: '3',
        company: 'Horizon',
        logo: 'agency_horizon_logo.jpg',
        role: 'Desenvolvedor Full-Stack JR',
        period: 'mai/2025 – jul/2025',
        description:
          'Construção de sistema CRM do zero com NestJS em arquitetura de microsserviços. Uso de Redis para cache, arquitetura cloud e decisões técnicas sobre infraestrutura e comunicação entre serviços.',
        tags: ['NestJS', 'Redis', 'Docker', 'AWS'],
        current: false,
        location: 'Recife, PE',
        type: 'Tempo integral · Remoto',
      },
      {
        id: '4',
        company: 'Compass UOL',
        logo: 'compass_uol_logo.jpg',
        role: 'Desenvolvedor Back-End Estagiário',
        period: 'abr/2025 – jul/2025',
        description:
          'Trilha intensiva de back-end com Node.js, Express e NestJS. Uso de Docker para containerização, mensageria com Kafka e RabbitMQ, e banco de dados NoSQL com MongoDB.',
        tags: ['Node.js', 'Express', 'NestJS', 'Docker', 'Kafka', 'RabbitMQ', 'MongoDB'],
        current: false,
        location: 'Remoto',
        type: 'Estágio · Remoto',
      },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: '1',
        title: 'FinTrack — Bradesco Hackathon',
        description:
          'Solução vencedora do Bradesco Hackathon 2025. Plataforma de educação financeira com análise de gastos por IA, metas personalizadas e dashboards interativos para clientes do banco.',
        techs: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'AWS'],
        highlight: true,
      },
      {
        id: '2',
        title: 'CidadeConecta — HackerCidadão 2025',
        description:
          'Plataforma vencedora do HackerCidadão 2025 (Prefeitura do Recife / Emprel). Sistema de gestão de demandas urbanas que conecta cidadãos à prefeitura com geolocalização e acompanhamento em tempo real.',
        techs: ['Next.js', 'NestJS', 'PostgreSQL', 'Supabase', 'Docker'],
        highlight: true,
        githubUrl: 'https://github.com/felipelohan',
      },
      {
        id: '3',
        title: 'LuminaBoard — LuminaThon',
        description:
          '2º lugar no LuminaThon. Ferramenta colaborativa de gestão de projetos com quadros Kanban em tempo real, integração com APIs externas e sistema de notificações via WebSocket.',
        techs: ['React', 'NestJS', 'MongoDB', 'Redis', 'Socket.io'],
        highlight: true,
        githubUrl: 'https://github.com/felipelohan',
      },
      {
        id: '4',
        title: 'CRM Microsserviços — Horizon',
        description:
          'Sistema CRM empresarial construído do zero com arquitetura de microsserviços. Módulos independentes para clientes, vendas e relatórios, comunicando via mensageria assíncrona.',
        techs: ['NestJS', 'Redis', 'Docker', 'AWS', 'PostgreSQL', 'RabbitMQ'],
        highlight: false,
      },
    ];
  }

  getTechs(): Tech[] {
    return [
      // Back-end
      {
        name: 'Java',
        category: 'backend',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
      },
      { name: 'Spring', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/spring/6DB33F' },
      {
        name: 'Node.js',
        category: 'backend',
        iconUrl: 'https://cdn.simpleicons.org/nodedotjs/339933',
      },
      { name: 'NestJS', category: 'backend', iconUrl: 'https://cdn.simpleicons.org/nestjs/E0234E' },
      {
        name: 'Express',
        category: 'backend',
        iconUrl: 'https://cdn.simpleicons.org/express/64748B',
      },
      {
        name: 'TypeScript',
        category: 'backend',
        iconUrl: 'https://cdn.simpleicons.org/typescript/3178C6',
      },
      // Front-end
      {
        name: 'Angular',
        category: 'frontend',
        iconUrl: 'https://cdn.simpleicons.org/angular/DD0031',
      },
      { name: 'React', category: 'frontend', iconUrl: 'https://cdn.simpleicons.org/react/06B6D4' },
      {
        name: 'Next.js',
        category: 'frontend',
        iconUrl: 'https://cdn.simpleicons.org/nextdotjs/0F172A',
      },
      // Banco de Dados
      {
        name: 'PostgreSQL',
        category: 'database',
        iconUrl: 'https://cdn.simpleicons.org/postgresql/4169E1',
      },
      { name: 'MySQL', category: 'database', iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1' },
      {
        name: 'Supabase',
        category: 'database',
        iconUrl: 'https://cdn.simpleicons.org/supabase/3ECF8E',
      },
      {
        name: 'MongoDB',
        category: 'database',
        iconUrl: 'https://cdn.simpleicons.org/mongodb/47A248',
      },
      // DevOps / Cloud
      {
        name: 'AWS',
        category: 'devops',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      },
      {
        name: 'Azure',
        category: 'devops',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
      },
      { name: 'Docker', category: 'devops', iconUrl: 'https://cdn.simpleicons.org/docker/2496ED' },
      {
        name: 'Dynatrace',
        category: 'devops',
        iconUrl: 'https://cdn.simpleicons.org/dynatrace/1496FF',
      },
      {
        name: 'Datadog',
        category: 'devops',
        iconUrl: 'https://cdn.simpleicons.org/datadog/632CA6',
      },
      {
        name: 'Kafka',
        category: 'devops',
        iconUrl: 'https://cdn.simpleicons.org/apachekafka/374151',
      },
      {
        name: 'RabbitMQ',
        category: 'devops',
        iconUrl: 'https://cdn.simpleicons.org/rabbitmq/FF6600',
      },
    ];
  }
}
