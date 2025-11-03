import type { Slide } from '../types';
import { introSlides } from './slides/introSlides';
import { theorySlides } from './slides/theorySlides';
import { asymmetricSlides } from './slides/asymmetricSlides';
import { practiceSlides } from './slides/practiceSlides';
import { advancedSlides } from './slides/advancedSlides';

// Aggregazione di tutte le slide in un unico array
export const slides: Slide[] = [
  ...introSlides,       // ID 1-5
  ...theorySlides,      // ID 6
  ...asymmetricSlides,  // ID 7-11
  ...practiceSlides,    // ID 12-31
  ...advancedSlides,    // ID 32-36
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
      asymmetric: slides.filter(s => s.category === 'asymmetric').length,
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
