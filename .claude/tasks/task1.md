# 🗂️ Portfolio - Felipe Lohan | Plano de Execução em Etapas

> **Projeto:** Portfolio pessoal em Angular 21
> **Objetivo:** Landing page profissional, componentizada, com seções: Sobre Mim, Experiências, Projetos e Tecnologias.
> **Regra geral:** Siga padrões Clean Code, componentize ao máximo, use os módulos e estrutura do Angular já instalado no projeto. Não instale dependências desnecessárias.

---

## ✅ ETAPA 1 — Estrutura base e arquitetura de componentes

**Faça apenas o que está nesta etapa. Não avance para a próxima.**

Analise o projeto Angular atual e crie a estrutura de pastas e componentes vazios (sem lógica ainda). O objetivo é montar o esqueleto limpo da aplicação.

### Tarefas:
1. Analise a estrutura atual do projeto Angular e entenda o que já existe.
2. Crie a seguinte estrutura de componentes dentro de `src/app`:

```
src/app/
├── core/
│   └── models/
│       ├── experience.model.ts
│       ├── project.model.ts
│       └── tech.model.ts
├── shared/
│   └── components/
│       ├── section-title/        ← título reutilizável de seção
│       └── badge/                ← badge reutilizável de tecnologia
├── features/
│   ├── hero/                     ← seção inicial / apresentação
│   ├── about/                    ← sobre mim
│   ├── experience/               ← onde trabalhou/trabalha
│   ├── projects/                 ← projetos em destaque
│   └── tech-stack/               ← tecnologias do dia a dia
└── layout/
    ├── navbar/
    └── footer/
```

3. Crie os componentes com `ng generate component` ou manualmente com arquivos `.ts`, `.html`, `.scss` vazios.
4. Defina as interfaces/models:
   - `Experience`: id, company, role, period, description, tags, current (boolean)
   - `Project`: id, title, description, techs, githubUrl?, liveUrl?, highlight (boolean)
   - `Tech`: name, category (backend | frontend | database | devops | architecture), iconUrl?

5. No `app.component.html`, monte o layout base:
```html
<app-navbar></app-navbar>
<main>
  <app-hero></app-hero>
  <app-about></app-about>
  <app-experience></app-experience>
  <app-projects></app-projects>
  <app-tech-stack></app-tech-stack>
</main>
<app-footer></app-footer>
```

6. Confirme que o projeto compila sem erros com `ng serve`.

---

## ✅ ETAPA 2 — Dados e serviço de conteúdo

**Só execute esta etapa após a Etapa 1 estar concluída.**

Crie um serviço central com os dados reais do Felipe. Nenhum componente deve ter dados hard-coded.

### Tarefas:
1. Crie `src/app/core/services/portfolio-data.service.ts`
2. Popule com os dados reais abaixo:

**Experiências:**
- **Analista de Sistemas Estagiário** — Bradesco · Estágio · dez/2025–atual · Recife, Híbrido · Angular, Java e mais 5 competências
- **Desenvolvedor Full-Stack JR** — Hundert AI · Autônomo · jul/2025–set/2025 · Remoto · NestJS no backend, NextJS no frontend, modelagem de dados, decisões técnicas, React no frontend
- **Desenvolvedor Full-Stack JR** — Horizon · Tempo integral · mai/2025–jul/2025 · Recife, Remoto · Sistema CRM do zero, NestJS com microsserviços, arquitetura cloud, Redis
- **Desenvolvedor Back-End Estagiário** — Compass UOL · Estágio · abr/2025–jul/2025 · Remoto · Trilha Node.js, Express, NestJS, Docker, Kafka, RabbitMQ, MongoDB

**Projetos em destaque** (crie pelo menos 4 projetos fictícios plausíveis baseados na stack):
- Projeto de hackathon vencedor (Bradesco Hackathon 🥇)
- Projeto HackerCidadão 2025 🥇 (Prefeitura do Recife / Emprel)
- Projeto LuminaThon 🥈
- CRM com microsserviços (Horizon)

**Tecnologias (agrupadas por categoria):**
- **Back-end:** Java, Spring, Node.js, NestJS, Express, TypeScript
- **Front-end:** Angular, React, Next.js
- **Banco de Dados:** PostgreSQL, MySQL, Supabase, MongoDB
- **DevOps/Cloud:** AWS, Azure, Docker, Dynatrace, Datadog, Kafka, RabbitMQ
- **Arquiteturas:** Hexagonal, MVC, Clean Architecture, SPA, MicroFrontends

3. O serviço deve expor métodos: `getExperiences()`, `getProjects()`, `getTechs()`, `getAbout()`
4. O `getAbout()` deve retornar um objeto com os dados pessoais:
   - Nome: Felipe Lohan
   - Pronomes: ele/dele
   - Localização: Recife, Pernambuco, Brasil
   - Título: Desenvolvedor Full-Stack | Focado em Java e Node.js
   - Bio completa (usar a descrição do LinkedIn fornecida)
   - Prêmios: lista com os 4 prêmios/participações

---

## ✅ ETAPA 3 — Seção Hero e Navbar

**Só execute esta etapa após a Etapa 2 estar concluída.**

Implemente a seção de apresentação principal e a navegação.

### Tarefas:

**Navbar (`layout/navbar`):**
- Links de navegação âncora: Sobre, Experiência, Projetos, Tecnologias
- Comportamento sticky com scroll
- Smooth scroll para as seções
- Design limpo, com nome/logo à esquerda e links à direita
- Mobile-responsive (hamburger menu ou simplificado)

**Hero (`features/hero`):**
- Nome completo: Felipe Lohan
- Subtítulo: Desenvolvedor Full-Stack | Java · Node.js · Angular
- Frase de impacto curta baseada na bio (ex: "Criando soluções escaláveis com paixão por arquitetura de software")
- Badges de prêmios (🥇 Bradesco Hackathon · 🥇 HackerCidadão 2025 · 🥈 LuminaThon)
- Botão CTA: "Ver Projetos" e "Contato"
- Layout visualmente marcante — use gradiente ou fundo escuro profissional
- Animação de entrada suave (CSS animations ou Angular animations)

**Paleta de cores sugerida:**
```scss
// Defina no styles.scss global
:root {
  --color-primary: #0f172a;      // fundo escuro
  --color-accent: #3b82f6;       // azul vibrante
  --color-accent-alt: #06b6d4;   // ciano
  --color-text: #f1f5f9;
  --color-muted: #94a3b8;
  --color-surface: #1e293b;
}
```

---

## ✅ ETAPA 4 — Seção Sobre Mim

**Só execute esta etapa após a Etapa 3 estar concluída.**

### Tarefas:
1. Implemente `features/about` usando dados do `PortfolioDataService`
2. Estrutura da seção:
   - Título da seção (use o componente `shared/section-title`)
   - Parágrafo de apresentação pessoal (bio)
   - Card de localização: Recife, Pernambuco 📍
   - Bloco de prêmios e conquistas (lista com ícones de troféu)
   - Bloco de foco atual: "Atualmente trabalhando na Bradesco como Analista de Sistemas Estagiário"
3. Design equilibrado, com dois blocos (texto à esquerda, destaques à direita) em desktop; empilhado no mobile

---

## ✅ ETAPA 5 — Seção Experiência

**Só execute esta etapa após a Etapa 4 estar concluída.**

### Tarefas:
1. Implemente `features/experience` usando dados do `PortfolioDataService`
2. Crie um componente filho `experience-card` dentro de `features/experience/components/`
3. Cada card deve exibir:
   - Logo/ícone da empresa (use inicial da empresa como fallback)
   - Cargo e empresa
   - Período e duração (ex: "dez/2025 – atual · 4 meses")
   - Localização e modalidade (remoto/híbrido)
   - Descrição resumida
   - Badges de tecnologias usadas
   - Badge especial se `current: true` (ex: "Atual")
4. Layout em linha do tempo vertical (timeline) — visual moderno com linha conectora
5. A experiência mais recente deve aparecer primeiro

---

## ✅ ETAPA 6 — Seção Projetos

**Só execute esta etapa após a Etapa 5 estar concluída.**

### Tarefas:
1. Implemente `features/projects` usando dados do `PortfolioDataService`
2. Crie um componente filho `project-card` dentro de `features/projects/components/`
3. Cada card deve exibir:
   - Título do projeto
   - Descrição
   - Lista de tecnologias usadas (badges)
   - Link para GitHub e/ou demo (se disponível)
   - Se `highlight: true`, exiba um badge especial (ex: "🏆 Destaque")
4. Layout em grid responsivo (3 colunas desktop, 2 tablet, 1 mobile)
5. Hover effect nos cards com leve elevação/brilho

---

## ✅ ETAPA 7 — Seção Tech Stack

**Só execute esta etapa após a Etapa 6 estar concluída.**

### Tarefas:
1. Implemente `features/tech-stack` usando dados do `PortfolioDataService`
2. Agrupe tecnologias por categoria:
   - 🔧 Back-end
   - 🎨 Front-end
   - 🗄️ Banco de Dados
   - ☁️ DevOps / Cloud
   - 🏗️ Arquiteturas
3. Use o componente `shared/badge` para cada tecnologia
4. Layout em grid de badges agrupados por categoria
5. Cada grupo deve ter um título de categoria visível
6. Visual denso mas organizado — mostre domínio da stack

---

## ✅ ETAPA 8 — Footer, responsividade e polish final

**Só execute esta etapa após a Etapa 7 estar concluída.**

### Tarefas:

**Footer (`layout/footer`):**
- Nome e tagline
- Links sociais: LinkedIn, GitHub
- Texto: "Feito com Angular · Felipe Lohan · 2025"

**Responsividade:**
- Revise todos os componentes para mobile (320px+), tablet (768px+) e desktop (1280px+)
- Garanta que a navbar funciona em mobile
- Garanta que grids colapsam corretamente

**Polish final:**
- Smooth scroll global no `styles.scss`: `html { scroll-behavior: smooth; }`
- Animações de entrada por seção (IntersectionObserver ou Angular animations) — fade-in ao rolar
- Garanta que não há erros no console
- Rode `ng build` e confirme que o build de produção está limpo

---

## 📋 Checklist final

- [ ] Projeto compila sem erros (`ng serve` e `ng build`)
- [ ] Todos os dados vêm do `PortfolioDataService` (sem hard-code nos templates)
- [ ] Componentes são pequenos e com responsabilidade única
- [ ] Nenhum componente tem mais de ~150 linhas
- [ ] SCSS usa variáveis CSS globais definidas no `styles.scss`
- [ ] Layout é responsivo em mobile, tablet e desktop
- [ ] Smooth scroll e animações de entrada funcionando
- [ ] Footer com links sociais
- [ ] Prêmios e conquistas visíveis na seção Hero e/ou Sobre

---

> 💡 **Lembre-se:** Execute uma etapa por vez. Confirme que compila antes de avançar. Não pule etapas.