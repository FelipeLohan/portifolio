# ETAPA 2 — Dados e serviço de conteúdo

> **Pré-requisito:** Etapa 1 concluída e projeto compilando sem erros.
> **Regra:** Só execute esta etapa após a Etapa 1 estar concluída.

Crie um serviço central com os dados reais do Felipe. Nenhum componente deve ter dados hard-coded.

## Tarefas

1. Crie `src/app/core/services/portfolio-data.service.ts`

2. Popule com os dados reais abaixo:

### Experiências

- **Analista de Sistemas Estagiário** — Bradesco · Estágio · dez/2025–atual · Recife, Híbrido · Angular, Java e mais 5 competências
- **Desenvolvedor Full-Stack JR** — Hundert AI · Autônomo · jul/2025–set/2025 · Remoto · NestJS no backend, NextJS no frontend, modelagem de dados, decisões técnicas, React no frontend
- **Desenvolvedor Full-Stack JR** — Horizon · Tempo integral · mai/2025–jul/2025 · Recife, Remoto · Sistema CRM do zero, NestJS com microsserviços, arquitetura cloud, Redis
- **Desenvolvedor Back-End Estagiário** — Compass UOL · Estágio · abr/2025–jul/2025 · Remoto · Trilha Node.js, Express, NestJS, Docker, Kafka, RabbitMQ, MongoDB

### Projetos em destaque (crie pelo menos 4)

- Projeto de hackathon vencedor (Bradesco Hackathon 🥇)
- Projeto HackerCidadão 2025 🥇 (Prefeitura do Recife / Emprel)
- Projeto LuminaThon 🥈
- CRM com microsserviços (Horizon)

### Tecnologias (agrupadas por categoria)

- **Back-end:** Java, Spring, Node.js, NestJS, Express, TypeScript
- **Front-end:** Angular, React, Next.js
- **Banco de Dados:** PostgreSQL, MySQL, Supabase, MongoDB
- **DevOps/Cloud:** AWS, Azure, Docker, Dynatrace, Datadog, Kafka, RabbitMQ
- **Arquiteturas:** Hexagonal, MVC, Clean Architecture, SPA, MicroFrontends

3. O serviço deve expor os métodos: `getExperiences()`, `getProjects()`, `getTechs()`, `getAbout()`

4. O `getAbout()` deve retornar um objeto com:
   - Nome: Felipe Lohan
   - Pronomes: ele/dele
   - Localização: Recife, Pernambuco, Brasil
   - Título: Desenvolvedor Full-Stack | Focado em Java e Node.js
   - Bio completa (usar a descrição do LinkedIn fornecida)
   - Prêmios: lista com os 4 prêmios/participações
