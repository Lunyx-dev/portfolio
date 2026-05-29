# Portfolio Lunyx

Site vitrine personnel — Next.js 15, Tailwind CSS, Framer Motion.

---

## Installation locale

```bash
# 1. Installer les dépendances
npm install

# 2. Copier le fichier d'environnement
cp .env.example .env.local
# Puis édite .env.local avec ton vrai mot de passe app Outlook

# 3. Lancer en développement
npm run dev
# → Ouvre http://localhost:3000
```

---

## Générer un mot de passe app Outlook

Le formulaire de contact envoie les messages via ton email Outlook.
Tu as besoin d'un **mot de passe d'application** (pas ton vrai mot de passe) :

1. Va sur https://account.microsoft.com/security
2. Clique sur "Options de sécurité avancées"
3. Section "Mots de passe d'application" → Créer
4. Copie le mot de passe généré dans `.env.local` → `MAIL_PASS`

---

## Déploiement sur Vercel (gratuit)

### Étape 1 — Créer un repo GitHub

```bash
git init
git add .
git commit -m "init: portfolio lunyx"
```

1. Va sur https://github.com/new
2. Crée un repo `portfolio` (privé ou public, à toi de choisir)
3. Copie les commandes "push an existing repository" affichées par GitHub :

```bash
git remote add origin https://github.com/TON_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Étape 2 — Déployer sur Vercel

1. Va sur https://vercel.com → Sign up avec GitHub
2. Clique "Add New Project"
3. Importe ton repo `portfolio`
4. Dans **Environment Variables**, ajoute :
   - `MAIL_USER` = `lunyx.dev@outlook.fr`
   - `MAIL_PASS` = ton mot de passe app Outlook
5. Clique **Deploy**

Vercel te donne une URL du type `portfolio-lunyx.vercel.app`.

### Étape 3 — Domaine personnalisé (optionnel)

Pour avoir `ton nom` à la place de l'URL Vercel :
1. Achète le domaine sur https://www.cloudflare.com/products/registrar/ (~10€/an)
2. Dans Vercel → Settings → Domains → Add `lunyx.dev`
3. Suis les instructions DNS de Vercel dans Cloudflare

---

## Structure du projet

```
src/
  app/
    page.tsx          → Page principale
    layout.tsx        → Métadonnées SEO
    globals.css       → Styles globaux + imports Google Fonts
    api/
      contact/
        route.ts      → API formulaire de contact (nodemailer)
  components/
    Navbar.tsx        → Navigation sticky
    Hero.tsx          → Section hero avec animations
    Projects.tsx      → Carte projet gaming
    Skills.tsx        → Grille compétences avec barres animées
    Contact.tsx       → Formulaire + envoi email
```

---

## Personnalisation rapide

- **Tes vraies compétences** → `src/components/Skills.tsx`, modifie le tableau `skills`
- **Description projet** → `src/components/Projects.tsx`, modifie `projects[0].desc`
- **Texte hero** → `src/components/Hero.tsx`
- **SEO** → `src/app/layout.tsx`, modifie `metadata`
