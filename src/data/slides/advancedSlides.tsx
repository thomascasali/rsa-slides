import type { Slide } from '../../types';

export const advancedSlides: Slide[] = [
  // Slide 26: Perché RSA è Sicuro
  {
    id: 26,
    title: 'Perché RSA è Sicuro?',
    category: 'asymmetric',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-red-300 mb-4">Il Problema della Fattorizzazione</h3>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300 text-lg">Informazioni Pubbliche (tutti le conoscono):</strong>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>• n = 3233 (modulo pubblico)</li>
            <li>• e = 17 (esponente pubblico)</li>
            <li>• Messaggio cifrato: C = 855</li>
          </ul>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300 text-lg">Informazione Segreta:</strong>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>• d = 2753 (esponente privato) ⚠️</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-red-300 mt-8 mb-4">Come un attaccante potrebbe trovare d?</h3>

        <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6">
          <strong className="text-red-300 text-lg">PASSO 1:</strong>
          <span className="text-gray-300 ml-2">Deve fattorizzare n per trovare p e q</span><br />
          <span className="text-gray-400 text-sm">3233 = ? × ?</span>
        </div>

        <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6">
          <strong className="text-red-300 text-lg">PASSO 2:</strong>
          <span className="text-gray-300 ml-2">Calcolare φ(n) = (p-1)(q-1)</span>
        </div>

        <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6">
          <strong className="text-red-300 text-lg">PASSO 3:</strong>
          <span className="text-gray-300 ml-2">Calcolare d come inverso modulare di e</span>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg mt-8">
          <strong className="text-green-300 text-lg">🔐 La Sicurezza:</strong>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>• Con n = 3233 (piccolo), è facile fattorizzare: 3233 = 61 × 53</li>
            <li>• Con n di <strong className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">2048 bit</strong> (617 cifre decimali), è praticamente impossibile</li>
            <li>• Ci vorrebbero <strong>miliardi di anni</strong> con i supercomputer attuali!</li>
          </ul>
        </div>
      </div>
    ),
  },

  // Slide 48: Dimensioni Chiavi
  {
    id: 27,
    title: 'Dimensioni delle Chiavi',
    category: 'asymmetric',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-red-300 mb-4">Confronto tra Esempio Didattico e Uso Reale</h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-900/30 border-b-2 border-red-700">
                <th className="text-left p-4 text-red-300 font-bold">Contesto</th>
                <th className="text-left p-4 text-red-300 font-bold">Bit</th>
                <th className="text-left p-4 text-red-300 font-bold">Cifre Decimali</th>
                <th className="text-left p-4 text-red-300 font-bold">Sicurezza</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="bg-yellow-900/20 border-b border-gray-700">
                <td className="p-4"><strong>Nostro Esempio</strong></td>
                <td className="p-4">12 bit</td>
                <td className="p-4">~4 cifre (3233)</td>
                <td className="p-4 text-red-400">❌ Insicuro (didattico)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-4">RSA Minimo</td>
                <td className="p-4">1024 bit</td>
                <td className="p-4">~309 cifre</td>
                <td className="p-4 text-yellow-400">⚠️ Deprecato</td>
              </tr>
              <tr className="bg-green-900/20 border-b border-gray-700">
                <td className="p-4"><strong>RSA Standard</strong></td>
                <td className="p-4">2048 bit</td>
                <td className="p-4">~617 cifre</td>
                <td className="p-4 text-green-400">✅ Sicuro fino al 2030</td>
              </tr>
              <tr className="bg-blue-900/20">
                <td className="p-4"><strong>RSA Forte</strong></td>
                <td className="p-4">4096 bit</td>
                <td className="p-4">~1234 cifre</td>
                <td className="p-4 text-blue-400">✅ Molto sicuro</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
          <strong className="text-blue-300 text-lg">⏱️ Tempo per fattorizzare n:</strong>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>• <strong>12 bit:</strong> Millisecondi</li>
            <li>• <strong>1024 bit:</strong> Anni (con supercomputer)</li>
            <li>• <strong>2048 bit:</strong> Miliardi di anni</li>
            <li>• <strong>4096 bit:</strong> Impossibile con tecnologia attuale</li>
          </ul>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">💡 Nel nostro esempio:</strong>
          <span className="text-gray-300 ml-2">
            Usiamo numeri piccoli solo per scopi didattici, per poter fare i calcoli a mano e capire il meccanismo.
            In pratica si usano SEMPRE chiavi di 2048+ bit!
          </span>
        </div>
      </div>
    ),
  },

  // Slide 49: Limitazioni
  {
    id: 28,
    title: 'Limitazioni di RSA',
    category: 'asymmetric',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-red-300 mb-4">Cosa NON può fare RSA (o fa con difficoltà)</h3>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300 text-lg">⚠️ Limitazione 1: Dimensione Messaggio</strong>
          <p className="text-gray-300 mt-2">
            RSA può cifrare solo messaggi <strong>più piccoli di n</strong>. Se M ≥ n, non funziona!
          </p>
          <p className="text-gray-400 mt-2">
            Esempio: Con n = 3233, posso cifrare solo numeri da 0 a 3232
          </p>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300 text-lg">⚠️ Limitazione 2: Velocità</strong>
          <p className="text-gray-300 mt-2">
            Le operazioni di elevamento a potenza con numeri enormi sono <strong>molto lente</strong>
            rispetto agli algoritmi simmetrici (come AES).
          </p>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Soluzione: Crittografia Ibrida</strong>
          <p className="text-gray-300 mt-2">
            In pratica, RSA viene usato per:
          </p>
          <ol className="list-decimal list-inside mt-3 space-y-2 text-gray-300 ml-4">
            <li>Scambiare una <strong>chiave simmetrica</strong> (AES) in modo sicuro</li>
            <li>La chiave AES cifra i <strong>dati veri</strong> (molto più veloce)</li>
            <li>Creare <strong>firme digitali</strong> per autenticazione</li>
          </ol>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300 text-lg">🔐 HTTPS (siti web sicuri):</strong>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>• RSA stabilisce la connessione e scambia la chiave AES</li>
            <li>• AES cifra tutti i dati della sessione (molto più veloce)</li>
            <li>• Risultato: sicurezza di RSA + velocità di AES</li>
          </ul>
        </div>
      </div>
    ),
  },

  // Slide 35: Applicazioni Reali
  {
    id: 29,
    title: 'Applicazioni Reali di RSA',
    category: 'asymmetric',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-red-300 mb-4">Dove usiamo RSA ogni giorno (spesso senza saperlo)</h3>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6">
            <div className="text-5xl text-center mb-4">🌐</div>
            <strong className="text-red-300 text-xl block mb-2">HTTPS / SSL / TLS</strong>
            <p className="text-gray-300 text-sm">
              Il lucchetto nel browser. RSA protegge la connessione iniziale e lo scambio di chiavi.
            </p>
          </div>

          <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6">
            <div className="text-5xl text-center mb-4">✉️</div>
            <strong className="text-red-300 text-xl block mb-2">Email Sicure (PGP/GPG)</strong>
            <p className="text-gray-300 text-sm">
              Cifratura end-to-end delle email usando chiavi RSA pubbliche e private.
            </p>
          </div>

          <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6">
            <div className="text-5xl text-center mb-4">✍️</div>
            <strong className="text-red-300 text-xl block mb-2">Firme Digitali</strong>
            <p className="text-gray-300 text-sm">
              Documenti legali, software, aggiornamenti di sistema verificati con RSA.
            </p>
          </div>

          <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6">
            <div className="text-5xl text-center mb-4">🔐</div>
            <strong className="text-red-300 text-xl block mb-2">VPN</strong>
            <p className="text-gray-300 text-sm">
              Stabilire tunnel sicuri tra reti usando autenticazione e scambio chiavi RSA.
            </p>
          </div>

          <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6">
            <div className="text-5xl text-center mb-4">💳</div>
            <strong className="text-red-300 text-xl block mb-2">Transazioni Bancarie</strong>
            <p className="text-gray-300 text-sm">
              Home banking, POS, carte di credito protette da RSA.
            </p>
          </div>

          <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6">
            <div className="text-5xl text-center mb-4">🔑</div>
            <strong className="text-red-300 text-xl block mb-2">SSH</strong>
            <p className="text-gray-300 text-sm">
              Connessioni remote sicure a server usando chiavi RSA.
            </p>
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg mt-8">
          <strong className="text-green-300 text-lg">💡 Lo sapevi?</strong>
          <span className="text-gray-300 ml-2">
            Ogni giorno avvengono <strong>miliardi</strong> di operazioni RSA
            nei nostri smartphone, computer e server web senza che ce ne accorgiamo!
          </span>
        </div>
      </div>
    ),
  },

  // Slide 30: Dal RSA alla Cifratura Ibrida
  {
    id: 30,
    title: 'RSA nel Mondo Reale: Il Problema delle Prestazioni',
    category: 'asymmetric',
    content: () => (
      <div className="space-y-6">
        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-2xl">✅ Cosa Abbiamo Visto su RSA:</strong>
          <ul className="mt-4 space-y-2 text-gray-300 text-lg">
            <li>• RSA risolve il <strong>problema dello scambio chiavi</strong></li>
            <li>• Permette <strong>cifratura</strong> e <strong>firme digitali</strong></li>
            <li>• È <strong>sicuro</strong> (basato sulla fattorizzazione)</li>
            <li>• È usato ovunque: HTTPS, email, VPN, blockchain</li>
          </ul>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300 text-2xl">⚠️ Ma C'è un Problema...</strong>
          <p className="text-gray-300 mt-4 text-lg">
            Ricordi i benchmark? RSA è <strong className="text-red-300">~25.000 volte più lento</strong> di AES per cifrare dati!
          </p>
          <div className="mt-4 space-y-2 text-gray-300">
            <li>• <strong>AES-256:</strong> cifra 1 GB in ~0.3 secondi</li>
            <li>• <strong>RSA-2048:</strong> cifra 1 GB in ~14 ore (se fosse possibile!)</li>
            <li>• <strong>RSA può cifrare max ~245 byte</strong> per operazione con chiavi 2048 bit</li>
          </div>
        </div>

        <div className="bg-red-900/30 border-2 border-red-700 rounded-lg p-6 mt-6">
          <strong className="text-red-300 text-2xl">❌ Scenario Impossibile:</strong>
          <p className="text-gray-300 mt-4 text-lg">
            Immagina di voler cifrare un <strong>file video da 500 MB</strong> con RSA-2048:
          </p>
          <div className="bg-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-300">
            500 MB = 500.000.000 byte<br />
            RSA può cifrare max 245 byte per operazione<br />
            <span className="text-red-300">→ Servirebbero 2.040.816 operazioni RSA!</span><br />
            <span className="text-red-300">→ Tempo stimato: ~14 giorni</span> 😱
          </div>
        </div>

        <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-6 rounded-r-lg mt-6">
          <strong className="text-indigo-300 text-2xl">💡 La Soluzione: Cifratura Ibrida</strong>
          <p className="text-gray-300 mt-4 text-lg">
            Nel mondo reale, <strong>RSA e AES lavorano insieme</strong>:
          </p>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>• <strong className="text-green-300">AES</strong> cifra i dati (veloce, efficiente)</li>
            <li>• <strong className="text-purple-300">RSA</strong> cifra solo la chiave AES (piccola, 32 byte)</li>
            <li>• Si ottiene: <strong className="text-blue-300">Sicurezza di RSA + Velocità di AES</strong></li>
          </ul>
        </div>

        <div className="text-center mt-8 p-6 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-lg border-2 border-indigo-600">
          <h3 className="text-3xl font-bold text-indigo-300 mb-4">
            🔄 Prossimo: Cifratura Ibrida
          </h3>
          <p className="text-gray-300 text-lg">
            Scopriamo come <strong>WhatsApp, HTTPS e tutti i sistemi moderni</strong><br />
            combinano RSA e AES per ottenere il meglio di entrambi i mondi!
          </p>
        </div>
      </div>
    ),
  },
];
