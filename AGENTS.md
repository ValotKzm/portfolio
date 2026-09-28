# Consignes pour les agents

## Projet

- Portfolio personnel construit avec Next.js 16 (App Router), React 19 et TypeScript.
- Styles avec Tailwind CSS 4; animations avec `motion`; icones avec `lucide-react`.
- Donnees PostgreSQL via Neon et Drizzle ORM. Le schema est dans `lib/db/schema.ts`; les migrations sont dans `drizzle/`.
- L'interface est en francais (`app/layout.tsx` declare `lang="fr"`). Conserver cette langue pour les textes visibles, sauf demande contraire.
- Utiliser `pnpm`, comme l'indique le fichier `pnpm-lock.yaml`.

## Principes de modification

- Avant de modifier, lire le composant ou la logique concerne ainsi que ses usages proches. Faire des changements limites a la demande et respecter les conventions locales.
- Garder les composants serveur par defaut. Ajouter `"use client"` uniquement quand une interaction, un hook ou une API navigateur l'exige.
- Privilegier TypeScript et les types existants; ne pas contourner le typage avec `any` sans necessite expliquee.
- Pour l'interface, preserver une hierarchie visuelle claire, le responsive, l'accessibilite clavier et les etats de chargement/erreur utiles. Reutiliser les dependances deja installees avant d'en ajouter.
- Utiliser des chemins d'import coherents avec le projet, notamment l'alias `@/` lorsqu'il convient.
- Ne jamais inscrire de secrets dans le code ou les fichiers suivis par Git. Utiliser les variables d'environnement deja prevues.
- Ne pas modifier ou generer des migrations Drizzle et ne pas lancer de commande qui change la base de donnees (`db:push`, `db:migrate`) sans demande explicite.
- Ne pas effectuer de nettoyage hors sujet ni annuler les changements preexistants de l'utilisateur.

## Verification

- Installer les dependances avec `pnpm install` si necessaire.
- Lancer `pnpm lint` pour verifier ESLint et `pnpm build` pour verifier la compilation de production.
- Il n'y a pas de script de test declare dans `package.json`; ne pas pretendre qu'une suite de tests a ete executee.
- Apres une modification, executer les verifications pertinentes et signaler clairement celles qui n'ont pas pu etre lancees.