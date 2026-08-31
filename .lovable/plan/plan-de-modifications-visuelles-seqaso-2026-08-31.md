# Plan de modifications visuelles — SEQASO

## Objectif
Alléger la page d'accueil en supprimant les éléments décoratifs/inutiles et en réduisant les espacements verticaux entre plusieurs sections.

## Modifications prévues

### 1. Section "À propos" — supprimer le bloc illustratif de gauche
**Fichier :** `src/components/site/Sections.tsx`
- Supprimer la première colonne (`lg:grid-cols-2` + premier `div`) qui contient l'illustration décorative avec les 4 rectangles et le badge "SEQASO / 2026".
- Passer le contenu textuel en pleine largeur et centré (`mx-auto max-w-3xl text-center`) pour conserver l'équilibre visuel.

### 2. Section "Nos services" — réduire l'espace avant le titre
**Fichier :** `src/components/site/Sections.tsx`
- Réduire le padding vertical de la section services (`py-24 sm:py-32` → `py-16 sm:py-20`).

### 3. Section "Nos services" — supprimer 3 cartes
**Fichier :** `src/lib/content.ts`
- Supprimer les items :
  - "Cybersécurité" / "Cybersecurity"
  - "Cloud & DevOps"
  - "Data & IA" / "Data & AI"
- Garder les 3 premiers items (Développement sur mesure, Assurance qualité, Automatisation des tests).
- Adapter le titre `"Six expertises complémentaires"` en `"Nos expertises"` et le sous-titre pour refléter le nouveau contenu (optionnel, à valider visuellement).

### 4. Section "Veille technologique" — réduire l'espace avant le titre
**Fichier :** `src/components/site/Sections.tsx`
- Réduire le padding vertical (`py-24 sm:py-32` → `py-16 sm:py-20`).

### 5. Section "En chiffres" — réduire l'espace avant le titre
**Fichier :** `src/components/site/Sections.tsx`
- Réduire le padding vertical (`py-20` → `py-12 sm:py-16`).

### 6. Section "Contact" — ne garder que le formulaire
**Fichier :** `src/components/site/Contact.tsx`
- Supprimer la colonne de gauche contenant :
  - Le kicker, titre et sous-titre "Parlons de votre projet"
  - L'email, le téléphone, l'adresse et les horaires
- Garder uniquement le formulaire, centré pleine largeur (`mx-auto max-w-2xl`).
- Nettoyer les imports inutilisés (`Clock`, `Mail`, `MapPin`, `Phone`, `contactDetails`).

## Vérification
- Vérifier visuellement que la section "À propos" reste équilibrée sans l'illustration.
- Confirmer que les 3 cartes services restantes s'affichent correctement en grille responsive.
- S'assurer que les espacements réduits ne collent pas les sections entre elles sur mobile.
