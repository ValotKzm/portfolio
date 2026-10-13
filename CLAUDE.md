# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Les consignes générales du projet (stack, principes de modification, vérification) sont dans `AGENTS.md` et s'appliquent telles quelles :

@AGENTS.md

## Commandes

```bash
pnpm dev          # serveur de développement Next.js
pnpm lint         # ESLint (config plate, eslint-config-next core-web-vitals + typescript)
pnpm build        # compilation de production (sert aussi de vérification de types)
pnpm start        # sert le build de production
pnpm db:generate  # génère une migration Drizzle à partir de lib/db/schema.ts
pnpm db:migrate   # applique les migrations  — modifie la base, demande explicite requise
pnpm db:push      # pousse le schéma sans migration — modifie la base, demande explicite requise
```

- Aucun framework de test n'est installé : pas de commande pour lancer un test, isolé ou non.
- `DATABASE_URL` (Neon) doit être défini dans `.env` (ignoré par Git). Il est lu par `lib/db/drizzle.ts` et `drizzle.config.ts`.

## Architecture

Site d'une seule page : `app/page.tsx` rend `components/homepage/HomePage.tsx`, et `app/layout.tsx` ajoute le `Footer` (qui porte l'ancre `#contact`) et la police Azeret Mono exposée via la variable `--font-ui`.

### Flux de données des projets

Les projets affichés sont la seule donnée dynamique et viennent de la table `projects` :

1. `lib/db/schema.ts` — table `projects` (Drizzle, `pg-core`). `stack` est une simple chaîne séparée par des virgules, pas un tableau.
2. `lib/db/drizzle.ts` — client `db` sur le driver `neon-http`.
3. `app/actions/getProjects.ts` — server action `getProject()` (nom au singulier, renvoie tous les projets).
4. `components/homepage/DisplayProjects.tsx` — composant **client** qui appelle la server action dans un `useEffect` et gère les états chargement / erreur (avec bouton « Réessayer ») / vide.
5. `components/homepage/ProjectCard.tsx` — tuile ; les détails s'ouvrent avec un élément natif `<details>`.

Le type d'un projet est dérivé du schéma (`typeof projects.$inferSelect`) et redéclaré localement dans les composants ; ne pas écrire d'interface à la main.

Les miniatures sont des URL arbitraires stockées en base : `ProjectCard` utilise `next/image` avec `unoptimized`, et `next.config.ts` ne déclare aucun `remotePatterns`.

### Styles

- La feuille active est `app/catalog.css`, importée par `app/layout.tsx`. Elle importe Tailwind 4, déclare les tokens (`--ink`, `--surface`, `--paper`, `--accent`, `--line`, …) et les mappe sur le thème Tailwind via `@theme inline`.
- La mise en page repose surtout sur des **classes sémantiques** définies dans `catalog.css` (`hero-section`, `projects-grid`, `project-card`, `site-footer`, …), pas sur des utilitaires Tailwind dans le JSX. Pour changer l'apparence d'un composant, modifier `catalog.css`.
- `ogl` sert au rendu WebGL de `components/homepage/HeroEye.tsx` (flammes et iris animé).

### Design et contenu

- `DESIGN.md` est la référence du système visuel (« Project Catalog Wall ») : fond neutre sombre, Azeret Mono partout, cyan `#4ac6d9` comme **seul** accent (focus, liens actifs, tuile sélectionnée), aucun vert, pas d'ombres, de dégradés ni d'effet de verre, tuiles à rayon `4px` et contrôles à angles droits. Le consulter avant toute modification d'interface.
- `PRODUCT.md` décrit le public (recruteurs, recherche d'alternance) et impose de ne rien inventer : pas de fausses notes, d'activité de dépôt, de sorties de terminal ni de résultats de projets non confirmés.
- La galerie de projets est un rail horizontal à défilement aimanté, focalisable au clavier ; seul le rail défile, jamais le document.
