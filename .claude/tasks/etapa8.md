# ETAPA 8 — Footer, responsividade e polish final

> **Pré-requisito:** Etapa 7 concluída e projeto compilando sem erros.
> **Regra:** Só execute esta etapa após a Etapa 7 estar concluída.

## Tarefas

### Footer (`layout/footer`)

- Nome e tagline
- Links sociais: LinkedIn, GitHub
- Texto: "Feito com Angular · Felipe Lohan · 2025"

### Responsividade

- Revise todos os componentes para mobile (320px+), tablet (768px+) e desktop (1280px+)
- Garanta que a navbar funciona em mobile
- Garanta que grids colapsam corretamente

### Polish final

- Smooth scroll global no `styles.scss`: `html { scroll-behavior: smooth; }`
- Animações de entrada por seção (IntersectionObserver ou Angular animations) — fade-in ao rolar
- Garanta que não há erros no console
- Rode `ng build` e confirme que o build de produção está limpo

## Checklist final

- [ ] Projeto compila sem erros (`ng serve` e `ng build`)
- [ ] Todos os dados vêm do `PortfolioDataService` (sem hard-code nos templates)
- [ ] Componentes são pequenos e com responsabilidade única
- [ ] Nenhum componente tem mais de ~150 linhas
- [ ] SCSS usa variáveis CSS globais definidas no `styles.scss`
- [ ] Layout é responsivo em mobile, tablet e desktop
- [ ] Smooth scroll e animações de entrada funcionando
- [ ] Footer com links sociais
- [ ] Prêmios e conquistas visíveis na seção Hero e/ou Sobre
