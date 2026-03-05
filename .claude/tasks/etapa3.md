# ETAPA 3 — Seção Hero e Navbar

> **Pré-requisito:** Etapa 2 concluída e projeto compilando sem erros.
> **Regra:** Só execute esta etapa após a Etapa 2 estar concluída.

Implemente a seção de apresentação principal e a navegação.

## Tarefas

### Navbar (`layout/navbar`)

- Links de navegação âncora: Sobre, Experiência, Projetos, Tecnologias
- Comportamento sticky com scroll
- Smooth scroll para as seções
- Design limpo, com nome/logo à esquerda e links à direita
- Mobile-responsive (hamburger menu ou simplificado)

### Hero (`features/hero`)

- Nome completo: Felipe Lohan
- Subtítulo: Desenvolvedor Full-Stack | Java · Node.js · Angular
- Frase de impacto curta baseada na bio (ex: "Criando soluções escaláveis com paixão por arquitetura de software")
- Badges de prêmios (🥇 Bradesco Hackathon · 🥇 HackerCidadão 2025 · 🥈 LuminaThon)
- Botão CTA: "Ver Projetos" e "Contato"
- Layout visualmente marcante — use gradiente ou fundo escuro profissional
- Animação de entrada suave (CSS animations ou Angular animations)

### Paleta de cores (definir no `styles.scss` global)

```scss
:root {
  --color-primary: #0f172a;      // fundo escuro
  --color-accent: #3b82f6;       // azul vibrante
  --color-accent-alt: #06b6d4;   // ciano
  --color-text: #f1f5f9;
  --color-muted: #94a3b8;
  --color-surface: #1e293b;
}
```
