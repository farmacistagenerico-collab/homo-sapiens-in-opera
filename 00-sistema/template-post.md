---
title: "{{title}}"
date: {{date}}
capacita: ""           # UNA SOLA: empatia | giudizio | creativita | saggezza | resilienza | pensiero-critico | comunicazione | conoscenza-se | biografie | romanzi | scienza
libri: []              # Array, anche vuoto. Nomi esatti da tassonomia.md
rubrica: ""            # UNA: specchio | bussola | acciaio | lettera | bilancio | libro-mese
numero: ""             # Auto: specchio-001, bussola-001, ecc.
tags: []
---

# {{title}}

> **Capacità**: `{{capacita}}`  |  **Rubrica**: `{{rubrica}}`  |  **Libri**: {{#if libri.length}}`{{join libri ", "`}}`{{else}}—{{/if}}

---

## Contesto (1 riga)
*Perché questo post, ora.*

---

## Contenuto

*Scrivi qui. Breve. Vero. Utile.*

---

## Cosa Porto Via (3 punti max)
- 
- 
- 

---

## Prossimo Passo Concreto
*Una cosa che farò diversamente domani.*

---

## Collegamenti
{{#if libri.length}}
**Libri citati**: {{#each libri}}[[{{this}}]]{{/each}}
{{/if}}
**Post correlati**: