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

Des fichiers liés au projet se trouvent sur le bureau, pas dans le dépôt.

Dans le dossier `Oeil/`, les overlays pour OBS :

- `oeil-overlay.html` : première version, avec l'ancien mouvement de l'œil.
- `oeil-overlay-v2.html` : le mouvement actuel de l'œil ; la structure s'incline avec le regard.
- `oeil-overlay-v3.html` : le même, avec l'option `?structure=` ; sans option, la structure reste fixe.
- `readme.md` : rappel des options d'adresse.

À la racine du bureau :

- `oeil-overlay-v2.html` : une autre copie de la v2, différente de celle du dossier `Oeil/` : elle accepte `?structure=` et, sans option, la structure s'incline.
- `logo-ys-cyan.png` et `logo-ys-rouge.png` : monogramme sur fond transparent.

Les overlays sont autonomes (images et shaders intégrés). Ils s'ajoutent dans OBS comme source Navigateur, en « Fichier local », taille conseillée 700 × 800. Options d'adresse : `?souris=1` et `?fond=0a0f14` partout, `?structure=0` ou `?structure=1` seulement là où c'est indiqué. Ils n'ont été testés que dans un navigateur, pas dans OBS.

Ils ne se mettent pas à jour quand le site change : si l'œil du site évolue, il faut les régénérer à partir de `HeroEye.tsx` et des images de `public/brand/`.

## Pistes ouvertes

- Clignement de l'œil : non fait, le dessin n'a pas de paupières.
- Le `README.md` décrit encore un profil générique et ne correspond pas au positionnement de `PRODUCT.md`.
- Sans souris, la structure bouge par à-coups avec l'œil ; on pourrait la lisser pour que seul l'œil saccade.
