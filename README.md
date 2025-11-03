# 🔐 Dispensa Crittografia Interattiva

Materiale didattico interattivo sull'**Algoritmo RSA** per il corso di Sistemi e Reti.

## 🚀 Live Demo

**[Visualizza Dispensa Online →](https://thomascasali.github.io/rsa-slides/)**

## 📚 Contenuti

Questa dispensa interattiva copre tutti gli aspetti fondamentali dell'algoritmo RSA:

### Teoria (Slide 1-11)
- ✅ Introduzione alla Crittografia Asimmetrica
- ✅ Matematica di Base (Numeri Primi, φ di Eulero, Modulo)
- ✅ I 5 Passi per Generare Chiavi RSA
- ✅ Formule di Cifratura e Decifratura
- ✅ Esempi Numerici Completi

### Pratica (Slide 12-31)
- ✅ Setup Ambiente PowerShell
- ✅ Generazione Chiavi RSA (Alice & Bob)
- ✅ Cifratura e Decifratura Messaggi
- ✅ Firme Digitali e Verifica
- ✅ Test di Sicurezza e Manomissione
- ✅ Best Practices e Troubleshooting

### Avanzato (Slide 32-36)
- ✅ Sicurezza: Problema della Fattorizzazione
- ✅ Dimensioni delle Chiavi (2048-4096 bit)
- ✅ Limitazioni di RSA e Cifratura Ibrida
- ✅ Applicazioni Reali (HTTPS, SSL/TLS, VPN, PGP)

**Totale:** 36 slide interattive con dark theme uniforme

## 🛠️ Tecnologie

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS 4.0 (alpha)
- **Build Tool:** Vite 5.4
- **Icons:** Lucide React
- **Deploy:** GitHub Pages con GitHub Actions automatico

## 📦 Installazione e Sviluppo

### Requisiti
- Node.js 20+ (consigliato)
- npm 9+

### Setup Locale

```bash
# Clona il repository
git clone https://github.com/thomascasali/rsa-slides.git
cd rsa-slides

# Installa dipendenze
npm install

# Avvia development server
npm run dev
```

Il server dev sarà disponibile su `http://localhost:5173`

### Build Production

```bash
# Build ottimizzato per production
npm run build

# Preview build locale
npm run preview
```

## 🚀 Deploy su GitHub Pages

### Configurazione Automatica

Il progetto include un workflow GitHub Actions (`.github/workflows/deploy.yml`) che esegue automaticamente il deploy su ogni push al branch `main`.

**Setup GitHub Pages:**

1. Vai su **Repository → Settings → Pages**
2. Sotto "Source", seleziona **GitHub Actions**
3. Fai push al branch `main`
4. Il deploy partirà automaticamente!

### Configurazione Manuale Base Path

Il repository è configurato per `rsa-slides`. Se cambi nome repository, aggiorna il file `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/NOME-TUO-REPOSITORY/', // ⚠️ Modifica qui
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

## 📖 Utilizzo

### Navigazione

- **Dashboard:** Schermata principale con navigazione rapida alle sezioni
- **Slide Viewer:** Modalità presentazione con controlli

### Controlli Tastiera

- `←` **Freccia Sinistra:** Slide precedente
- `→` **Freccia Destra:** Slide successiva
- `Home` / `Esc`: Torna alla Dashboard

### Quick Start

Dalla dashboard puoi saltare direttamente a:
- Slide 1: Introduzione
- Slide 7: Crittografia Asimmetrica
- Slide 12: Esercitazioni Pratiche PowerShell
- Slide 32: Argomenti Avanzati

## 📁 Struttura Progetto

```
presentazione-crittografia/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx          # Dashboard con navigazione
│   │   └── SlideViewer.tsx        # Viewer slide con controlli
│   ├── data/
│   │   ├── slides.tsx             # Aggregatore + funzioni helper
│   │   └── slides/
│   │       ├── introSlides.tsx    # Slide 1-5 (Intro)
│   │       ├── theorySlides.tsx   # Slide 6 (Teoria base)
│   │       ├── asymmetricSlides.tsx # Slide 7-11 (RSA)
│   │       ├── practiceSlides.tsx # Slide 12-31 (Pratica)
│   │       └── advancedSlides.tsx # Slide 32-36 (Avanzato)
│   ├── types/
│   │   └── index.ts               # Type definitions
│   ├── App.tsx                    # Main app component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Tailwind CSS imports
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions deploy
├── context.md                     # Documentazione tecnica interna
├── vite.config.ts                 # Configurazione Vite
├── tailwind.config.js             # Configurazione Tailwind
├── tsconfig.json                  # Configurazione TypeScript
└── package.json                   # Dependencies
```

## 🎨 Design System

### Categoria Colori (Dark Theme)

Ogni categoria di slide ha il suo schema colori distintivo:

- **Intro:** Blue (`from-blue-900/50 to-blue-800/50`)
- **Theory:** Indigo (`from-indigo-900/50 to-indigo-800/50`)
- **Asymmetric:** Purple (`from-purple-900/50 to-purple-800/50`)
- **Practice:** Orange (`from-orange-900/50 to-orange-800/50`)
- **Advanced:** Red (`from-red-900/50 to-red-800/50`)

### Typography

- Titoli: `text-{color}-300 text-2xl-4xl font-bold`
- Body: `text-gray-300 text-base`
- Sottotitoli: `text-gray-400 text-sm`

## 🧪 Testing e Validazione

### Checklist Pre-Deploy

- [x] Tutte le 36 slide si caricano correttamente
- [x] Nessun ID duplicato (validazione automatica in dev)
- [x] Dashboard mostra statistiche corrette
- [x] Navigazione rapida funziona
- [x] Dark theme applicato uniformemente
- [x] TypeScript build senza errori
- [x] Responsive design (mobile + desktop)

### Validazione ID Univoci

Il progetto include validazione automatica degli ID delle slide (vedi console in dev mode):

```typescript
// In slides.tsx
export const validateSlideIds = () => {
  // Verifica duplicati...
}
```

## 📄 Licenza

Questo progetto è destinato a uso didattico.

## 👨‍🏫 Autore

**Prof. Thomas Casali**
ITTS - Sistemi e Reti - Classe Quinta
Anno Scolastico 2024-2025

---

## 🔧 Troubleshooting

### Build Fallisce

```bash
# Pulisci cache e reinstalla
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages mostra 404

1. Verifica che `base` in `vite.config.ts` corrisponda al nome del repository
2. Controlla GitHub Pages settings → Source = "GitHub Actions"
3. Aspetta completamento workflow (1-2 minuti)

### Errori TypeScript

Assicurati di avere le versioni corrette:
- Node.js ≥ 20
- TypeScript ≥ 5.5

---

**🎓 Buono Studio!**

Per domande o problemi, apri una issue su GitHub.
