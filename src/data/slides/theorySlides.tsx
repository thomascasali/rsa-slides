import type { Slide } from '../../types';

export const theorySlides: Slide[] = [
  // Slide 6: Intro alla Crittografia Asimmetrica
  {
    id: 16,
    title: 'La Crittografia Asimmetrica',
    category: 'theory',
    content: () => (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed text-gray-300">
          La <strong className="text-indigo-300">crittografia asimmetrica</strong>, detta anche{' '}
          <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded font-semibold">
            crittografia a chiave pubblica
          </span>
          , utilizza due chiavi diverse ma matematicamente correlate per codificare e decodificare i dati.
        </p>

        <div className="flex items-center justify-around mt-12 mb-12">
          <div className="flex-1 text-center p-6 bg-blue-900/30 rounded-lg border border-blue-700">
            <div className="text-6xl mb-4">🔓</div>
            <h3 className="text-2xl font-bold text-blue-300 mb-2">Chiave Pubblica</h3>
            <p className="text-gray-300 mb-2">Condivisa liberamente con tutti</p>
            <p className="text-blue-400 font-bold text-lg">Usata per CIFRARE</p>
          </div>

          <div className="text-5xl text-indigo-400 mx-8">⟷</div>

          <div className="flex-1 text-center p-6 bg-purple-900/30 rounded-lg border border-purple-700">
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Chiave Privata</h3>
            <p className="text-gray-300 mb-2">Mantenuta segreta dal proprietario</p>
            <p className="text-purple-400 font-bold text-lg">Usata per DECIFRARE</p>
          </div>
        </div>

        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-lg">
          <p className="text-gray-300">
            <strong className="text-indigo-300">💡 Principio Fondamentale:</strong> Ciò che viene cifrato con una chiave può essere decifrato SOLO con l'altra chiave della coppia.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 7: Scambio Chiavi
  {
    id: 17,
    title: 'Come Funziona lo Scambio',
    category: 'theory',
    content: () => (
      <div className="space-y-6">
        <p className="text-gray-300 mb-8 text-lg">
          Per comunicare in modo sicuro, <strong className="text-indigo-300">Alice e Bob</strong> devono prima preparare le loro chiavi:
        </p>

        <div className="bg-indigo-900/30 border-2 border-indigo-700 rounded-lg p-6 mb-4">
          <strong className="text-indigo-300 text-lg">PASSO 1:</strong>
          <span className="text-gray-300 ml-2">Ogni utente genera la propria coppia di chiavi (pubblica + privata)</span>
        </div>

        <div className="bg-indigo-900/30 border-2 border-indigo-700 rounded-lg p-6 mb-4">
          <strong className="text-indigo-300 text-lg">PASSO 2:</strong>
          <span className="text-gray-300 ml-2">Alice e Bob si scambiano solo le chiavi pubbliche</span>
        </div>

        <div className="flex justify-center items-center gap-16 my-12">
          <div className="text-center">
            <div className="text-6xl mb-4">👩‍💼</div>
            <strong className="text-blue-300 text-xl">Alice</strong>
            <div className="mt-4 p-6 bg-blue-900/20 rounded-lg border border-blue-700">
              <div className="text-gray-300">🔓 Pub<sub>A</sub></div>
              <div className="text-red-400 font-bold mt-2">🔒 Pri<sub>A</sub> (segreta)</div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-6xl mb-4">👨‍💼</div>
            <strong className="text-purple-300 text-xl">Bob</strong>
            <div className="mt-4 p-6 bg-purple-900/20 rounded-lg border border-purple-700">
              <div className="text-gray-300">🔓 Pub<sub>B</sub></div>
              <div className="text-red-400 font-bold mt-2">🔒 Pri<sub>B</sub> (segreta)</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">⚠️ Regola d'Oro:</strong>
          <span className="text-gray-300 ml-2">Le chiavi private NON vengono MAI condivise!</span>
        </div>
      </div>
    ),
  },

  // Slide 8: Comunicazione Sicura
  {
    id: 18,
    title: 'Comunicazione Sicura con Crittografia Asimmetrica',
    category: 'theory',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-indigo-300 mb-6">Scenario: Alice vuole inviare un messaggio segreto a Bob</h3>

        <div className="bg-blue-900/30 border-2 border-blue-700 rounded-lg p-6">
          <strong className="text-blue-300 text-lg">1️⃣ Alice cifra con Pub<sub>B</sub></strong>
          <p className="text-gray-300 mt-2">
            Alice prende il suo messaggio e lo cifra usando la <strong>chiave pubblica di Bob</strong>
          </p>
        </div>

        <div className="text-center text-2xl text-blue-400 my-8">
          📝 Messaggio → 🔓 Pub<sub>B</sub> → 🔐 Cifrato
        </div>

        <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
          <strong className="text-purple-300 text-lg">2️⃣ Bob decifra con Pri<sub>B</sub></strong>
          <p className="text-gray-300 mt-2">
            Bob riceve il messaggio cifrato e lo decifra usando la sua <strong>chiave privata</strong>
          </p>
        </div>

        <div className="text-center text-2xl text-purple-400 my-8">
          🔐 Cifrato → 🔒 Pri<sub>B</sub> → 📝 Messaggio
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <p className="text-gray-300">
            <strong className="text-green-300">✅ Sicurezza Garantita:</strong> Solo Bob, che possiede Pri<sub>B</sub>,
            può decifrare il messaggio. Anche se qualcuno intercetta il messaggio cifrato,
            non può leggerlo senza la chiave privata di Bob.
          </p>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mt-4">
          <p className="text-gray-300">
            <strong className="text-indigo-300">🔄 Comunicazione Bidirezionale:</strong> Per rispondere, Bob cifra con Pub<sub>A</sub>
            e Alice decifra con Pri<sub>A</sub>.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 9: Gli Algoritmi Asimmetrici
  {
    id: 19,
    title: 'Algoritmi di Crittografia Asimmetrica',
    category: 'theory',
    content: () => (
      <div className="space-y-6">
        <p className="text-xl text-gray-300 mb-8">
          Esistono diversi algoritmi asimmetrici, basati su problemi matematici complessi:
        </p>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-indigo-900/40 to-indigo-800/20 border-2 border-indigo-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">🔐</div>
              <div>
                <h3 className="text-2xl font-bold text-indigo-300">RSA (Rivest-Shamir-Adleman)</h3>
                <p className="text-gray-400 text-sm">1977 - MIT</p>
              </div>
            </div>
            <p className="text-gray-300">
              <strong className="text-indigo-300">Problema:</strong> Fattorizzazione di numeri primi grandi<br />
              <strong className="text-indigo-300">Uso:</strong> Il più diffuso al mondo (HTTPS, email, firme digitali)
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border-2 border-purple-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">📐</div>
              <div>
                <h3 className="text-2xl font-bold text-purple-300">ECC (Elliptic Curve Cryptography)</h3>
                <p className="text-gray-400 text-sm">1985 - Miller & Koblitz</p>
              </div>
            </div>
            <p className="text-gray-300">
              <strong className="text-purple-300">Problema:</strong> Logaritmo discreto su curve ellittiche<br />
              <strong className="text-purple-300">Uso:</strong> Chiavi più corte con sicurezza equivalente (mobile, IoT)
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 border-2 border-blue-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">🧮</div>
              <div>
                <h3 className="text-2xl font-bold text-blue-300">ElGamal</h3>
                <p className="text-gray-400 text-sm">1985 - Taher ElGamal</p>
              </div>
            </div>
            <p className="text-gray-300">
              <strong className="text-blue-300">Problema:</strong> Logaritmo discreto in gruppi finiti<br />
              <strong className="text-blue-300">Uso:</strong> Crittografia e firme digitali (GPG)
            </p>
          </div>
        </div>

        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-lg mt-8">
          <strong className="text-indigo-300">🎯 Focus del Corso</strong>
          <p className="text-gray-300 mt-2">
            In questa dispensa ci concentreremo su <strong>RSA</strong>, l'algoritmo più utilizzato
            e didatticamente più accessibile per comprendere i principi della crittografia asimmetrica.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 10: Cos'è RSA
  {
    id: 20,
    title: "L'Algoritmo RSA",
    category: 'theory',
    content: () => (
      <div className="space-y-6">
        <p className="text-xl text-gray-300 mb-8">
          <strong className="text-indigo-300">RSA</strong> è l'algoritmo di crittografia asimmetrica più utilizzato al mondo,
          inventato nel <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded font-semibold">1977</span> da:
        </p>

        <div className="flex justify-around my-12">
          <div className="text-center">
            <div className="text-5xl mb-4">👨‍🔬</div>
            <strong className="text-indigo-300 text-lg">Ron Rivest</strong>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">👨‍🔬</div>
            <strong className="text-indigo-300 text-lg">Adi Shamir</strong>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">👨‍🔬</div>
            <strong className="text-indigo-300 text-lg">Leonard Adleman</strong>
          </div>
        </div>

        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-lg">
          <strong className="text-indigo-300 text-lg">🎓 MIT - Massachusetts Institute of Technology</strong>
        </div>

        <h3 className="text-2xl font-bold text-indigo-300 mt-12 mb-6">Utilizzi Principali:</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-indigo-900/30 border-2 border-indigo-700 rounded-lg p-6">
            <strong className="text-indigo-300 text-lg">🌐 HTTPS/SSL/TLS</strong><br />
            <span className="text-gray-300">Sicurezza dei siti web</span>
          </div>
          <div className="bg-indigo-900/30 border-2 border-indigo-700 rounded-lg p-6">
            <strong className="text-indigo-300 text-lg">✉️ Email Sicure</strong><br />
            <span className="text-gray-300">PGP/GPG encryption</span>
          </div>
          <div className="bg-indigo-900/30 border-2 border-indigo-700 rounded-lg p-6">
            <strong className="text-indigo-300 text-lg">✍️ Firme Digitali</strong><br />
            <span className="text-gray-300">Autenticazione documenti</span>
          </div>
          <div className="bg-indigo-900/30 border-2 border-indigo-700 rounded-lg p-6">
            <strong className="text-indigo-300 text-lg">🔐 VPN</strong><br />
            <span className="text-gray-300">Connessioni sicure</span>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 11: Base Matematica
  {
    id: 21,
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
