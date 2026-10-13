# Notes de reprise

Notes pratiques pour reprendre le travail sur le portfolio. Le design est décrit dans `DESIGN.md`, le public et le positionnement dans `PRODUCT.md`, l'architecture dans `CLAUDE.md`.

## État au 13 octobre 2026

- Le site utilise le design « cyan » : emblème à l'œil animé dans le hero, monogramme YS dans l'en-tête et le pied de page, Azeret Mono pour les titres et Montserrat pour le texte.
- Tout est sur `main`, qui est la seule branche, en local comme sur GitHub.
- L'œil (`components/homepage/HeroEye.tsx`) suit la souris, bouge par saccades quand elle est inactive, et la structure s'incline avec le regard.

## Pièges connus

- **CSS figée en développement.** Après une modification de `app/catalog.css`, le serveur `pnpm dev` continue souvent de servir l'ancienne feuille. Il faut arrêter le serveur, supprimer `.next/dev`, puis relancer `pnpm dev`. Les modifications de fichiers `.tsx` se rechargent normalement.
- **`pnpm lint` affiche des dizaines d'avertissements** qui ne viennent pas du site. Pour ne vérifier que le code du site : `pnpm exec eslint app components lib`.
- **Aucun test automatisé.** La vérification se fait avec le lint, `pnpm build` et un contrôle visuel dans le navigateur.

## Règles à respecter

- Le dossier `.local/` contient la charte graphique et les fichiers sources du logo. Il est ignoré par Git et ne doit jamais être commité ni supprimé.
- Les images de `public/brand/` sont dérivées de ces sources et sont publiques sur GitHub.
- Les messages de commit ne portent aucune ligne `Co-Authored-By`.
- Pas de `pnpm db:push` ni de `pnpm db:migrate` sans décision explicite.
- Sur l'œil : ne jamais agrandir l'iris, ne pas laisser de vide derrière lui, et garder les flammes à vitesse constante, sans réaction à la souris.

## Hors dépôt

Sur le bureau, pas dans le dépôt : `logo-ys-cyan.png` et `logo-ys-rouge.png`, le monogramme sur fond transparent.

## Pistes ouvertes

- Clignement de l'œil : non fait, le dessin n'a pas de paupières.
- Le `README.md` décrit encore un profil générique et ne correspond pas au positionnement de `PRODUCT.md`.
- Sans souris, la structure bouge par à-coups avec l'œil ; on pourrait la lisser pour que seul l'œil saccade.
