import type { Slide } from '../types';
import { introSlides } from './slides/introSlides';
import { theorySlides } from './slides/theorySlides';
import { symmetricSlides } from './slides/symmetricSlides';
import { asymmetricSlides } from './slides/asymmetricSlides';
import { hybridSlides } from './slides/hybridSlides';
import { opensslSlides } from './slides/opensslSlides';
import { practiceSlides } from './slides/practiceSlides';
import { advancedSlides } from './slides/advancedSlides';

// Aggregazione di tutte le slide in un unico array
// ORGANIZZAZIONE DIDATTICA: Introduzione → Simmetrica (più semplice) → Asimmetrica (più complessa) → Confronti/Ibrida → Pratica → Avanzato
export const slides: Slide[] = [
  ...introSlides,       // ID 1-5 (Introduzione generale alla crittografia e confronto)
  ...symmetricSlides,   // ID 6-15 (Crittografia Simmetrica: DES, 3DES, AES - Prima perché più semplice)
  ...theorySlides,      // ID 16-22 (Crittografia Asimmetrica: teoria, Alice/Bob, algoritmi, modalità AEAD, RSA intro, matematica)
  ...asymmetricSlides,  // ID 23-27 (RSA: I 5 Passi, Esempi Numerici Dettagliati)
  ...hybridSlides,      // ID 28-32 (Cifratura Ibrida: Confronti, Benchmarks, Teoria, WhatsApp, HTTPS/TLS)
  ...opensslSlides,     // ID 33-47 (OpenSSL - PRIMARY - Cross-platform)
  ...practiceSlides,    // ID 48-67 (PowerShell - SECONDARY - Windows)
  ...advancedSlides,    // ID 68-72 (Sicurezza, Limitazioni, Applicazioni)
];

// Funzione CRITICA per mapping corretto ID → posizione array
// Evita errori di navigazione (ID non è sempre uguale a index!)
export const getSlidePosition = (slideId: number): number => {
  const position = slides.findIndex(slide => slide.id === slideId);
  if (position === -1) {
    console.warn(`Slide with ID ${slideId} not found`);
    return 0; // Fallback alla prima slide
  }
  return position;
};

// Funzione helper per ottenere slide per ID
export const getSlideById = (slideId: number): Slide | undefined => {
  return slides.find(slide => slide.id === slideId);
};

// Statistiche slide per Dashboard
export const getSlideStats = () => {
  return {
    total: slides.length,
    byCategory: {
      intro: slides.filter(s => s.category === 'intro').length,
      theory: slides.filter(s => s.category === 'theory').length,
      symmetric: slides.filter(s => s.category === 'symmetric').length,
      asymmetric: slides.filter(s => s.category === 'asymmetric').length,
      hybrid: slides.filter(s => s.category === 'hybrid').length,
      openssl: slides.filter(s => s.category === 'openssl').length,
      practice: slides.filter(s => s.category === 'practice').length,
      advanced: slides.filter(s => s.category === 'advanced').length,
    },
  };
};

// Trova la prima slide di una categoria
export const getFirstSlideOfCategory = (category: string): number | null => {
  const slide = slides.find(s => s.category === category);
  return slide ? slide.id : null;
};

// Validazione: verifica ID univoci
export const validateSlideIds = (): { valid: boolean; duplicates: number[] } => {
  const ids = slides.map(s => s.id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  return {
    valid: duplicates.length === 0,
    duplicates: Array.from(new Set(duplicates)),
  };
};

// Log informazioni debug in development
if (import.meta.env.DEV) {
  console.log('📊 Slide Stats:', getSlideStats());
  const validation = validateSlideIds();
  if (!validation.valid) {
    console.error('❌ DUPLICATED SLIDE IDS:', validation.duplicates);
  } else {
    console.log('✅ All slide IDs are unique');
  }
}
