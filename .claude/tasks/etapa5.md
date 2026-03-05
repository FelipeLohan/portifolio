# ETAPA 5 — Seção Experiência

> **Pré-requisito:** Etapa 4 concluída e projeto compilando sem erros.
> **Regra:** Só execute esta etapa após a Etapa 4 estar concluída.

## Tarefas

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
