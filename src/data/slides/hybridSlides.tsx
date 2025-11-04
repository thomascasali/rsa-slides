import type { Slide } from '../../types';

// Componente helper per tabelle di confronto
const ComparisonTable = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      {children}
    </table>
  </div>
);

export const hybridSlides: Slide[] = [
  // Slide 28: Simmetrica vs Asimmetrica - Confronto Dettagliato
  {
    id: 31,
    title: 'Simmetrica vs Asimmetrica: Confronto Completo',
    category: 'hybrid',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-indigo-300 mb-4">⚔️ Il Grande Confronto</h3>

        <ComparisonTable>
          <thead>
            <tr className="bg-indigo-900/30 border-b-2 border-indigo-700">
              <th className="text-left p-4 text-indigo-300 font-bold">Aspetto</th>
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

        <div className="bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg mt-6">
          <strong className="text-orange-300 text-xl">💡 Quale Usare?</strong><br />
          <p className="text-gray-300 mt-2">
            Non è una scelta "o/o" ma "entrambi"! La <strong>cifratura ibrida</strong> combina
            i punti di forza di entrambi: RSA per lo scambio sicuro delle chiavi + AES per la velocità.
          </p>
        </div>
      </div>
    ),
  },

  // Slide 28: Benchmark Prestazionali
  {
    id: 32,
    title: 'Benchmark Prestazionali: AES vs RSA',
    category: 'hybrid',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-indigo-300 mb-4">⚡ Confronto Velocità Reale</h3>

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

  // Slide 29: Cifratura Ibrida - Teoria
  {
    id: 33,
    title: 'Cifratura Ibrida: Il Meglio di Entrambi i Mondi',
    category: 'hybrid',
    content: () => (
      <div className="space-y-6">
        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-lg">
          <h3 className="text-indigo-300 text-2xl font-bold mb-3">💡 L'Idea Geniale</h3>
          <p className="text-gray-300 text-lg">
            La <strong className="text-indigo-300">cifratura ibrida</strong> combina i vantaggi di entrambi i metodi:
            usa <strong className="text-green-300">AES</strong> per la velocità e <strong className="text-purple-300">RSA</strong> per lo scambio sicuro delle chiavi!
          </p>
        </div>

        <h3 className="text-2xl font-bold text-indigo-300 mb-4">🔄 I 6 Passi della Cifratura Ibrida</h3>

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
              // Solo 32 byte → RSA può gestirli facilmente!
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
      </div>
    ),
  },

  // Slide 30: Esempio Pratico WhatsApp
  {
    id: 34,
    title: 'Esempio Reale: Come Funziona WhatsApp',
    category: 'hybrid',
    content: () => (
      <div className="space-y-6">
        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-green-300 text-2xl font-bold mb-3">💬 WhatsApp End-to-End Encryption</h3>
          <p className="text-gray-300 text-lg">
            WhatsApp usa il <strong>Signal Protocol</strong>, che combina <strong>ECDHE</strong> (scambio chiavi) +
            <strong> AES-256-GCM</strong> (cifratura messaggi) per garantire la privacy end-to-end.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-green-300 mb-4">🔐 Scenario: Alice manda un messaggio a Bob</h3>

        <div className="space-y-4">
          <div className="bg-blue-900/30 border-2 border-blue-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-4xl">🔑</div>
              <div>
                <strong className="text-blue-300 text-lg">PASSO 1: Scambio Chiavi (ECDHE)</strong>
                <p className="text-gray-300 text-sm mt-1">
                  Alice e Bob negoziano una <strong>chiave di sessione</strong> usando <strong>ECDHE</strong>
                  (Elliptic Curve Diffie-Hellman Ephemeral) - simile a RSA ma più efficiente
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-400">
              Session_Key = ECDHE(Alice_EphemeralKey, Bob_EphemeralKey)
            </div>
          </div>

          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-4xl">📝</div>
              <div>
                <strong className="text-green-300 text-lg">PASSO 2: Cifratura Messaggio (AES-256-GCM)</strong>
                <p className="text-gray-300 text-sm mt-1">
                  Alice cifra il messaggio "Ciao Bob!" con <strong>AES-256-GCM</strong> usando Session_Key
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-400">
              Encrypted_Message = AES_GCM_Encrypt("Ciao Bob!", Session_Key)<br />
              // GCM = Galois/Counter Mode (con autenticazione integrata)
            </div>
          </div>

          <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-4xl">📤</div>
              <div>
                <strong className="text-purple-300 text-lg">PASSO 3: Invio</strong>
                <p className="text-gray-300 text-sm mt-1">
                  Il messaggio cifrato viene inviato attraverso i server WhatsApp
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-400">
              WhatsApp_Server → Bob: Encrypted_Message<br />
              // I server NON possono decifrare il messaggio!
            </div>
          </div>

          <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="text-4xl">🔓</div>
              <div>
                <strong className="text-orange-300 text-lg">PASSO 4: Decifratura</strong>
                <p className="text-gray-300 text-sm mt-1">
                  Bob decifra il messaggio usando la stessa Session_Key
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-400">
              Original_Message = AES_GCM_Decrypt(Encrypted_Message, Session_Key)<br />
              // Bob legge: "Ciao Bob!"
            </div>
          </div>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300 text-lg">🔒 Perfect Forward Secrecy (PFS)</strong><br />
          <p className="text-gray-300 mt-2">
            Ogni messaggio usa una <strong>nuova chiave effimera</strong> (ephemeral). Anche se una chiave
            viene compromessa, i messaggi precedenti restano sicuri!
          </p>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-xl">✅ Perché è Sicuro?</strong><br />
          <ul className="text-gray-300 mt-3 space-y-2">
            <li>• <strong>End-to-End:</strong> Solo Alice e Bob possono decifrare (nemmeno WhatsApp!)</li>
            <li>• <strong>AES-256:</strong> Praticamente inviolabile (2<sup>256</sup> chiavi)</li>
            <li>• <strong>GCM:</strong> Garantisce anche integrità (rileva modifiche)</li>
            <li>• <strong>PFS:</strong> Ogni conversazione ha chiavi uniche</li>
          </ul>
        </div>
      </div>
    ),
  },

  // Slide 31: HTTPS/TLS - Altro Esempio
  {
    id: 35,
    title: 'Come Funziona HTTPS (TLS 1.3)',
    category: 'hybrid',
    content: () => (
      <div className="space-y-6">
        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="text-blue-300 text-2xl font-bold mb-3">🌐 HTTPS = HTTP + TLS</h3>
          <p className="text-gray-300 text-lg">
            Quando visiti un sito HTTPS, il tuo browser e il server stabiliscono una
            <strong> connessione crittografata</strong> usando il protocollo <strong>TLS</strong> (Transport Layer Security).
          </p>
        </div>

        <h3 className="text-2xl font-bold text-blue-300 mb-4">🤝 TLS Handshake (versione semplificata)</h3>

        <div className="space-y-4">
          <div className="bg-blue-900/30 border-2 border-blue-700 rounded-lg p-6">
            <strong className="text-blue-300 text-lg">1️⃣ Client Hello</strong>
            <p className="text-gray-300 mt-2">
              Browser: "Ciao server! Supporto questi algoritmi: AES-256-GCM, ChaCha20-Poly1305, ECDHE..."
            </p>
          </div>

          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
            <strong className="text-green-300 text-lg">2️⃣ Server Hello + Certificato</strong>
            <p className="text-gray-300 mt-2">
              Server: "Usiamo <strong>ECDHE + AES-256-GCM</strong>. Ecco il mio certificato X.509 (con chiave pubblica RSA/ECC)"
            </p>
          </div>

          <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
            <strong className="text-purple-300 text-lg">3️⃣ Verifica Certificato</strong>
            <p className="text-gray-300 mt-2">
              Browser verifica che il certificato sia firmato da una <strong>Certification Authority (CA)</strong> fidata
              (es. Let's Encrypt, DigiCert)
            </p>
          </div>

          <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
            <strong className="text-orange-300 text-lg">4️⃣ Key Exchange (ECDHE)</strong>
            <p className="text-gray-300 mt-2">
              Browser e server generano una <strong>chiave di sessione condivisa</strong> usando ECDHE
            </p>
            <div className="bg-gray-900 p-3 rounded-lg font-mono text-sm text-gray-400 mt-2">
              Session_Key = ECDHE(Client_Random, Server_Random)
            </div>
          </div>

          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
            <strong className="text-green-300 text-lg">5️⃣ Comunicazione Cifrata</strong>
            <p className="text-gray-300 mt-2">
              Tutte le comunicazioni successive usano <strong>AES-256-GCM</strong> con Session_Key
            </p>
            <div className="bg-gray-900 p-3 rounded-lg font-mono text-sm text-gray-400 mt-2">
              HTTP_Request_Encrypted = AES_GCM_Encrypt(HTTP_Request, Session_Key)
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <strong className="text-indigo-300 text-lg">🔐 Algoritmi Moderni (TLS 1.3)</strong>
            <ul className="text-gray-300 mt-3 space-y-2 text-sm">
              <li>• <strong>Key Exchange:</strong> ECDHE (X25519 o P-256)</li>
              <li>• <strong>Bulk Encryption:</strong> AES-256-GCM o ChaCha20-Poly1305</li>
              <li>• <strong>Signatures:</strong> RSA-PSS, ECDSA, EdDSA</li>
              <li>• <strong>Hashing:</strong> SHA-256, SHA-384</li>
            </ul>
          </div>

          <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
            <strong className="text-green-300 text-lg">✅ Vantaggi</strong>
            <ul className="text-gray-300 mt-3 space-y-2 text-sm">
              <li>• <strong>Privacy:</strong> Nessuno può intercettare i tuoi dati</li>
              <li>• <strong>Integrità:</strong> Rileva modifiche ai dati</li>
              <li>• <strong>Autenticazione:</strong> Verifica identità del server</li>
              <li>• <strong>PFS:</strong> Ogni sessione ha chiavi uniche</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">🔍 Come Verificare?</strong><br />
          <p className="text-gray-300 mt-2">
            Nel browser, clicca sul lucchetto 🔒 nella barra degli indirizzi → "Connessione sicura" → "Dettagli certificato"
            per vedere gli algoritmi usati!
          </p>
        </div>
      </div>
    ),
  },
];
