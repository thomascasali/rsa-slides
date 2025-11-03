import type { Slide } from '../../types';

export const theorySlides: Slide[] = [
  // Slide 6: Base Matematica
  {
    id: 6,
    title: 'La Matematica di RSA - Prerequisiti',
    category: 'theory',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-indigo-300 mb-4">Concetti Matematici Necessari</h3>

        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-lg">
          <strong className="text-indigo-300 text-lg">1. Numeri Primi</strong>
          <p className="text-gray-300 mt-2">
            Un numero è <strong>primo</strong> se è divisibile solo per 1 e per se stesso.
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Esempi: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61...
          </p>
        </div>

        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-lg">
          <strong className="text-indigo-300 text-lg">2. Funzione φ di Eulero (Phi)</strong>
          <p className="text-gray-300 mt-2">
            φ(n) conta quanti numeri minori di n sono <strong>coprimi</strong> con n
            (non hanno fattori comuni tranne 1).
          </p>
          <div className="text-center text-2xl text-indigo-400 font-semibold mt-6">
            Se p e q sono primi: <strong>φ(p × q) = (p-1) × (q-1)</strong>
          </div>
        </div>

        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-lg">
          <strong className="text-indigo-300 text-lg">3. Operazione Modulo (mod)</strong>
          <p className="text-gray-300 mt-2">
            <strong>a mod b</strong> è il resto della divisione di a per b
          </p>
          <p className="text-gray-400 mt-2">
            Esempio: 17 mod 5 = 2 (perché 17 = 3 × 5 + <strong>2</strong>)
          </p>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg mt-6">
          <strong className="text-green-300">💡 Esempio Pratico:</strong><br />
          <span className="text-gray-300">
            Se p = 5 e q = 11, allora:<br />
            • n = 5 × 11 = <strong className="text-indigo-300">55</strong><br />
            • φ(n) = (5-1) × (11-1) = 4 × 10 = <strong className="text-indigo-300">40</strong>
          </span>
        </div>
      </div>
    ),
  },
];
