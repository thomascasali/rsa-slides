import type { Slide } from '../../types';

export const introSlides: Slide[] = [
  // Slide 1: Titolo Principale
  {
    id: 1,
    title: 'Algoritmo RSA',
    category: 'intro',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
        <div className="text-8xl mb-4">🔐</div>
        <h1 className="text-6xl font-bold text-blue-300 mb-4 text-center">
          Algoritmo RSA
        </h1>
        <h2 className="text-3xl text-gray-300 font-normal text-center">
          Crittografia a Chiave Pubblica
        </h2>
        <p className="text-xl text-gray-400 mt-12 text-center max-w-2xl">
          Una guida completa alla teoria e pratica dell'algoritmo RSA
        </p>
        <div className="mt-16 text-base text-gray-500 text-center">
          Prof. Thomas Casali - ITTS<br />
          Sistemi e Reti - Classe Quinta
        </div>
      </div>
    ),
  },

  // Slide 2: Crittografia Asimmetrica - Intro
  {
    id: 2,
    title: 'La Crittografia Asimmetrica',
    category: 'intro',
    content: () => (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed text-gray-300">
          La <strong className="text-blue-300">crittografia asimmetrica</strong>, detta anche{' '}
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

          <div className="text-5xl text-blue-400 mx-8">⟷</div>

          <div className="flex-1 text-center p-6 bg-purple-900/30 rounded-lg border border-purple-700">
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Chiave Privata</h3>
            <p className="text-gray-300 mb-2">Mantenuta segreta dal proprietario</p>
            <p className="text-purple-400 font-bold text-lg">Usata per DECIFRARE</p>
          </div>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-gray-300">
            <strong className="text-blue-300">💡 Principio Fondamentale:</strong> Ciò che viene cifrato con una chiave può essere decifrato SOLO con l'altra chiave della coppia.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 3: Scambio Chiavi
  {
    id: 3,
    title: 'Come Funziona lo Scambio',
    category: 'intro',
    content: () => (
      <div className="space-y-6">
        <p className="text-gray-300 mb-8 text-lg">
          Per comunicare in modo sicuro, <strong className="text-blue-300">Alice e Bob</strong> devono prima preparare le loro chiavi:
        </p>

        <div className="bg-blue-900/30 border-2 border-blue-700 rounded-lg p-6 mb-4">
          <strong className="text-blue-300 text-lg">PASSO 1:</strong>
          <span className="text-gray-300 ml-2">Ogni utente genera la propria coppia di chiavi (pubblica + privata)</span>
        </div>

        <div className="bg-blue-900/30 border-2 border-blue-700 rounded-lg p-6 mb-4">
          <strong className="text-blue-300 text-lg">PASSO 2:</strong>
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

  // Slide 4: Comunicazione Sicura
  {
    id: 4,
    title: 'Comunicazione Sicura con RSA',
    category: 'intro',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-blue-300 mb-6">Scenario: Alice vuole inviare un messaggio segreto a Bob</h3>

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
            <strong className="text-blue-300">🔄 Comunicazione Bidirezionale:</strong> Per rispondere, Bob cifra con Pub<sub>A</sub>
            e Alice decifra con Pri<sub>A</sub>.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 5: Cos'è RSA
  {
    id: 5,
    title: "L'Algoritmo RSA",
    category: 'intro',
    content: () => (
      <div className="space-y-6">
        <p className="text-xl text-gray-300 mb-8">
          <strong className="text-blue-300">RSA</strong> è l'algoritmo di crittografia asimmetrica più utilizzato al mondo,
          inventato nel <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded font-semibold">1977</span> da:
        </p>

        <div className="flex justify-around my-12">
          <div className="text-center">
            <div className="text-5xl mb-4">👨‍🔬</div>
            <strong className="text-blue-300 text-lg">Ron Rivest</strong>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">👨‍🔬</div>
            <strong className="text-blue-300 text-lg">Adi Shamir</strong>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">👨‍🔬</div>
            <strong className="text-blue-300 text-lg">Leonard Adleman</strong>
          </div>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300 text-lg">🎓 MIT - Massachusetts Institute of Technology</strong>
        </div>

        <h3 className="text-2xl font-bold text-blue-300 mt-12 mb-6">Utilizzi Principali:</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-900/30 border-2 border-blue-700 rounded-lg p-6">
            <strong className="text-blue-300 text-lg">🌐 HTTPS/SSL/TLS</strong><br />
            <span className="text-gray-300">Sicurezza dei siti web</span>
          </div>
          <div className="bg-blue-900/30 border-2 border-blue-700 rounded-lg p-6">
            <strong className="text-blue-300 text-lg">✉️ Email Sicure</strong><br />
            <span className="text-gray-300">PGP/GPG encryption</span>
          </div>
          <div className="bg-blue-900/30 border-2 border-blue-700 rounded-lg p-6">
            <strong className="text-blue-300 text-lg">✍️ Firme Digitali</strong><br />
            <span className="text-gray-300">Autenticazione documenti</span>
          </div>
          <div className="bg-blue-900/30 border-2 border-blue-700 rounded-lg p-6">
            <strong className="text-blue-300 text-lg">🔐 VPN</strong><br />
            <span className="text-gray-300">Connessioni sicure</span>
          </div>
        </div>
      </div>
    ),
  },
];
