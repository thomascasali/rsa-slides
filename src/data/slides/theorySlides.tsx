import type { Slide } from '../../types';

export const theorySlides: Slide[] = [
  // Slide 6: Intro alla Crittografia Asimmetrica
  {
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
    title: 'Algoritmi di Crittografia Asimmetrica',
    category: 'theory',
    content: () => (
      <div className="space-y-6">
        <p className="text-xl text-gray-300 mb-6">
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
              <strong className="text-indigo-300">Problema Matematico:</strong> Fattorizzazione di numeri primi grandi<br />
              <strong className="text-indigo-300">Dimensioni Chiave:</strong> 2048-4096 bit (standard attuale)<br />
              <strong className="text-indigo-300">Uso:</strong> Firme digitali, scambio chiavi, certificati X.509
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
              <strong className="text-purple-300">Problema Matematico:</strong> Logaritmo discreto su curve ellittiche<br />
              <strong className="text-purple-300">Dimensioni Chiave:</strong> 256-384 bit (equivalente a RSA-3072/RSA-7680)<br />
              <strong className="text-purple-300">Uso:</strong> Mobile, IoT, Bitcoin, TLS 1.3 (più efficiente di RSA)
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-900/40 to-green-800/20 border-2 border-green-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">🔄</div>
              <div>
                <h3 className="text-2xl font-bold text-green-300">ECDHE (Elliptic Curve Diffie-Hellman Ephemeral)</h3>
                <p className="text-gray-400 text-sm">Variante moderna di Diffie-Hellman</p>
              </div>
            </div>
            <p className="text-gray-300">
              <strong className="text-green-300">Caratteristica:</strong> Genera chiavi <strong>effimere</strong> (temporanee) per ogni sessione<br />
              <strong className="text-green-300">Vantaggio:</strong> Perfect Forward Secrecy (PFS) - se una chiave viene compromessa, le sessioni precedenti restano sicure<br />
              <strong className="text-green-300">Uso:</strong> TLS 1.3, Signal, WhatsApp, SSH moderno
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 border-2 border-blue-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">🧮</div>
              <div>
                <h3 className="text-2xl font-bold text-blue-300">EdDSA (Edwards-curve Digital Signature Algorithm)</h3>
                <p className="text-gray-400 text-sm">2011 - Daniel J. Bernstein</p>
              </div>
            </div>
            <p className="text-gray-300">
              <strong className="text-blue-300">Curve:</strong> Ed25519 (Curve25519 per firme)<br />
              <strong className="text-blue-300">Vantaggio:</strong> Veloce, sicuro, deterministico (no RNG vulnerabile)<br />
              <strong className="text-blue-300">Uso:</strong> SSH keys, Git commits, cryptocurrencies
            </p>
          </div>
        </div>

        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-lg mt-6">
          <strong className="text-indigo-300 text-lg">🎯 Tendenze Moderne</strong>
          <p className="text-gray-300 mt-2">
            RSA sta gradualmente lasciando spazio a <strong>ECC/ECDHE</strong> per l'efficienza,
            ma rimane fondamentale per comprendere la crittografia asimmetrica. TLS 1.3 preferisce
            <strong> X25519 (ECDHE)</strong> + <strong>EdDSA</strong> rispetto a RSA.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 9b: Modalità di Cifratura Moderne (AES-GCM, ChaCha20-Poly1305)
  {
    id: 18,
    title: 'Modalità di Cifratura Moderne: AEAD',
    category: 'theory',
    content: () => (
      <div className="space-y-6">
        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-lg">
          <h3 className="text-indigo-300 text-2xl font-bold mb-3">AEAD: Authenticated Encryption with Associated Data</h3>
          <p className="text-gray-300 text-lg">
            Le modalità <strong>AEAD</strong> combinano <strong>cifratura + autenticazione</strong> in un'unica operazione,
            garantendo sia <strong>riservatezza</strong> che <strong>integrità</strong> dei dati.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-900/40 to-green-800/20 border-2 border-green-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">🔐</div>
              <div>
                <h3 className="text-2xl font-bold text-green-300">AES-GCM (Galois/Counter Mode)</h3>
                <p className="text-gray-400 text-sm">Standard NIST - Il più utilizzato</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300">
                <strong className="text-green-300">Come Funziona:</strong><br />
                • Cifra i dati con AES in modalità Counter (CTR)<br />
                • Calcola un <strong>tag di autenticazione</strong> usando Galois field multiplication<br />
                • Un unico algoritmo fornisce sia cifratura che MAC (Message Authentication Code)
              </p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-400">
                (Ciphertext, Auth_Tag) = AES_GCM_Encrypt(Plaintext, Key, Nonce)<br />
                // Auth_Tag verifica che il messaggio non sia stato modificato
              </div>
              <p className="text-gray-300">
                <strong className="text-green-300">Vantaggi:</strong><br />
                • Velocissimo su CPU con istruzioni AES-NI + PCLMULQDQ<br />
                • Parallelizzabile (usa più core CPU)<br />
                • Standard industriale (TLS 1.2/1.3, IPsec, WPA3)
              </p>
              <p className="text-gray-300">
                <strong className="text-yellow-300">Limitazione:</strong> Lento su CPU senza supporto hardware
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-900/40 to-purple-800/20 border-2 border-purple-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-5xl">🚀</div>
              <div>
                <h3 className="text-2xl font-bold text-purple-300">ChaCha20-Poly1305</h3>
                <p className="text-gray-400 text-sm">2014 - Daniel J. Bernstein & Adam Langley (Google)</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300">
                <strong className="text-purple-300">Come Funziona:</strong><br />
                • <strong>ChaCha20:</strong> Cifratura stream (non block cipher come AES)<br />
                • <strong>Poly1305:</strong> MAC (autenticazione) velocissimo<br />
                • Progettato per essere veloce senza istruzioni hardware speciali
              </p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-400">
                (Ciphertext, Auth_Tag) = ChaCha20_Poly1305_Encrypt(Plaintext, Key, Nonce)
              </div>
              <p className="text-gray-300">
                <strong className="text-purple-300">Vantaggi:</strong><br />
                • Veloce su <strong>tutti i dispositivi</strong> (mobile, IoT, CPU senza AES-NI)<br />
                • Resistente ai timing attacks<br />
                • Implementazione più semplice e sicura (meno bug)
              </p>
              <p className="text-gray-300">
                <strong className="text-green-300">Uso:</strong> TLS 1.3 (preferito su mobile), WireGuard VPN, Google Chrome/Android
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
            <strong className="text-green-300 text-lg">🏆 AES-GCM: Meglio se...</strong>
            <ul className="text-gray-300 mt-3 space-y-2 text-sm">
              <li>• Hai CPU con AES-NI (Intel/AMD moderne)</li>
              <li>• Serve massima velocità su server</li>
              <li>• Necessaria compatibilità universale</li>
            </ul>
          </div>

          <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <strong className="text-purple-300 text-lg">🏆 ChaCha20-Poly1305: Meglio se...</strong>
            <ul className="text-gray-300 mt-3 space-y-2 text-sm">
              <li>• CPU senza AES-NI (mobile, IoT, ARM)</li>
              <li>• Serve semplicità di implementazione</li>
              <li>• Priorità: sicurezza contro timing attacks</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Nella Pratica</strong>
          <p className="text-gray-300 mt-2">
            TLS 1.3 supporta entrambi e <strong>negozia automaticamente</strong> il migliore:
            AES-GCM su desktop/server, ChaCha20-Poly1305 su mobile. WhatsApp usa AES-256-GCM.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 10: Cos'è RSA
  {
    id: 19,
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
    id: 20,
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
