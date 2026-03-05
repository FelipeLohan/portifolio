# ETAPA 1 — Estrutura base e arquitetura de componentes

> **Pré-requisito:** Nenhum. Esta é a primeira etapa.
> **Regra:** Faça apenas o que está nesta etapa. Não avance para a próxima.

Analise o projeto Angular atual e crie a estrutura de pastas e componentes vazios (sem lógica ainda). O objetivo é montar o esqueleto limpo da aplicação.

## Tarefas

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
