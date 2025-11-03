import type { Slide } from '../../types';

export const advancedSlides: Slide[] = [
  // Slide 47: Perché è Sicuro
  {
    id: 57,
    title: 'Perché RSA è Sicuro?',
    category: 'advanced',
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
    id: 58,
    title: 'Dimensioni delle Chiavi',
    category: 'advanced',
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
    id: 59,
    title: 'Limitazioni di RSA',
    category: 'advanced',
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
    id: 60,
    title: 'Applicazioni Reali di RSA',
    category: 'advanced',
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

  // Slide 51: Conclusioni Finali
  {
    id: 61,
    title: 'Conclusioni',
    category: 'advanced',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
        <h2 className="text-5xl font-bold text-red-300 mb-4 text-center">
          Cosa Abbiamo Imparato
        </h2>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-8 rounded-r-lg max-w-3xl w-full">
          <strong className="text-green-300 text-2xl">✅ Concetti Chiave:</strong>
          <ul className="mt-6 space-y-3 text-gray-300 text-lg">
            <li>• Differenza tra crittografia <strong>simmetrica</strong> e <strong>asimmetrica</strong></li>
            <li>• Coppia di chiavi: <strong>pubblica</strong> (condivisa) e <strong>privata</strong> (segreta)</li>
            <li>• I <strong>5 passi</strong> per generare chiavi RSA</li>
            <li>• Formule di <strong>cifratura</strong> (C = M<sup>e</sup> mod n) e <strong>decifratura</strong> (M = C<sup>d</sup> mod n)</li>
            <li>• Sicurezza basata sulla difficoltà di <strong>fattorizzare numeri grandi</strong></li>
          </ul>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-8 rounded-r-lg max-w-3xl w-full">
          <strong className="text-blue-300 text-2xl">📚 Prossimo Passo:</strong>
          <p className="text-gray-300 mt-4 text-lg">
            Hai completato sia la <strong>teoria</strong> che la <strong>pratica</strong> dell'algoritmo RSA.
            Ora hai le competenze per:
          </p>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>• Implementare sistemi di cifratura sicuri</li>
            <li>• Comprendere come funziona HTTPS e SSL/TLS</li>
            <li>• Utilizzare firme digitali per autenticare documenti</li>
            <li>• Valutare la sicurezza di sistemi crittografici</li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <div className="text-8xl mb-6">🎓</div>
          <h2 className="text-4xl font-bold text-red-300 mb-4">Corso Completato!</h2>
          <p className="text-xl text-gray-400">
            Ora sei pronto per applicare RSA in scenari reali
          </p>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg max-w-3xl w-full text-center">
          <strong className="text-yellow-300 text-lg">📊 Statistiche Corso:</strong><br />
          <span className="text-gray-300 text-lg mt-2 block">
            <strong className="text-3xl text-red-300">36</strong> slide totali •
            <strong className="text-3xl text-red-300"> 20</strong> esercitazioni pratiche •
            <strong className="text-3xl text-red-300"> 5</strong> categorie tematiche
          </span>
        </div>
      </div>
    ),
  },
];
