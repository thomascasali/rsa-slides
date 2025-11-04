import type { Slide } from '../../types';

// Componente helper per tabelle di confronto
const ComparisonTable = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      {children}
    </table>
  </div>
);

export const symmetricSlides: Slide[] = [
  // Slide 7: Titolo Crittografia Simmetrica
  {
    id: 11,
    title: 'Crittografia Simmetrica',
    category: 'symmetric',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
        <div className="text-8xl mb-4">🔑</div>
        <h1 className="text-6xl font-bold text-green-300 mb-4 text-center">
          Crittografia Simmetrica
        </h1>
        <h2 className="text-3xl text-gray-300 font-normal text-center">
          Una Chiave per Cifrare e Decifrare
        </h2>
        <p className="text-xl text-gray-400 mt-12 text-center max-w-3xl">
          Esploriamo gli algoritmi DES, 3DES e AES che utilizzano
          <strong className="text-green-300"> la stessa chiave </strong>
          per cifrare e decifrare i messaggi
        </p>
        <div className="mt-16 text-base text-gray-500 text-center">
          Prof. Thomas Casali - ITTS<br />
          Sistemi e Reti - Classe Quinta
        </div>
      </div>
    ),
  },

  // Slide 8: Cos'è la Crittografia Simmetrica
  {
    id: 12,
    title: 'Cos\'è la Crittografia Simmetrica?',
    category: 'symmetric',
    content: () => (
      <div className="space-y-6">
        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-green-300 text-2xl font-bold mb-3">Definizione</h3>
          <p className="text-gray-300 text-lg">
            La <strong className="text-green-300">crittografia simmetrica</strong> utilizza
            <strong> una sola chiave segreta </strong> condivisa tra mittente e destinatario
            per <strong>cifrare</strong> e <strong>decifrare</strong> i messaggi.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-green-300 mt-8 mb-4">🔄 Come Funziona</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
            <div className="text-4xl text-center mb-4">🔒</div>
            <h4 className="text-green-300 font-bold text-xl mb-3">1. Cifratura</h4>
            <p className="text-gray-300">
              Alice usa la <strong className="text-green-300">chiave K</strong> per cifrare il messaggio M:
            </p>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 mt-3">
              C = Encrypt<sub>K</sub>(M)
            </div>
          </div>

          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
            <div className="text-4xl text-center mb-4">🔓</div>
            <h4 className="text-green-300 font-bold text-xl mb-3">2. Decifratura</h4>
            <p className="text-gray-300">
              Bob usa la <strong className="text-green-300">stessa chiave K</strong> per decifrare:
            </p>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 mt-3">
              M = Decrypt<sub>K</sub>(C)
            </div>
          </div>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
          <strong className="text-yellow-300 text-lg">⚠️ Problema Chiave:</strong><br />
          <span className="text-gray-300">
            Come fanno Alice e Bob a <strong>condividere la chiave K</strong> in modo sicuro?
            Se un attaccante intercetta K, può decifrare tutti i messaggi!
          </span>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Vantaggi:</strong><br />
          <ul className="text-gray-300 mt-2 space-y-1">
            <li>• <strong>Velocità:</strong> Molto più veloce di RSA (100-1000x)</li>
            <li>• <strong>Efficienza:</strong> Ideale per cifrare grandi quantità di dati</li>
            <li>• <strong>Semplicità:</strong> Implementazione meno complessa</li>
          </ul>
        </div>
      </div>
    ),
  },

  // Slide 9: DES (Data Encryption Standard)
  {
    id: 13,
    title: 'DES - Data Encryption Standard',
    category: 'symmetric',
    content: () => (
      <div className="space-y-6">
        <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
          <h3 className="text-green-300 font-bold text-2xl mb-4">📜 Storia</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Sviluppato da <strong>IBM</strong> negli anni '70</li>
            <li>• Adottato come standard dal governo USA nel <strong>1977</strong></li>
            <li>• Utilizzato per decenni in applicazioni bancarie e commerciali</li>
            <li>• <span className="text-red-300 font-bold">Deprecato nel 2005</span> (non più sicuro)</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-green-300 mb-4">🔧 Caratteristiche Tecniche</h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-800 border-2 border-green-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-300 mb-2">56 bit</div>
            <div className="text-gray-400">Lunghezza Chiave</div>
          </div>
          <div className="bg-gray-800 border-2 border-green-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-300 mb-2">64 bit</div>
            <div className="text-gray-400">Blocco di Dati</div>
          </div>
          <div className="bg-gray-800 border-2 border-green-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-300 mb-2">16</div>
            <div className="text-gray-400">Rounds (iterazioni)</div>
          </div>
        </div>

        <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
          <h4 className="text-green-300 font-bold text-lg mb-3">Come Funziona</h4>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Divide il messaggio in blocchi da <strong>64 bit</strong></li>
            <li>Applica 16 round di <strong>permutazioni e sostituzioni</strong></li>
            <li>Ogni round usa una <strong>sottochiave</strong> derivata dalla chiave principale</li>
            <li>Produce il testo cifrato finale</li>
          </ol>
        </div>

        <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
          <strong className="text-red-300 text-lg">❌ Perché DES è Insicuro Oggi?</strong><br />
          <p className="text-gray-300 mt-2">
            Con solo <strong>56 bit di chiave</strong>, ci sono solo 2<sup>56</sup> ≈ 72 quadrilioni di chiavi possibili.
            I computer moderni possono testare <strong>miliardi di chiavi al secondo</strong> e violare DES in poche ore
            tramite <strong>attacco brute-force</strong>.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-green-700">
          <strong className="text-green-300">📊 Esempio Attacco:</strong><br />
          <p className="text-gray-300 mt-2">
            Nel 1998, la Electronic Frontier Foundation (EFF) costruì un computer specializzato chiamato
            <strong className="text-yellow-300"> "Deep Crack" </strong>
            che violò DES in <strong className="text-red-300">56 ore</strong>. Oggi sarebbe questione di minuti.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 10: 3DES (Triple DES)
  {
    id: 14,
    title: '3DES - Triple DES',
    category: 'symmetric',
    content: () => (
      <div className="space-y-6">
        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-green-300 text-2xl font-bold mb-3">Cos'è 3DES?</h3>
          <p className="text-gray-300 text-lg">
            <strong className="text-green-300">Triple DES (3DES)</strong> è una versione migliorata di DES
            che applica l'algoritmo DES <strong>tre volte</strong> con chiavi diverse per aumentare la sicurezza.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-green-300 mb-4">🔄 Come Funziona (EDE Mode)</h3>

        <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold">1. Encrypt</div>
              <div className="text-gray-300">Cifra con chiave K<sub>1</sub></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-600 text-white px-4 py-2 rounded font-bold">2. Decrypt</div>
              <div className="text-gray-300">Decifra con chiave K<sub>2</sub></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold">3. Encrypt</div>
              <div className="text-gray-300">Cifra con chiave K<sub>3</sub></div>
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-green-400 mt-4">
            C = E<sub>K3</sub>( D<sub>K2</sub>( E<sub>K1</sub>(M) ) )
          </div>
        </div>

        <h3 className="text-2xl font-bold text-green-300 mb-4">📊 Caratteristiche</h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 border-2 border-green-700 rounded-lg p-6">
            <h4 className="text-green-300 font-bold mb-3">Lunghezza Chiave</h4>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>168 bit effettivi</strong> (3 × 56 bit)</li>
              <li>• Sicurezza equivalente: ~112 bit</li>
              <li>• Molto più sicuro di DES singolo</li>
            </ul>
          </div>
          <div className="bg-gray-800 border-2 border-green-700 rounded-lg p-6">
            <h4 className="text-green-300 font-bold mb-3">Prestazioni</h4>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong className="text-yellow-300">3x più lento</strong> di DES</li>
              <li>• Ancora accettabile per molti usi</li>
              <li>• Compatibile con hardware DES esistente</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300 text-lg">⚠️ Stato Attuale:</strong><br />
          <p className="text-gray-300 mt-2">
            3DES è considerato <strong>sicuro ma obsoleto</strong>. Il NIST (National Institute of Standards and Technology)
            ha deprecato 3DES nel 2023 e raccomanda di migrare ad <strong className="text-green-300">AES</strong>.
          </p>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Curiosità:</strong><br />
          <p className="text-gray-300 mt-2">
            La "D" (Decrypt) nel mezzo serve per <strong>retrocompatibilità</strong>: usando K<sub>1</sub> = K<sub>2</sub> = K<sub>3</sub>,
            3DES si comporta esattamente come DES standard.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 11: AES - Advanced Encryption Standard
  {
    id: 15,
    title: 'AES - Advanced Encryption Standard',
    category: 'symmetric',
    content: () => (
      <div className="space-y-6">
        <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
          <h3 className="text-green-300 font-bold text-2xl mb-4">🏆 Lo Standard Moderno</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• Sviluppato da crittografi belgi <strong>Joan Daemen e Vincent Rijmen</strong></li>
            <li>• Originariamente chiamato <strong className="text-green-300">Rijndael</strong></li>
            <li>• Adottato dal NIST come standard nel <strong>2001</strong></li>
            <li>• Utilizzato da <strong>governi, banche, VPN, HTTPS</strong> in tutto il mondo</li>
            <li>• Considerato <strong className="text-green-300">sicuro e non violabile</strong> con le tecnologie attuali</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-green-300 mb-4">🔧 Tre Varianti</h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-800 border-2 border-green-700 rounded-lg p-6 text-center">
            <div className="text-green-300 font-bold text-xl mb-3">AES-128</div>
            <div className="text-4xl font-bold text-gray-300 mb-2">128 bit</div>
            <div className="text-gray-400 mb-3">Chiave</div>
            <div className="text-2xl font-bold text-green-300">10</div>
            <div className="text-gray-400">Rounds</div>
          </div>
          <div className="bg-gray-800 border-2 border-yellow-700 rounded-lg p-6 text-center">
            <div className="text-yellow-300 font-bold text-xl mb-3">AES-192</div>
            <div className="text-4xl font-bold text-gray-300 mb-2">192 bit</div>
            <div className="text-gray-400 mb-3">Chiave</div>
            <div className="text-2xl font-bold text-yellow-300">12</div>
            <div className="text-gray-400">Rounds</div>
          </div>
          <div className="bg-gray-800 border-2 border-blue-700 rounded-lg p-6 text-center">
            <div className="text-blue-300 font-bold text-xl mb-3">AES-256</div>
            <div className="text-4xl font-bold text-gray-300 mb-2">256 bit</div>
            <div className="text-gray-400 mb-3">Chiave</div>
            <div className="text-2xl font-bold text-blue-300">14</div>
            <div className="text-gray-400">Rounds</div>
          </div>
        </div>

        <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
          <h4 className="text-green-300 font-bold text-lg mb-3">Caratteristiche Tecniche</h4>
          <ul className="text-gray-300 space-y-2">
            <li>• Blocchi di dati: <strong>128 bit</strong> (fisso per tutte le varianti)</li>
            <li>• Algoritmo basato su <strong>rete di sostituzione-permutazione</strong></li>
            <li>• Ogni round applica: SubBytes, ShiftRows, MixColumns, AddRoundKey</li>
            <li>• <strong>Molto veloce</strong> sia in software che hardware</li>
            <li>• Supporto nativo in processori moderni (AES-NI instruction set)</li>
          </ul>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300 text-lg">💡 Quanto è Sicuro AES-256?</strong><br />
          <p className="text-gray-300 mt-2">
            Con 2<sup>256</sup> chiavi possibili (circa 10<sup>77</sup>), un attacco brute-force richiederebbe
            <strong className="text-green-300"> più tempo dell'età dell'universo</strong>, anche usando tutti i supercomputer del mondo!
          </p>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300">🚀 Prestazioni:</strong><br />
          <p className="text-gray-300 mt-2">
            AES-128 può cifrare <strong>diversi GB/s</strong> su processori moderni con AES-NI.
            È <strong className="text-green-300">100-1000 volte più veloce</strong> di RSA-2048!
          </p>
        </div>
      </div>
    ),
  },

  // Slide 12: Confronto DES vs 3DES vs AES
  {
    id: 11,
    title: 'Confronto: DES vs 3DES vs AES',
    category: 'symmetric',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300 mb-4">📊 Tabella Comparativa</h3>

        <ComparisonTable>
          <thead>
            <tr className="bg-green-900/30 border-b-2 border-green-700">
              <th className="text-left p-4 text-green-300 font-bold">Caratteristica</th>
              <th className="text-left p-4 text-green-300 font-bold">DES</th>
              <th className="text-left p-4 text-green-300 font-bold">3DES</th>
              <th className="text-left p-4 text-green-300 font-bold">AES</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Anno Adozione</td>
              <td className="p-4">1977</td>
              <td className="p-4">1998</td>
              <td className="p-4">2001</td>
            </tr>
            <tr className="bg-gray-800/50 border-b border-gray-700">
              <td className="p-4 font-bold">Lunghezza Chiave</td>
              <td className="p-4">56 bit</td>
              <td className="p-4">168 bit (effettivi: 112)</td>
              <td className="p-4">128, 192, 256 bit</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Dimensione Blocco</td>
              <td className="p-4">64 bit</td>
              <td className="p-4">64 bit</td>
              <td className="p-4">128 bit</td>
            </tr>
            <tr className="bg-gray-800/50 border-b border-gray-700">
              <td className="p-4 font-bold">Numero di Rounds</td>
              <td className="p-4">16</td>
              <td className="p-4">48 (16×3)</td>
              <td className="p-4">10/12/14</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Sicurezza</td>
              <td className="p-4 text-red-400">❌ Insicuro</td>
              <td className="p-4 text-yellow-400">⚠️ Obsoleto</td>
              <td className="p-4 text-green-400">✅ Sicuro</td>
            </tr>
            <tr className="bg-gray-800/50 border-b border-gray-700">
              <td className="p-4 font-bold">Velocità Relativa</td>
              <td className="p-4">Baseline (1x)</td>
              <td className="p-4 text-yellow-300">~0.33x (3x più lento)</td>
              <td className="p-4 text-green-300">~5x (più veloce)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Supporto Hardware</td>
              <td className="p-4">Legacy</td>
              <td className="p-4">Legacy</td>
              <td className="p-4 text-green-300">AES-NI (CPU moderne)</td>
            </tr>
            <tr className="bg-gray-800/50">
              <td className="p-4 font-bold">Status 2025</td>
              <td className="p-4 text-red-400">Deprecato (2005)</td>
              <td className="p-4 text-yellow-400">Deprecato (2023)</td>
              <td className="p-4 text-green-400">Standard attuale</td>
            </tr>
          </tbody>
        </ComparisonTable>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-xl">🏆 Vincitore: AES</strong><br />
          <p className="text-gray-300 mt-2">
            AES offre il miglior equilibrio tra <strong>sicurezza, velocità e flessibilità</strong>.
            È lo standard consigliato per tutte le nuove implementazioni.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 12: Confronto DES vs 3DES vs AES
  {
    id: 11,
    title: 'Confronto: DES vs 3DES vs AES',
    category: 'symmetric',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300 mb-4">📊 Tabella Comparativa</h3>

        <ComparisonTable>
          <thead>
            <tr className="bg-green-900/30 border-b-2 border-green-700">
              <th className="text-left p-4 text-green-300 font-bold">Caratteristica</th>
              <th className="text-left p-4 text-green-300 font-bold">DES</th>
              <th className="text-left p-4 text-green-300 font-bold">3DES</th>
              <th className="text-left p-4 text-green-300 font-bold">AES</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Anno Adozione</td>
              <td className="p-4">1977</td>
              <td className="p-4">1998</td>
              <td className="p-4">2001</td>
            </tr>
            <tr className="bg-gray-800/50 border-b border-gray-700">
              <td className="p-4 font-bold">Lunghezza Chiave</td>
              <td className="p-4">56 bit</td>
              <td className="p-4">168 bit (effettivi: 112)</td>
              <td className="p-4">128, 192, 256 bit</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Dimensione Blocco</td>
              <td className="p-4">64 bit</td>
              <td className="p-4">64 bit</td>
              <td className="p-4">128 bit</td>
            </tr>
            <tr className="bg-gray-800/50 border-b border-gray-700">
              <td className="p-4 font-bold">Numero di Rounds</td>
              <td className="p-4">16</td>
              <td className="p-4">48 (16×3)</td>
              <td className="p-4">10/12/14</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Sicurezza</td>
              <td className="p-4 text-red-400">❌ Insicuro</td>
              <td className="p-4 text-yellow-400">⚠️ Obsoleto</td>
              <td className="p-4 text-green-400">✅ Sicuro</td>
            </tr>
            <tr className="bg-gray-800/50 border-b border-gray-700">
              <td className="p-4 font-bold">Velocità Relativa</td>
              <td className="p-4">Baseline (1x)</td>
              <td className="p-4 text-yellow-300">~0.33x (3x più lento)</td>
              <td className="p-4 text-green-300">~5x (più veloce)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Supporto Hardware</td>
              <td className="p-4">Legacy</td>
              <td className="p-4">Legacy</td>
              <td className="p-4 text-green-300">AES-NI (CPU moderne)</td>
            </tr>
            <tr className="bg-gray-800/50">
              <td className="p-4 font-bold">Status 2025</td>
              <td className="p-4 text-red-400">Deprecato (2005)</td>
              <td className="p-4 text-yellow-400">Deprecato (2023)</td>
              <td className="p-4 text-green-400">Standard attuale</td>
            </tr>
          </tbody>
        </ComparisonTable>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-xl">🏆 Vincitore: AES</strong><br />
          <p className="text-gray-300 mt-2">
            AES offre il miglior equilibrio tra <strong>sicurezza, velocità e flessibilità</strong>.
            È lo standard consigliato per tutte le nuove implementazioni.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 15: Conclusioni Crittografia Simmetrica
  {
    id: 15,
    title: 'Riepilogo: Crittografia Simmetrica',
    category: 'symmetric',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
        <h2 className="text-5xl font-bold text-green-300 mb-4 text-center">
          Riepilogo
        </h2>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-8 rounded-r-lg max-w-3xl w-full">
          <strong className="text-green-300 text-2xl">✅ Concetti Chiave:</strong>
          <ul className="mt-6 space-y-3 text-gray-300 text-lg">
            <li>• <strong>Simmetrica</strong> = 1 chiave condivisa per cifrare e decifrare</li>
            <li>• <strong>DES:</strong> Obsoleto (56 bit), violabile in ore con brute-force</li>
            <li>• <strong>3DES:</strong> Più sicuro (168 bit) ma deprecato dal 2023, 3x più lento</li>
            <li>• <strong>AES:</strong> Standard moderno e sicuro (128/192/256 bit)</li>
            <li>• <strong>Velocità:</strong> AES è velocissimo (GB/s) grazie alle istruzioni AES-NI</li>
            <li>• <strong>Problema:</strong> Come condividere la chiave segreta in modo sicuro?</li>
          </ul>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-8 rounded-r-lg max-w-3xl w-full">
          <strong className="text-yellow-300 text-2xl">⚠️ Limitazione Principale:</strong>
          <p className="text-gray-300 mt-4 text-lg">
            La crittografia simmetrica richiede che mittente e destinatario <strong>condividano
            la stessa chiave segreta</strong>. Come possono scambiarsela in modo sicuro su Internet,
            dove chiunque può intercettare le comunicazioni?
          </p>
        </div>

        <div className="text-center mt-12">
          <div className="text-8xl mb-6">🔐</div>
          <h2 className="text-3xl font-bold text-indigo-300 mb-4">Prossimo: Crittografia Asimmetrica</h2>
          <p className="text-gray-400 text-lg">Risolviamo il problema dello scambio chiavi!</p>
        </div>
      </div>
    ),
  },
];
