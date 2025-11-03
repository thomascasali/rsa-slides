import type { Slide } from '../../types';

export const introSlides: Slide[] = [
  // Slide 1: Titolo Principale
  {
    id: 1,
    title: 'Crittografia Moderna',
    category: 'intro',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
        <div className="text-8xl mb-4">🔐</div>
        <h1 className="text-6xl font-bold text-blue-300 mb-4 text-center">
          Crittografia Moderna
        </h1>
        <h2 className="text-3xl text-gray-300 font-normal text-center">
          Dalla Teoria alla Pratica
        </h2>
        <p className="text-xl text-gray-400 mt-12 text-center max-w-2xl">
          Una guida completa agli algoritmi di cifratura simmetrici e asimmetrici,
          con focus sull'algoritmo RSA
        </p>
        <div className="mt-16 text-base text-gray-500 text-center">
          Prof. Thomas Casali - ITTS<br />
          Sistemi e Reti - Classe Quinta
        </div>
      </div>
    ),
  },

  // Slide 2: Cos'è la Crittografia
  {
    id: 2,
    title: "Cos'è la Crittografia",
    category: 'intro',
    content: () => (
      <div className="space-y-6">
        <p className="text-xl leading-relaxed text-gray-300">
          La <strong className="text-blue-300">crittografia</strong> è la scienza che studia
          come proteggere le informazioni trasformandole in modo che solo i destinatari autorizzati
          possano leggerle.
        </p>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
          <strong className="text-blue-300 text-lg">📖 Etimologia</strong>
          <p className="text-gray-300 mt-2">
            Dal greco <em>κρυπτός</em> (kryptós, "nascosto") + <em>γράφειν</em> (gráphein, "scrivere")
            = <strong>"scrittura nascosta"</strong>
          </p>
        </div>

        <h3 className="text-2xl font-bold text-blue-300 mt-8 mb-4">Obiettivi della Crittografia:</h3>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-900/30 border-2 border-blue-700 rounded-lg p-6">
            <div className="text-4xl mb-3">🔒</div>
            <strong className="text-blue-300 text-lg">Riservatezza</strong>
            <p className="text-gray-300 mt-2">Solo i destinatari autorizzati possono leggere il messaggio</p>
          </div>

          <div className="bg-green-900/30 border-2 border-green-700 rounded-lg p-6">
            <div className="text-4xl mb-3">✅</div>
            <strong className="text-green-300 text-lg">Integrità</strong>
            <p className="text-gray-300 mt-2">Il messaggio non può essere modificato senza essere rilevato</p>
          </div>

          <div className="bg-purple-900/30 border-2 border-purple-700 rounded-lg p-6">
            <div className="text-4xl mb-3">👤</div>
            <strong className="text-purple-300 text-lg">Autenticazione</strong>
            <p className="text-gray-300 mt-2">Verifica dell'identità del mittente</p>
          </div>

          <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
            <div className="text-4xl mb-3">🚫</div>
            <strong className="text-orange-300 text-lg">Non Ripudio</strong>
            <p className="text-gray-300 mt-2">Il mittente non può negare di aver inviato il messaggio</p>
          </div>
        </div>
      </div>
    ),
  },

  // Slide 3: Perché è Importante
  {
    id: 3,
    title: 'Perché la Crittografia è Fondamentale',
    category: 'intro',
    content: () => (
      <div className="space-y-6">
        <p className="text-xl text-gray-300 mb-8">
          Nel mondo digitale moderno, la crittografia protegge ogni aspetto della nostra vita online:
        </p>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <strong className="text-blue-300 text-lg">🌐 Navigazione Web (HTTPS)</strong>
            <p className="text-gray-300 mt-2">
              Ogni volta che vedi il lucchetto nella barra degli indirizzi, la crittografia protegge
              i tuoi dati (password, carte di credito, informazioni personali)
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border-l-4 border-green-500 p-6 rounded-r-lg">
            <strong className="text-green-300 text-lg">💬 Messaggistica (WhatsApp, Signal, Telegram)</strong>
            <p className="text-gray-300 mt-2">
              La crittografia end-to-end garantisce che solo tu e il destinatario possiate leggere i messaggi
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <strong className="text-purple-300 text-lg">💳 Transazioni Bancarie</strong>
            <p className="text-gray-300 mt-2">
              Home banking, pagamenti online, bonifici: tutto protetto da crittografia
            </p>
          </div>

          <div className="bg-gradient-to-r from-teal-900/30 to-teal-800/20 border-l-4 border-teal-500 p-6 rounded-r-lg">
            <strong className="text-teal-300 text-lg">📧 Email Sicure (PGP/GPG)</strong>
            <p className="text-gray-300 mt-2">
              Protezione delle comunicazioni professionali e sensibili
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-900/30 to-orange-800/20 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <strong className="text-orange-300 text-lg">🔐 VPN e Connessioni Remote</strong>
            <p className="text-gray-300 mt-2">
              Accesso sicuro a reti aziendali, smart working, protezione della privacy
            </p>
          </div>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-8">
          <strong className="text-yellow-300">⚡ Senza crittografia</strong>
          <p className="text-gray-300 mt-2">
            tutto il traffico internet sarebbe in chiaro, leggibile da chiunque intercetti la comunicazione
          </p>
        </div>
      </div>
    ),
  },

  // Slide 4: Le Due Famiglie di Algoritmi
  {
    id: 4,
    title: 'Le Due Famiglie di Algoritmi Crittografici',
    category: 'intro',
    content: () => (
      <div className="space-y-6">
        <p className="text-xl text-gray-300 mb-8">
          Esistono due approcci fondamentali alla crittografia, ognuno con caratteristiche,
          vantaggi e casi d'uso specifici:
        </p>

        <div className="grid grid-cols-2 gap-8">
          {/* Crittografia Simmetrica */}
          <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-2 border-green-700 rounded-xl p-8">
            <div className="text-6xl text-center mb-4">🔑</div>
            <h3 className="text-3xl font-bold text-green-300 text-center mb-6">
              Crittografia<br />Simmetrica
            </h3>

            <div className="space-y-4">
              <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                <strong className="text-green-300">🎯 Principio</strong>
                <p className="text-gray-300 text-sm mt-2">
                  Una sola chiave segreta condivisa per cifrare e decifrare
                </p>
              </div>

              <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                <strong className="text-green-300">⚡ Velocità</strong>
                <p className="text-gray-300 text-sm mt-2">
                  Molto veloce (GB/s)
                </p>
              </div>

              <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                <strong className="text-green-300">📦 Esempi</strong>
                <p className="text-gray-300 text-sm mt-2">
                  DES, 3DES, AES
                </p>
              </div>

              <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
                <strong className="text-yellow-300">⚠️ Problema</strong>
                <p className="text-gray-300 text-sm mt-2">
                  Come condividere la chiave in modo sicuro?
                </p>
              </div>
            </div>
          </div>

          {/* Crittografia Asimmetrica */}
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-2 border-purple-700 rounded-xl p-8">
            <div className="text-6xl text-center mb-4">🔐</div>
            <h3 className="text-3xl font-bold text-purple-300 text-center mb-6">
              Crittografia<br />Asimmetrica
            </h3>

            <div className="space-y-4">
              <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4">
                <strong className="text-purple-300">🎯 Principio</strong>
                <p className="text-gray-300 text-sm mt-2">
                  Due chiavi diverse: pubblica (cifra) e privata (decifra)
                </p>
              </div>

              <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4">
                <strong className="text-purple-300">🐌 Velocità</strong>
                <p className="text-gray-300 text-sm mt-2">
                  Lenta (KB/s)
                </p>
              </div>

              <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4">
                <strong className="text-purple-300">📦 Esempi</strong>
                <p className="text-gray-300 text-sm mt-2">
                  RSA, ECC, ElGamal
                </p>
              </div>

              <div className="bg-green-900/30 border border-green-700 rounded-lg p-4">
                <strong className="text-green-300">✅ Vantaggio</strong>
                <p className="text-gray-300 text-sm mt-2">
                  Nessun problema di scambio chiavi!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
          <strong className="text-blue-300">💡 Nelle prossime slide</strong>
          <p className="text-gray-300 mt-2">
            approfondiremo entrambe le famiglie, i loro algoritmi e vedremo come
            vengono combinati nella <strong className="text-blue-300">cifratura ibrida</strong>
          </p>
        </div>
      </div>
    ),
  },

  // Slide 5: Confronto Diretto
  {
    id: 5,
    title: 'Simmetrica vs Asimmetrica: Confronto Dettagliato',
    category: 'intro',
    content: () => (
      <div className="space-y-6">
        <p className="text-xl text-gray-300 mb-6">
          Compariamo nel dettaglio i due approcci:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-900/50">
                <th className="border border-blue-700 px-6 py-4 text-left text-blue-300 font-bold">
                  Caratteristica
                </th>
                <th className="border border-green-700 px-6 py-4 text-center text-green-300 font-bold">
                  Simmetrica
                </th>
                <th className="border border-purple-700 px-6 py-4 text-center text-purple-300 font-bold">
                  Asimmetrica
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr>
                <td className="border border-gray-700 px-6 py-4 font-semibold text-gray-200">
                  Numero di chiavi
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-green-900/20">
                  1 chiave segreta condivisa
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-purple-900/20">
                  2 chiavi (pubblica + privata)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-6 py-4 font-semibold text-gray-200">
                  Velocità
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-green-900/20">
                  ⚡ Molto veloce (GB/s)
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-purple-900/20">
                  🐌 Lenta (KB/s)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-6 py-4 font-semibold text-gray-200">
                  Dimensione chiave
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-green-900/20">
                  128-256 bit
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-purple-900/20">
                  2048-4096 bit
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-6 py-4 font-semibold text-gray-200">
                  Scambio chiavi
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-green-900/20">
                  ⚠️ Problematico (canale sicuro)
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-purple-900/20">
                  ✅ Facile (chiave pubblica)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-6 py-4 font-semibold text-gray-200">
                  Caso d'uso principale
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-green-900/20">
                  Cifratura di grandi quantità di dati
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-purple-900/20">
                  Scambio chiavi, firme digitali
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-6 py-4 font-semibold text-gray-200">
                  Complessità matematica
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-green-900/20">
                  Sostituzioni e permutazioni
                </td>
                <td className="border border-gray-700 px-6 py-4 text-center bg-purple-900/20">
                  Teoria dei numeri, fattorizzazione
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-lg mt-8">
          <strong className="text-orange-300">🔄 Cifratura Ibrida: Il meglio di entrambi i mondi</strong>
          <p className="text-gray-300 mt-2">
            Nella pratica, si usa <strong>RSA per scambiare una chiave AES</strong>, poi
            AES per cifrare i dati. Questo combina la sicurezza dello scambio chiavi asimmetrico
            con la velocità della cifratura simmetrica.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🌐</div>
            <strong className="text-blue-300 text-sm">HTTPS</strong>
            <p className="text-gray-400 text-xs mt-1">RSA + AES</p>
          </div>
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📧</div>
            <strong className="text-blue-300 text-sm">Email Sicure</strong>
            <p className="text-gray-400 text-xs mt-1">PGP/GPG</p>
          </div>
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">💬</div>
            <strong className="text-blue-300 text-sm">Messaggi</strong>
            <p className="text-gray-400 text-xs mt-1">E2E Encryption</p>
          </div>
        </div>
      </div>
    ),
  },
];
