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
// ORGANIZZAZIONE DIDATTICA: Introduzione → Simmetrica → Asimmetrica/RSA → Ibrida → Pratica
export const slides: Slide[] = [
  ...introSlides,       // ID 1-5 (Introduzione generale alla crittografia e confronto)
  ...symmetricSlides,   // ID 6-13 (Crittografia Simmetrica: DES, 3DES, AES, Esempio Pratico, Confronto - 8 slide)
  ...theorySlides,      // ID 14-20 (Crittografia Asimmetrica: teoria, Alice/Bob, algoritmi, modalità AEAD, RSA intro - 7 slide)
  ...asymmetricSlides,  // ID 21-25 (RSA Generazione Chiavi: I 5 Passi, Esempi Numerici Dettagliati - 5 slide)
  ...advancedSlides,    // ID 26-30 (RSA Avanzato: Sicurezza, Fattorizzazione, Dimensioni Chiavi, Limitazioni, Applicazioni - 5 slide)
  ...hybridSlides,      // ID 31-35 (Cifratura Ibrida: Confronti, Benchmarks, Teoria, WhatsApp, HTTPS/TLS - 5 slide)
  ...opensslSlides,     // ID 36-50 (OpenSSL - PRIMARY - Cross-platform - 15 slide)
  ...practiceSlides,    // ID 51-70 (PowerShell - SECONDARY - Windows - 20 slide)
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
