# 🔐 Dispensa Crittografia Interattiva

Materiale didattico interattivo sulla **Crittografia Simmetrica, Asimmetrica e RSA** per il corso di Sistemi e Reti.

## 🚀 Live Demo

**[Visualizza Dispensa Online →](https://thomascasali.github.io/rsa-slides/)**

## 📚 Contenuti

Questa dispensa interattiva copre tutti gli aspetti fondamentali della crittografia moderna, con focus su RSA:

### 🎯 Introduzione (Slide 1-5)
- ✅ Cos'è la Crittografia
- ✅ Storia e Importanza della Sicurezza
- ✅ Panoramica Simmetrica vs Asimmetrica

### 🔑 Crittografia Simmetrica (Slide 6-13)
- ✅ Teoria della Crittografia Simmetrica
- ✅ DES (Data Encryption Standard)
- ✅ 3DES (Triple DES)
- ✅ AES (Advanced Encryption Standard)
- ✅ **Esempio Pratico AES** con Alice e Bob
- ✅ Confronto Prestazionale (DES vs 3DES vs AES)
- ✅ Riepilogo e Limitazioni

### 🔐 Crittografia Asimmetrica - Teoria (Slide 14-20)
- ✅ Introduzione alla Crittografia Asimmetrica
- ✅ Come Funziona lo Scambio Chiavi
- ✅ Comunicazione Sicura (Alice & Bob)
- ✅ Algoritmi Moderni (RSA, ECC, ECDHE, EdDSA)
- ✅ Modalità AEAD (AES-GCM, ChaCha20-Poly1305)
- ✅ **L'Algoritmo RSA** - Introduzione

### 🧮 RSA - Generazione Chiavi (Slide 21-25)
- ✅ I 5 Passi per Generare Chiavi RSA
- ✅ Passo 1-2: Scelta numeri primi (p, q) e calcolo n
- ✅ Passo 3-5: Calcolo φ(n), scelta e, calcolo d
- ✅ Chiavi RSA Generate (pubblica e privata)
- ✅ Formule di Cifratura e Decifratura
- ✅ Esempio Pratico Completo con calcoli numerici

### 🛡️ RSA - Sicurezza e Applicazioni (Slide 26-30)
- ✅ Perché RSA è Sicuro? (Fattorizzazione)
- ✅ Dimensioni delle Chiavi (2048-4096 bit)
- ✅ Limitazioni di RSA
- ✅ Applicazioni Reali (HTTPS, SSL/TLS, VPN, PGP, Blockchain)
- ✅ **Dal RSA alla Cifratura Ibrida** - Ponte teorico

### 🔄 Cifratura Ibrida (Slide 31-35)
- ✅ Confronto Completo Simmetrica vs Asimmetrica
- ✅ Benchmark Prestazionali (AES vs RSA)
- ✅ Teoria della Cifratura Ibrida (6 passi)
- ✅ **Esempio Reale: WhatsApp** (Signal Protocol, ECDHE + AES-GCM)
- ✅ Come Funziona HTTPS/TLS 1.3

### 🔧 Pratica OpenSSL (Slide 36-50)
- ✅ Installazione OpenSSL (Windows/Linux/Mac)
- ✅ Generazione Chiavi RSA con openssl
- ✅ Encryption/Decryption con RSA
- ✅ Firme Digitali e Certificati X.509
- ✅ Cifratura Ibrida Pratica (RSA + AES)
- ✅ Troubleshooting e Best Practices

### ⚡ Pratica PowerShell (Slide 51-70)
- ✅ Setup Ambiente PowerShell Windows
- ✅ Generazione Chiavi RSA con .NET APIs
- ✅ Cifratura e Decifratura Messaggi (Alice & Bob)
- ✅ Firme Digitali e Verifica
- ✅ Test di Sicurezza e Manomissione
- ✅ Esercitazioni Pratiche Complete

**Totale:** 70 slide interattive con dark theme moderno

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
  - Card "Inizia dall'inizio" → Slide 1 (Introduzione)
  - Card "Crittografia Simmetrica" → Slide 6 (DES, 3DES, AES)
  - Card "Crittografia Asimmetrica" → Slide 14 (Teoria + RSA completo)
  - Card "Cifratura Ibrida" → Slide 33 (Teoria ibrida)
  - Card "Pratica OpenSSL" → Slide 36 (Cross-platform)
  - Card "Pratica PowerShell" → Slide 51 (Windows)

- **Slide Viewer:** Modalità presentazione con controlli

### Controlli Tastiera

- `←` **Freccia Sinistra:** Slide precedente
- `→` **Freccia Destra:** Slide successiva
- `Home` / `Esc`: Torna alla Dashboard

### Statistiche Dashboard

La dashboard mostra statistiche in tempo reale:
- **70 slide totali**
- **12 slide** Intro + Theory
- **8 slide** Simmetrica
- **10 slide** RSA (Asimmetrica)
- **5 slide** Ibrida
- **15 slide** OpenSSL
- **20 slide** PowerShell

## 📁 Struttura Progetto

```
presentazione-crittografia/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx          # Dashboard con navigazione rapida
│   │   └── SlideViewer.tsx        # Viewer slide con controlli
│   ├── data/
│   │   ├── slides.tsx             # Aggregatore + funzioni helper
│   │   └── slides/
│   │       ├── introSlides.tsx    # Slide 1-5 (Intro)
│   │       ├── symmetricSlides.tsx # Slide 6-13 (Simmetrica)
│   │       ├── theorySlides.tsx   # Slide 14-20 (Teoria Asimmetrica)
│   │       ├── asymmetricSlides.tsx # Slide 21-25 (RSA Generazione Chiavi)
│   │       ├── advancedSlides.tsx # Slide 26-30 (RSA Sicurezza)
│   │       ├── hybridSlides.tsx   # Slide 31-35 (Cifratura Ibrida)
│   │       ├── opensslSlides.tsx  # Slide 36-50 (Pratica OpenSSL)
│   │       └── practiceSlides.tsx # Slide 51-70 (Pratica PowerShell)
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
- **Symmetric:** Green (`from-green-900/50 to-green-800/50`)
- **Asymmetric:** Purple (`from-purple-900/50 to-purple-800/50`)
- **Hybrid:** Indigo (`from-indigo-900/50 to-indigo-800/50`)
- **OpenSSL:** Teal (`from-teal-900/50 to-teal-800/50`)
- **Practice:** Orange (`from-orange-900/50 to-orange-800/50`)

### Typography

- Titoli: `text-{color}-300 text-2xl-4xl font-bold`
- Body: `text-gray-300 text-base-lg`
- Sottotitoli: `text-gray-400 text-sm`
- Codice: `font-mono text-sm bg-gray-900`

## 🧪 Testing e Validazione

### Checklist Pre-Deploy

- [x] Tutte le 70 slide si caricano correttamente
- [x] Nessun ID duplicato (validazione automatica in dev)
- [x] Dashboard mostra statistiche corrette (70 totali)
- [x] Navigazione rapida funziona (6 quick-start cards)
- [x] Dark theme applicato uniformemente
- [x] TypeScript build senza errori
- [x] Responsive design (mobile + desktop)
- [x] Slide 30 fa da ponte RSA → Hybrid

### Validazione ID Univoci

Il progetto include validazione automatica degli ID delle slide (vedi console in dev mode):

```typescript
// In slides.tsx
export const validateSlideIds = () => {
  const ids = slides.map(s => s.id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  return {
    valid: duplicates.length === 0,
    duplicates: Array.from(new Set(duplicates))
  };
};
```

## 📚 Flow Didattico

La presentazione segue un percorso logico ottimizzato:

1. **Introduzione** → Cos'è la crittografia e perché è importante
2. **Simmetrica** → Algoritmi più semplici (DES → 3DES → AES)
3. **Asimmetrica Teoria** → Concetti base, scambio chiavi, algoritmi moderni
4. **RSA Dettagliato** → Generazione chiavi, matematica, esempi pratici
5. **RSA Avanzato** → Sicurezza, fattorizzazione, limitazioni
6. **Ponte** → Da RSA al problema delle prestazioni (slide 30)
7. **Cifratura Ibrida** → Come combinare RSA e AES nel mondo reale
8. **Pratica** → Esercitazioni concrete (OpenSSL + PowerShell)

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
