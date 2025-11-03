# 🔐 Context - Dispensa Crittografia Interattiva

**Creato:** 2025-11-03
**Progetto:** Dispensa Crittografia Interattiva (basato su RSA)
**Obiettivo:** Convertire presentazioni HTML standalone in React app moderna con Vite + TypeScript + Tailwind CSS

---

## 📊 STATO INIZIALE DEL PROGETTO

### File Presenti (Analisi Completa)
```
presentazione-crittografia/
├── index.html          (Dashboard, 355 righe)
├── teoria.html         (16 slide teoria RSA, 1157 righe)
├── pratica.html        (20 slide pratica PowerShell, 1704 righe)
└── README.md           (Documentazione esistente, 206 righe)
```

### Contenuto Slide Attuale

#### 1. **index.html** - Dashboard
- **Tipo:** Portale di navigazione
- **Framework:** React 18 (UMD standalone via CDN)
- **Stile:** CSS inline (gradient purple theme)
- **Moduli:**
  - Teoria RSA (15 slide - info card dice 15, HTML contiene 16)
  - Pratica PowerShell (20 slide)
- **Features:**
  - Navigazione rapida per argomento
  - Quick-access buttons per saltare a slide specifiche
  - Informazioni prerequisiti tecnici

#### 2. **teoria.html** - Modulo Teorico
- **Slide Totali:** 16 (da 0 a 15)
- **Tema:** Light theme (sfondo white, gradient purple esterno)
- **Contenuti:**
  1. Slide 0: Titolo introduttivo "Algoritmo RSA"
  2. Slide 1: Crittografia Asimmetrica intro (chiavi pubbliche/private)
  3. Slide 2: Come funziona lo scambio
  4. Slide 3: Comunicazione sicura Alice-Bob
  5. Slide 4: Cos'è RSA (inventori, utilizzi)
  6. Slide 5: Base matematica (numeri primi, φ di Eulero, modulo)
  7. Slide 6: Generazione chiavi parte 1 (passo 1-2)
  8. Slide 7: Generazione chiavi parte 2 (passo 3-5)
  9. Slide 8: Chiavi finali (visualizzazione pubblica + privata)
  10. Slide 9: Formule cifratura/decifratura
  11. Slide 10: Esempio pratico completo (123 cifrato in 855)
  12. Slide 11: Perché è sicuro (problema fattorizzazione)
  13. Slide 12: Dimensioni chiavi (2048 bit vs 4096 bit)
  14. Slide 13: Limitazioni RSA (dimensione messaggio, velocità)
  15. Slide 14: Applicazioni reali (HTTPS, email, firme, VPN)
  16. Slide 15: Conclusioni

**Categorie identificate:**
- Intro/Theory: Slide 0-5 (base teorica crittografia)
- Asymmetric: Slide 6-10 (RSA specifico, generazione chiavi)
- Advanced: Slide 11-14 (sicurezza, limitazioni, applicazioni)
- Conclusioni: Slide 15

#### 3. **pratica.html** - Modulo Pratico
- **Slide Totali:** 20 (da 0 a 19)
- **Tema:** Light theme con code blocks dark
- **Contenuti:**
  1. Slide 0: Titolo "Esercitazione Pratica RSA con PowerShell"
  2. Slide 1: Preparazione ambiente (requisiti Windows, PowerShell 5.1)
  3. Slide 2: Creazione struttura cartelle (RSA_Lab/Alice, Bob)
  4. Slide 3: Setup terminali (2 PowerShell separati)
  5. Slide 4: Generazione chiavi Alice (2048 bit)
  6. Slide 5: Generazione chiavi Bob
  7. Slide 6: Scambio chiavi pubbliche
  8. Slide 7: Alice cifra messaggio per Bob
  9. Slide 8: Bob decifra messaggio
  10. Slide 9: Bob risponde ad Alice
  11. Slide 10: Firma digitale intro (autenticità, integrità)
  12. Slide 11: Alice firma documento
  13. Slide 12: Bob verifica firma
  14. Slide 13: Test manomissione (security test)
  15. Slide 14: Cifratura + firma insieme (best practice)
  16. Slide 15: Script completo riepilogativo (funzioni PS)
  17. Slide 16: Esercizi proposti (5 esercitazioni)
  18. Slide 17: Best practices produzione
  19. Slide 18: Troubleshooting errori comuni
  20. Slide 19: Risorse approfondimento
  21. Slide 20: Conclusioni

**Categoria identificata:**
- Practice: Tutte le slide 0-19 (esercitazioni pratiche PowerShell)

---

## 🎯 ANALISI CONTENUTI PER RIORGANIZZAZIONE

### Mapping Categorie Proposte

#### **introSlides.jsx** (5 slide)
```
- Slide 0 teoria: Titolo + introduzione corso
- Slide 1 teoria: Crittografia asimmetrica intro
- Slide 2 teoria: Scambio chiavi
- Slide 3 teoria: Comunicazione sicura
- Slide 4 teoria: Cos'è RSA
```

#### **theorySlides.jsx** (1 slide)
```
- Slide 5 teoria: Base matematica (numeri primi, φ, modulo)
```

#### **asymmetricSlides.jsx** (5 slide)
```
- Slide 6 teoria: Generazione chiavi parte 1
- Slide 7 teoria: Generazione chiavi parte 2
- Slide 8 teoria: Chiavi finali
- Slide 9 teoria: Formule cifratura/decifratura
- Slide 10 teoria: Esempio pratico completo
```

#### **hashSlides.jsx** (0 slide al momento)
```
- Da creare: contenuti su MD5, SHA-family, BLAKE
- Opzionale per estensione futura
```

#### **practiceSlides.jsx** (20 slide)
```
- Tutte le slide da pratica.html (0-19)
- Esercitazioni PowerShell complete
```

#### **advancedSlides.jsx** (5 slide)
```
- Slide 11 teoria: Perché è sicuro
- Slide 12 teoria: Dimensioni chiavi
- Slide 13 teoria: Limitazioni
- Slide 14 teoria: Applicazioni reali
- Slide 15 teoria: Conclusioni
```

#### **symmetricSlides.jsx** (0 slide al momento)
```
- Da creare: DES, AES, ChaCha20
- Opzionale per estensione futura
```

---

## 🚨 PROBLEMI IDENTIFICATI

### ❌ Problema 1: Discrepanza Conteggio Slide
- **Dashboard dice:** Teoria ha 15 slide
- **File teoria.html contiene:** 16 slide (array slidesData ha indici 0-15)
- **Soluzione:** Correggere dashboard (16 slide effettive)

### ❌ Problema 2: Light Theme Invece di Dark
- **Stato attuale:** Tutte le slide hanno sfondo white con gradient purple esterno
- **Richiesto:** Dark theme uniforme come da specifiche
- **Da applicare:**
  - Backgrounds dark per categorie (blue-900, indigo-900, green-900, etc.)
  - Text colors: text-gray-300 (body), text-{color}-300 (titoli)

### ❌ Problema 3: Nessun ID Slide (struttura array semplice)
- **Stato attuale:** Array slidesData senza campo `id` esplicito
- **Problema:** Indici array non sono robusti, difficili da referenziare
- **Soluzione:** Aggiungere campo `id` univoco (1-36) a ogni slide

### ❌ Problema 4: Nessuna Categoria Definita
- **Stato attuale:** Slide organizzate per file (teoria vs pratica) ma senza metadati
- **Soluzione:** Aggiungere campo `category` a ogni slide

### ❌ Problema 5: Tecnologie Standalone
- **Attuale:** React CDN + Babel standalone (no build, no TypeScript)
- **Richiesto:** Vite + React 18 + TypeScript + Tailwind 4.0
- **Migrazione completa necessaria**

---

## 📋 TOTALE SLIDE DA MIGRARE

| Categoria | N° Slide | Fonte | Note |
|-----------|----------|-------|------|
| **intro** | 5 | teoria.html (0-4) | Introduzione RSA |
| **theory** | 1 | teoria.html (5) | Base matematica |
| **asymmetric** | 5 | teoria.html (6-10) | RSA algoritmo |
| **advanced** | 5 | teoria.html (11-15) | Sicurezza + applicazioni |
| **practice** | 20 | pratica.html (0-19) | PowerShell labs |
| **symmetric** | 0 | - | Da creare (futuro) |
| **hash** | 0 | - | Da creare (futuro) |
| **TOTALE** | **36** | | |

---

## 🔄 PIANO DI CONVERSIONE

### Step 1: Setup Progetto Vite + React + TS + Tailwind
```bash
npm create vite@latest . -- --template react-ts
npm install -D tailwindcss@next postcss autoprefixer
npm install lucide-react
```

### Step 2: Struttura Directory
```
src/
├── components/
│   ├── Dashboard.tsx       # Nuovo dashboard React
│   └── SlideViewer.tsx     # Viewer unificato
├── data/
│   ├── slides.tsx          # Aggregatore + export getSlidePosition
│   └── slides/
│       ├── introSlides.tsx
│       ├── theorySlides.tsx
│       ├── asymmetricSlides.tsx
│       ├── practiceSlides.tsx
│       └── advancedSlides.tsx
├── types.ts                # Interfacce TypeScript
├── App.tsx                 # Main routing
└── main.tsx                # Entry point
```

### Step 3: Conversione Slide (con ID + Category)
```typescript
// Esempio struttura target
interface Slide {
  id: number;                    // 1-36 univoco
  title: string;
  category: 'intro' | 'theory' | 'asymmetric' | 'practice' | 'advanced';
  content: () => JSX.Element;
}
```

### Step 4: Dark Theme Application
- Applicare classi Tailwind dark a TUTTE le slide
- Gradient backgrounds per categoria
- Text colors uniformi

### Step 5: Dashboard con Mapping Corretto
```typescript
// Funzione critica da implementare
export const getSlidePosition = (slideId: number): number =>
  slides.findIndex(slide => slide.id === slideId);
```

---

## 📦 COMPONENTI DA CREARE

### Dashboard.tsx
- Navigazione categorie
- Statistiche (36 slide totali)
- Quick-start buttons con mapping ID corretto
- Tema dark uniforme

### SlideViewer.tsx
- Navigazione frecce
- Indicator dots
- Progress (X / 36)
- Supporto keyboard (Arrow Left/Right)

---

## 🎨 DESIGN SYSTEM TARGET

### Colors (Dark Theme)
```css
intro      → bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-700
theory     → bg-gradient-to-br from-indigo-900/50 to-indigo-800/50 border-indigo-700
asymmetric → bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-700
practice   → bg-gradient-to-br from-orange-900/50 to-orange-800/50 border-orange-700
advanced   → bg-gradient-to-br from-red-900/50 to-red-800/50 border-red-700
```

### Typography
```css
Titoli:     text-{color}-300 text-2xl font-bold
Body:       text-gray-300 text-base
Sottotitoli: text-gray-400 text-sm
```

---

## 🔧 CONFIGURAZIONI BUILD

### vite.config.ts
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/presentazione-crittografia/',  // ⚠️ Aggiornare con nome repo esatto
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

### tailwind.config.js
```javascript
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

### package.json scripts
```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## ✅ CHECKLIST PRE-DEPLOY

- [ ] Tutte le 36 slide migrate con ID univoci (1-36)
- [ ] Nessun ID duplicato (validazione script)
- [ ] Dark theme applicato uniformemente
- [ ] Dashboard con statistiche corrette (36 slide)
- [ ] Navigazione rapida con getSlidePosition funzionante
- [ ] TypeScript build senza errori
- [ ] Tailwind CSS correttamente configurato
- [ ] Responsive design testato
- [ ] Build production ottimizzato (<500KB)
- [ ] GitHub Actions workflow configurato

---

## 📝 NOTE TECNICHE

### Conversione Code Blocks PowerShell
- **Attuale:** Componente `<CodeBlock>` custom con copy button
- **Target:** Mantenere funzionalità copia + syntax highlighting
- **Considerare:** Libreria come `react-syntax-highlighter` o custom component

### Formula Matematiche
- **Attuale:** HTML con `<sup>`, `<sub>` inline
- **Target:** Mantenere approccio semplice HTML (no KaTeX per ora)
- **Alternativa futura:** Integrare KaTeX se necessario

### Badges Utente (Alice/Bob)
- **Attuale:** Classi CSS `.alice-badge`, `.bob-badge`
- **Target:** Convertire in componenti Tailwind reusable

---

## 🚀 NEXT STEPS

1. ✅ **Analisi completata** → context.md creato
2. 🔄 **Setup Vite project** → Init npm, install dipendenze
3. 🔄 **Migrare slide** → Convertire HTML in TSX con ID + category
4. 🔄 **Applicare dark theme** → Tailwind classes uniformi
5. 🔄 **Creare componenti** → Dashboard + SlideViewer
6. 🔄 **Test locale** → npm run dev + validazione
7. 🔄 **Build production** → npm run build
8. 🔄 **Deploy GitHub Pages** → Actions workflow

---

## 📊 METRICHE OBIETTIVO

- **Build Size:** < 500KB (gzipped < 150KB)
- **Performance:** Caricamento < 200ms
- **Lighthouse Score:** > 90
- **TypeScript Errors:** 0
- **Mobile Responsive:** ✅ Completo
- **Browser Support:** Chrome, Firefox, Safari, Edge

---

**Ultimo aggiornamento:** 2025-11-03
**Status:** 🔵 Analisi completata, pronto per fase 2 (setup progetto)
