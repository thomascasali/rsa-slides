import type { Slide } from '../../types';

export const asymmetricSlides: Slide[] = [
  // Slide 7: Generazione Chiavi Passo 1-2
  {
    id: 17,
    title: 'Generazione Chiavi RSA - Parte 1',
    category: 'asymmetric',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">I 5 Passi per Generare le Chiavi</h3>
        <p className="text-gray-300 mb-8">Usiamo un esempio con numeri piccoli per semplicità:</p>

        <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
          <strong className="text-purple-300 text-lg">PASSO 1: Scegliere due numeri primi p e q</strong>
          <div className="mt-4 p-6 bg-gray-800 rounded-lg">
            <div className="text-2xl text-purple-400">
              p = <strong>61</strong><br />
              q = <strong>53</strong>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            💡 Nella pratica si usano numeri primi di centinaia di cifre!
          </p>
        </div>

        <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
          <strong className="text-purple-300 text-lg">PASSO 2: Calcolare n = p × q</strong>
          <div className="mt-4 p-6 bg-gray-800 rounded-lg">
            <div className="text-2xl">
              n = 61 × 53 = <strong className="text-purple-400">3233</strong>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            📌 <strong>n</strong> sarà parte di entrambe le chiavi (pubblica e privata)
          </p>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
          <strong className="text-blue-300">🔐 Sicurezza di RSA:</strong>
          <span className="text-gray-300 ml-2">
            La sicurezza si basa sul fatto che è facile moltiplicare due numeri primi (61 × 53),
            ma è molto difficile fattorizzare il risultato (dato 3233, trovare 61 e 53).
            Con numeri grandi, è praticamente impossibile!
          </span>
        </div>
      </div>
    ),
  },

  // Slide 8: Generazione Chiavi Passo 3-5
  {
    id: 18,
    title: 'Generazione Chiavi RSA - Parte 2',
    category: 'asymmetric',
    content: () => (
      <div className="space-y-6">
        <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
          <strong className="text-purple-300 text-lg">PASSO 3: Calcolare φ(n) = (p-1) × (q-1)</strong>
          <div className="mt-4 p-6 bg-gray-800 rounded-lg">
            <div className="text-2xl">
              φ(n) = (61-1) × (53-1) = 60 × 52 = <strong className="text-purple-400">3120</strong>
            </div>
          </div>
        </div>

        <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
          <strong className="text-purple-300 text-lg">PASSO 4: Scegliere e (esponente pubblico)</strong>
          <p className="text-gray-300 mt-2">
            <strong>e</strong> deve soddisfare: 1 &lt; e &lt; φ(n) e MCD(e, φ(n)) = 1
          </p>
          <div className="mt-4 p-6 bg-gray-800 rounded-lg">
            <div className="text-2xl">
              e = <strong className="text-purple-400">17</strong>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              (17 è coprimo con 3120 - non hanno fattori comuni)
            </p>
          </div>
        </div>

        <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
          <strong className="text-purple-300 text-lg">PASSO 5: Calcolare d (esponente privato)</strong>
          <p className="text-gray-300 mt-2">
            <strong>d</strong> deve soddisfare: (d × e) mod φ(n) = 1
          </p>
          <div className="mt-4 p-6 bg-gray-800 rounded-lg">
            <div className="text-2xl">
              d = <strong className="text-purple-400">2753</strong>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Verifica: (2753 × 17) mod 3120 = 46801 mod 3120 = 1 ✓
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 9: Chiavi Finali
  {
    id: 19,
    title: 'Chiavi RSA Generate',
    category: 'asymmetric',
    content: () => (
      <div className="space-y-6">
        <div className="bg-green-900/20 border-l-4 border-green-500 p-8 rounded-r-lg mt-8">
          <h2 className="text-center text-3xl font-bold text-green-300 mb-8">
            🎉 Chiavi Generate con Successo!
          </h2>

          <div className="flex justify-around gap-8 mt-8">
            <div className="flex-1 bg-gray-800 p-8 rounded-lg border-3 border-purple-500">
              <div className="text-center text-6xl mb-4">🔓</div>
              <h3 className="text-center text-2xl font-bold text-purple-300 mb-4">Chiave Pubblica</h3>
              <div className="text-center text-xl mt-6">
                <strong>(e, n)</strong><br />
                <div className="text-3xl text-purple-400 font-bold mt-3">
                  (17, 3233)
                </div>
              </div>
              <p className="text-center mt-6 text-sm text-gray-400">
                ✅ Può essere condivisa pubblicamente
              </p>
            </div>

            <div className="flex-1 bg-gray-800 p-8 rounded-lg border-3 border-red-500">
              <div className="text-center text-6xl mb-4">🔒</div>
              <h3 className="text-center text-2xl font-bold text-red-300 mb-4">Chiave Privata</h3>
              <div className="text-center text-xl mt-6">
                <strong>(d, n)</strong><br />
                <div className="text-3xl text-red-400 font-bold mt-3">
                  (2753, 3233)
                </div>
              </div>
              <p className="text-center mt-6 text-sm text-gray-400">
                ⚠️ Deve rimanere SEGRETA
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
          <strong className="text-blue-300">📝 Riepilogo valori:</strong>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>• p = 61, q = 53 (numeri primi scelti)</li>
            <li>• n = 3233 (modulo, comune a entrambe le chiavi)</li>
            <li>• φ(n) = 3120 (funzione di Eulero)</li>
            <li>• e = 17 (esponente pubblico)</li>
            <li>• d = 2753 (esponente privato)</li>
          </ul>
        </div>
      </div>
    ),
  },

  // Slide 10: Formule Cifratura/Decifratura
  {
    id: 20,
    title: 'Cifratura e Decifratura',
    category: 'asymmetric',
    content: () => (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-purple-300">Le Formule Matematiche di RSA</h3>

        <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-purple-300 mb-6">🔐 CIFRATURA</h3>
          <div className="text-4xl text-purple-400 font-bold mb-6">
            C = M<sup>e</sup> mod n
          </div>
          <p className="text-gray-300">
            Il messaggio M viene elevato alla potenza e, poi si calcola il modulo n
          </p>
        </div>

        <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-purple-300 mb-6">🔓 DECIFRATURA</h3>
          <div className="text-4xl text-purple-400 font-bold mb-6">
            M = C<sup>d</sup> mod n
          </div>
          <p className="text-gray-300">
            Il cifrato C viene elevato alla potenza d, poi si calcola il modulo n
          </p>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">Legenda:</strong>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>• <strong>M</strong> = Messaggio in chiaro (convertito in numero)</li>
            <li>• <strong>C</strong> = Messaggio cifrato (ciphertext)</li>
            <li>• <strong>e</strong> = Esponente pubblico (parte della chiave pubblica)</li>
            <li>• <strong>d</strong> = Esponente privato (parte della chiave privata)</li>
            <li>• <strong>n</strong> = Modulo (comune a entrambe le chiavi)</li>
          </ul>
        </div>
      </div>
    ),
  },

  // Slide 11: Esempio Numerico
  {
    id: 21,
    title: 'Esempio Pratico Completo',
    category: 'asymmetric',
    content: () => (
      <div className="space-y-6">
        <p className="text-gray-300 text-lg mb-6">
          Usiamo le chiavi generate: <strong className="text-purple-300">Pubblica (17, 3233)</strong> e{' '}
          <strong className="text-red-300">Privata (2753, 3233)</strong>
        </p>

        <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4">📤 Alice vuole inviare il numero 123 a Bob</h3>
        </div>

        <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
          <strong className="text-purple-300 text-lg">CIFRATURA (Alice usa la chiave pubblica di Bob):</strong>
          <div className="text-center text-2xl text-purple-400 mt-4">
            C = 123<sup>17</sup> mod 3233
          </div>
          <div className="text-center mt-6">
            <div className="inline-block p-6 bg-gray-800 rounded-lg">
              <strong className="text-gray-300">Calcolo:</strong> 123<sup>17</sup> = 1.8...e+35<br />
              (1.8...e+35) mod 3233 = <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded text-2xl font-bold">855</span>
            </div>
          </div>
        </div>

        <div className="text-center text-2xl text-purple-400 my-8">
          Alice invia → <strong className="text-3xl">855</strong> → Bob
        </div>

        <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
          <strong className="text-purple-300 text-lg">DECIFRATURA (Bob usa la sua chiave privata):</strong>
          <div className="text-center text-2xl text-purple-400 mt-4">
            M = 855<sup>2753</sup> mod 3233
          </div>
          <div className="text-center mt-6">
            <div className="inline-block p-6 bg-gray-800 rounded-lg">
              <strong className="text-gray-300">Calcolo:</strong> 855<sup>2753</sup> = numero enorme<br />
              (numero enorme) mod 3233 = <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded text-2xl font-bold">123</span>
            </div>
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Funziona!</strong>
          <span className="text-gray-300 ml-2">
            Bob ha recuperato il messaggio originale <strong>123</strong>
          </span>
        </div>
      </div>
    ),
  },
];
