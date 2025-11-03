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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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

  // Slide 13: Confronto Simmetrica vs Asimmetrica
  {
    id: 13,
    title: 'Simmetrica vs Asimmetrica',
    category: 'symmetric',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300 mb-4">⚔️ Il Grande Confronto</h3>

        <ComparisonTable>
          <thead>
            <tr className="bg-green-900/30 border-b-2 border-green-700">
              <th className="text-left p-4 text-green-300 font-bold">Aspetto</th>
              <th className="text-left p-4 text-green-300 font-bold">🔑 Simmetrica (AES)</th>
              <th className="text-left p-4 text-purple-300 font-bold">🔐 Asimmetrica (RSA)</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Numero Chiavi</td>
              <td className="p-4"><strong className="text-green-300">1 chiave</strong> condivisa</td>
              <td className="p-4"><strong className="text-purple-300">2 chiavi</strong> (pubblica + privata)</td>
            </tr>
            <tr className="bg-gray-800/50 border-b border-gray-700">
              <td className="p-4 font-bold">Velocità</td>
              <td className="p-4 text-green-400">✅ Molto veloce<br />(GB/s)</td>
              <td className="p-4 text-yellow-400">⚠️ Lenta<br />(KB/s)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Dimensioni Chiave</td>
              <td className="p-4">128-256 bit</td>
              <td className="p-4">2048-4096 bit</td>
            </tr>
            <tr className="bg-gray-800/50 border-b border-gray-700">
              <td className="p-4 font-bold">Uso Tipico</td>
              <td className="p-4">Cifrare <strong className="text-green-300">grandi quantità di dati</strong></td>
              <td className="p-4">Cifrare <strong className="text-purple-300">piccole quantità</strong> (chiavi, firme)</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Scambio Chiave</td>
              <td className="p-4 text-red-400">❌ Problema:<br />come condividere K?</td>
              <td className="p-4 text-green-400">✅ Nessun problema:<br />pubblica è... pubblica!</td>
            </tr>
            <tr className="bg-gray-800/50 border-b border-gray-700">
              <td className="p-4 font-bold">Scalabilità</td>
              <td className="p-4 text-yellow-400">⚠️ N utenti = N(N-1)/2 chiavi</td>
              <td className="p-4 text-green-400">✅ N utenti = 2N chiavi</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-4 font-bold">Firme Digitali</td>
              <td className="p-4 text-red-400">❌ Non supportate</td>
              <td className="p-4 text-green-400">✅ Nativamente supportate</td>
            </tr>
            <tr className="bg-gray-800/50">
              <td className="p-4 font-bold">Complessità Matematica</td>
              <td className="p-4">Permutazioni e sostituzioni</td>
              <td className="p-4">Aritmetica modulare, numeri primi</td>
            </tr>
          </tbody>
        </ComparisonTable>
      </div>
    ),
  },

  // Slide 14: Benchmark Prestazionali
  {
    id: 14,
    title: 'Benchmark Prestazionali',
    category: 'symmetric',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300 mb-4">⚡ Confronto Velocità</h3>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">Test su CPU Intel Core i7 moderna con AES-NI</strong><br />
          <span className="text-gray-400 text-sm">Cifratura di un file da 1 GB</span>
        </div>

        <div className="space-y-4">
          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
            <div className="flex justify-between items-center mb-2">
              <strong className="text-green-300 text-xl">AES-128</strong>
              <span className="text-green-300 font-bold text-2xl">~0.2 secondi</span>
            </div>
            <div className="bg-green-600 h-4 rounded" style={{ width: '100%' }}></div>
            <div className="text-gray-400 mt-2">~5 GB/s</div>
          </div>

          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
            <div className="flex justify-between items-center mb-2">
              <strong className="text-green-300 text-xl">AES-256</strong>
              <span className="text-green-300 font-bold text-2xl">~0.3 secondi</span>
            </div>
            <div className="bg-green-500 h-4 rounded" style={{ width: '85%' }}></div>
            <div className="text-gray-400 mt-2">~3.3 GB/s</div>
          </div>

          <div className="bg-yellow-900/30 border-2 border-yellow-700 rounded-lg p-6">
            <div className="flex justify-between items-center mb-2">
              <strong className="text-yellow-300 text-xl">3DES</strong>
              <span className="text-yellow-300 font-bold text-2xl">~3 secondi</span>
            </div>
            <div className="bg-yellow-600 h-4 rounded" style={{ width: '20%' }}></div>
            <div className="text-gray-400 mt-2">~330 MB/s</div>
          </div>

          <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6">
            <div className="flex justify-between items-center mb-2">
              <strong className="text-red-300 text-xl">RSA-2048</strong>
              <span className="text-red-300 font-bold text-2xl">~14 ore</span>
            </div>
            <div className="bg-red-600 h-4 rounded" style={{ width: '1%' }}></div>
            <div className="text-gray-400 mt-2">~20 KB/s (245 byte/operazione max)</div>
          </div>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300 text-lg">⚠️ Nota su RSA:</strong><br />
          <p className="text-gray-300 mt-2">
            RSA non è progettato per cifrare file grandi! Può cifrare max <strong>~245 byte</strong> per operazione
            con chiavi 2048 bit. Per 1 GB servirebbero <strong>4.3 milioni di operazioni</strong> → impraticabile!
          </p>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-xl">💡 Conclusione:</strong><br />
          <p className="text-gray-300 mt-2">
            AES è <strong className="text-green-300">~25.000 volte più veloce</strong> di RSA per cifrare grandi quantità di dati.
            Ecco perché si usa la <strong>cifratura ibrida</strong>!
          </p>
        </div>
      </div>
    ),
  },

  // Slide 15: Cifratura Ibrida - La Soluzione
  {
    id: 15,
    title: 'Cifratura Ibrida: Il Meglio di Entrambi',
    category: 'symmetric',
    content: () => (
      <div className="space-y-6">
        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-green-300 text-2xl font-bold mb-3">💡 L'Idea Geniale</h3>
          <p className="text-gray-300 text-lg">
            La <strong className="text-green-300">cifratura ibrida</strong> combina i vantaggi di entrambi i metodi:
            usa <strong className="text-green-300">AES</strong> per la velocità e <strong className="text-purple-300">RSA</strong> per lo scambio sicuro delle chiavi!
          </p>
        </div>

        <h3 className="text-2xl font-bold text-green-300 mb-4">🔄 Come Funziona (HTTPS, VPN, Email)</h3>

        <div className="space-y-4">
          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="inline-block w-10 h-10 bg-green-600 text-white rounded-full text-center leading-10 font-bold">1</span>
              <strong className="text-green-300 text-lg">Alice genera una chiave AES casuale</strong>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-400">
              K<sub>AES</sub> = random_256_bit_key()<br />
              // Esempio: a3f8b2... (32 byte casuali)
            </div>
          </div>

          <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="inline-block w-10 h-10 bg-purple-600 text-white rounded-full text-center leading-10 font-bold">2</span>
              <strong className="text-purple-300 text-lg">Alice cifra K<sub>AES</sub> con la chiave pubblica RSA di Bob</strong>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-400">
              K<sub>AES_cifrata</sub> = RSA_Encrypt(K<sub>AES</sub>, Bob_PublicKey)<br />
              // Solo 32 byte → RSA può gestirli!
            </div>
          </div>

          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="inline-block w-10 h-10 bg-green-600 text-white rounded-full text-center leading-10 font-bold">3</span>
              <strong className="text-green-300 text-lg">Alice cifra il messaggio/file con AES</strong>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-400">
              Messaggio_Cifrato = AES_Encrypt(Messaggio, K<sub>AES</sub>)<br />
              // Velocissimo anche per GB di dati!
            </div>
          </div>

          <div className="bg-blue-900/30 border-2 border-blue-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="inline-block w-10 h-10 bg-blue-600 text-white rounded-full text-center leading-10 font-bold">4</span>
              <strong className="text-blue-300 text-lg">Alice invia a Bob: K<sub>AES_cifrata</sub> + Messaggio_Cifrato</strong>
            </div>
          </div>

          <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="inline-block w-10 h-10 bg-purple-600 text-white rounded-full text-center leading-10 font-bold">5</span>
              <strong className="text-purple-300 text-lg">Bob decifra K<sub>AES</sub> con la sua chiave privata RSA</strong>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-400">
              K<sub>AES</sub> = RSA_Decrypt(K<sub>AES_cifrata</sub>, Bob_PrivateKey)
            </div>
          </div>

          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="inline-block w-10 h-10 bg-green-600 text-white rounded-full text-center leading-10 font-bold">6</span>
              <strong className="text-green-300 text-lg">Bob decifra il messaggio con K<sub>AES</sub></strong>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-400">
              Messaggio = AES_Decrypt(Messaggio_Cifrato, K<sub>AES</sub>)
            </div>
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-xl">✅ Risultato:</strong><br />
          <ul className="text-gray-300 mt-3 space-y-2">
            <li>• <strong>Sicurezza:</strong> Chiave AES scambiata in modo sicuro via RSA</li>
            <li>• <strong>Velocità:</strong> Dati cifrati velocemente con AES</li>
            <li>• <strong>Praticità:</strong> Funziona per qualsiasi dimensione di dati</li>
          </ul>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">🌐 Applicazioni Reali:</strong><br />
          <span className="text-gray-300">
            Questo è esattamente come funzionano <strong>HTTPS, VPN, SSH, Signal, WhatsApp</strong> e praticamente
            tutti i protocolli di comunicazione sicura moderni!
          </span>
        </div>
      </div>
    ),
  },

  // Slide 16: Conclusioni Crittografia Simmetrica
  {
    id: 16,
    title: 'Conclusioni Crittografia Simmetrica',
    category: 'symmetric',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
        <h2 className="text-5xl font-bold text-green-300 mb-4 text-center">
          Riassunto
        </h2>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-8 rounded-r-lg max-w-3xl w-full">
          <strong className="text-green-300 text-2xl">✅ Concetti Chiave:</strong>
          <ul className="mt-6 space-y-3 text-gray-300 text-lg">
            <li>• <strong>Simmetrica</strong> = 1 chiave condivisa per cifrare e decifrare</li>
            <li>• <strong>DES:</strong> Obsoleto (56 bit), violabile in ore</li>
            <li>• <strong>3DES:</strong> Più sicuro ma deprecato, 3x più lento</li>
            <li>• <strong>AES:</strong> Standard moderno (128/192/256 bit), velocissimo e sicuro</li>
            <li>• <strong>AES vs RSA:</strong> AES ~25.000x più veloce per grandi dati</li>
            <li>• <strong>Cifratura ibrida:</strong> RSA per scambiare chiave + AES per dati</li>
          </ul>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-8 rounded-r-lg max-w-3xl w-full">
          <strong className="text-blue-300 text-2xl">🎯 Regola Pratica:</strong>
          <p className="text-gray-300 mt-4 text-lg">
            <strong className="text-green-300">Usa AES</strong> quando hai già una chiave condivisa sicura.<br />
            <strong className="text-purple-300">Usa RSA</strong> per scambiare la chiave AES o per firme digitali.<br />
            <strong className="text-yellow-300">Usa entrambi</strong> (ibrido) per comunicazioni sicure reali!
          </p>
        </div>

        <div className="text-center mt-12">
          <div className="text-8xl mb-6">🔐</div>
          <h2 className="text-3xl font-bold text-green-300 mb-4">Prossimo: Crittografia Asimmetrica (RSA)</h2>
        </div>
      </div>
    ),
  },
];
