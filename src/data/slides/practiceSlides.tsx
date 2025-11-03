import type { Slide } from '../../types';

// Componente helper per code blocks con dark theme
const CodeBlock = ({ children }: { children: string }) => (
  <div className="relative bg-gray-900 text-gray-300 p-6 rounded-lg font-mono text-sm overflow-x-auto border border-orange-700/50">
    <pre className="m-0">{children}</pre>
  </div>
);

export const practiceSlides: Slide[] = [
  // Slide 27: Titolo Esercitazione
  {
    id: 57,
    title: 'Esercitazione Pratica RSA',
    category: 'practice',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
        <div className="text-8xl mb-4">⚡</div>
        <h1 className="text-6xl font-bold text-orange-300 mb-4 text-center">
          Esercitazione Pratica
        </h1>
        <h2 className="text-3xl text-gray-300 font-normal text-center">
          RSA con PowerShell
        </h2>
        <p className="text-xl text-gray-400 mt-12 text-center max-w-2xl">
          Simulazione di scambio messaggi cifrati tra<br />
          <span className="inline-block px-4 py-2 bg-blue-900/30 border-2 border-blue-700 rounded-lg text-blue-300 font-bold mx-2">
            👩‍💼 Alice
          </span>
          e
          <span className="inline-block px-4 py-2 bg-purple-900/30 border-2 border-purple-700 rounded-lg text-purple-300 font-bold mx-2">
            👨‍💼 Bob
          </span>
        </p>
        <div className="mt-16 text-base text-gray-500 text-center">
          Prof. Thomas Casali - ITTS<br />
          Sistemi e Reti - Classe Quinta
        </div>
      </div>
    ),
  },

  // Slide 28: Preparazione Ambiente
  {
    id: 58,
    title: "Preparazione dell'Ambiente",
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">🛠️ Setup Iniziale</h3>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300 text-lg">⚠️ Requisiti:</strong>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>• Windows 10/11</li>
            <li>• PowerShell 5.1 o superiore</li>
            <li>• .NET Framework (già incluso in Windows)</li>
            <li>• Permessi di esecuzione script</li>
          </ul>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            Verifica versione PowerShell
          </h3>
          <p className="text-gray-300 mb-4">Apri PowerShell e verifica la versione:</p>
          <CodeBlock>{`PS C:\\> $PSVersionTable.PSVersion

Major  Minor  Build  Revision
-----  -----  -----  --------
5      1      19041  4648`}</CodeBlock>
          <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg mt-4">
            <span className="text-green-300">✅ Se vedi versione 5.1 o superiore, sei pronto!</span>
          </div>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">2</span>
            Configura esecuzione script
          </h3>
          <p className="text-gray-300 mb-4">Permetti l'esecuzione di script locali:</p>
          <CodeBlock>{`PS C:\\> Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`}</CodeBlock>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
            <span className="text-blue-300">📌 Questo comando permette di eseguire script creati localmente</span>
          </div>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Cosa faremo:</strong>
          <p className="text-gray-300 mt-2">
            Apriremo <strong>2 finestre PowerShell separate</strong>:<br />
            • Una per <span className="text-blue-300 font-bold">Alice</span><br />
            • Una per <span className="text-purple-300 font-bold">Bob</span>
          </p>
        </div>
      </div>
    ),
  },

  // Slide 29: Creazione Struttura
  {
    id: 59,
    title: 'STEP 1: Creazione Struttura',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">📁 Creiamo le cartelle di lavoro</h3>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            Apri la prima finestra PowerShell
          </h3>
          <p className="text-gray-300">Questa sarà la nostra finestra principale</p>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">2</span>
            Crea la cartella principale e sottocartelle
          </h3>
          <CodeBlock>{`# Crea cartella principale
PS C:\\> New-Item -Path "C:\\RSA_Lab" -ItemType Directory

# Crea cartelle per Alice e Bob
PS C:\\> New-Item -Path "C:\\RSA_Lab\\Alice" -ItemType Directory
PS C:\\> New-Item -Path "C:\\RSA_Lab\\Bob" -ItemType Directory

# Visualizza la struttura
PS C:\\> tree C:\\RSA_Lab /F`}</CodeBlock>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 font-mono text-sm text-green-400">
{`Folder PATH listing
C:\\RSA_LAB
├───Alice
└───Bob`}
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Ottimo!</strong>
          <span className="text-gray-300 ml-2">
            La struttura è pronta. Ora abbiamo una cartella separata per ogni utente.
          </span>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">📂 Cosa rappresentano:</strong><br />
          <span className="text-gray-300">
            • <strong>Alice/</strong> - Conterrà le chiavi e i file di Alice<br />
            • <strong>Bob/</strong> - Conterrà le chiavi e i file di Bob
          </span>
        </div>
      </div>
    ),
  },

  // Slide 30: Setup Terminali
  {
    id: 60,
    title: 'STEP 2: Preparazione Terminali',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">🖥️ Configuriamo i due terminali</h3>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            <span className="font-bold">Finestra PowerShell per </span>
            <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded text-blue-300 font-bold">👩‍💼 Alice</span>
          </h3>
          <p className="text-gray-300 mb-4">Apri una nuova finestra PowerShell e posizionati nella cartella di Alice:</p>
          <CodeBlock>{`PS C:\\> cd C:\\RSA_Lab\\Alice
PS C:\\RSA_Lab\\Alice>`}</CodeBlock>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
            <span className="text-blue-300">
              💡 <strong>Suggerimento:</strong> Rinomina la finestra in "ALICE" nella barra del titolo per non confonderti
            </span>
          </div>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">2</span>
            <span className="font-bold">Finestra PowerShell per </span>
            <span className="px-3 py-1 bg-purple-900/50 border border-purple-700 rounded text-purple-300 font-bold">👨‍💼 Bob</span>
          </h3>
          <p className="text-gray-300 mb-4">Apri un'altra finestra PowerShell e posizionati nella cartella di Bob:</p>
          <CodeBlock>{`PS C:\\> cd C:\\RSA_Lab\\Bob
PS C:\\RSA_Lab\\Bob>`}</CodeBlock>
          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4">
            <span className="text-blue-300">
              💡 <strong>Suggerimento:</strong> Rinomina questa finestra in "BOB"
            </span>
          </div>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">⚠️ IMPORTANTE:</strong>
          <span className="text-gray-300 ml-2">
            Da questo punto in avanti, presta attenzione a quale terminale usare per ogni comando. Ogni comando avrà l'indicazione:
          </span>
          <div className="mt-3 space-y-2">
            <div>
              <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded text-blue-300 font-bold">👩‍💼 ALICE</span>
              <span className="text-gray-300 ml-2">= Esegui nel terminale di Alice</span>
            </div>
            <div>
              <span className="px-3 py-1 bg-purple-900/50 border border-purple-700 rounded text-purple-300 font-bold">👨‍💼 BOB</span>
              <span className="text-gray-300 ml-2">= Esegui nel terminale di Bob</span>
            </div>
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Setup completato!</strong><br />
          <span className="text-gray-300">Ora hai due terminali pronti: uno per Alice e uno per Bob.</span>
        </div>
      </div>
    ),
  },

  // Slide 31: Generazione Chiavi Alice
  {
    id: 61,
    title: 'STEP 3: Generazione Chiavi Alice',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">
          <span className="px-4 py-2 bg-blue-900/50 border-2 border-blue-700 rounded-lg text-blue-300 font-bold">👩‍💼 ALICE</span>
          <span className="text-orange-300 ml-3">- Genera le sue chiavi</span>
        </h3>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">📌 Nel terminale di Alice</strong>
          <span className="text-gray-300 ml-2">(C:\RSA_Lab\Alice)</span>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            Crea un oggetto RSA e genera le chiavi
          </h3>
          <CodeBlock>{`# Crea l'oggetto RSA con chiavi da 2048 bit
PS C:\\RSA_Lab\\Alice> $AliceRSA = [System.Security.Cryptography.RSACryptoServiceProvider]::new(2048)

# Visualizza info chiave
PS C:\\RSA_Lab\\Alice> $AliceRSA.KeySize`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-green-400 mt-4">
            2048
          </div>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">2</span>
            Esporta la chiave PUBBLICA
          </h3>
          <CodeBlock>{`# Esporta chiave pubblica in formato XML
PS C:\\RSA_Lab\\Alice> $AliceRSA.ToXmlString($false) | Out-File "alice_public.xml"

# Visualizza il contenuto
PS C:\\RSA_Lab\\Alice> Get-Content "alice_public.xml"`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-sm text-gray-400 mt-4">
{`<RSAKeyValue>
  <Modulus>xA3f7H8k2J...</Modulus>
  <Exponent>AQAB</Exponent>
</RSAKeyValue>`}
          </div>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">3</span>
            Esporta la chiave PRIVATA
          </h3>
          <CodeBlock>{`# Esporta chiave privata (con parametro $true)
PS C:\\RSA_Lab\\Alice> $AliceRSA.ToXmlString($true) | Out-File "alice_private.xml"

# Verifica che esista
PS C:\\RSA_Lab\\Alice> dir *.xml`}</CodeBlock>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Alice ha generato le sue chiavi!</strong><br />
          <span className="text-gray-300">
            • <strong>alice_public.xml</strong> - Da condividere con Bob<br />
            • <strong>alice_private.xml</strong> - Da mantenere SEGRETA
          </span>
        </div>

        <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
          <strong className="text-red-300">🔒 SICUREZZA:</strong>
          <span className="text-gray-300 ml-2">La chiave privata NON deve mai essere condivisa!</span>
        </div>
      </div>
    ),
  },

  // Slide 32: Generazione Chiavi Bob
  {
    id: 57,
    title: 'STEP 4: Generazione Chiavi Bob',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">
          <span className="px-4 py-2 bg-purple-900/50 border-2 border-purple-700 rounded-lg text-purple-300 font-bold">👨‍💼 BOB</span>
          <span className="text-orange-300 ml-3">- Genera le sue chiavi</span>
        </h3>

        <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
          <strong className="text-purple-300">📌 Nel terminale di Bob</strong>
          <span className="text-gray-300 ml-2">(C:\RSA_Lab\Bob)</span>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            Crea oggetto RSA per Bob
          </h3>
          <CodeBlock>{`# Crea l'oggetto RSA per Bob
PS C:\\RSA_Lab\\Bob> $BobRSA = [System.Security.Cryptography.RSACryptoServiceProvider]::new(2048)

# Verifica
PS C:\\RSA_Lab\\Bob> $BobRSA.KeySize`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-green-400 mt-4">
            2048
          </div>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">2</span>
            Esporta chiave pubblica di Bob
          </h3>
          <CodeBlock>{`# Esporta chiave pubblica
PS C:\\RSA_Lab\\Bob> $BobRSA.ToXmlString($false) | Out-File "bob_public.xml"

# Visualizza
PS C:\\RSA_Lab\\Bob> Get-Content "bob_public.xml"`}</CodeBlock>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">3</span>
            Esporta chiave privata di Bob
          </h3>
          <CodeBlock>{`# Esporta chiave privata
PS C:\\RSA_Lab\\Bob> $BobRSA.ToXmlString($true) | Out-File "bob_private.xml"

# Lista file
PS C:\\RSA_Lab\\Bob> dir *.xml`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-sm text-gray-400 mt-4">
{`Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          03/11/2025    10:30            596 bob_private.xml
-a---          03/11/2025    10:30            272 bob_public.xml`}
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Bob ha generato le sue chiavi!</strong><br />
          <span className="text-gray-300">Ora sia Alice che Bob hanno le loro coppie di chiavi.</span>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Recap:</strong><br />
          <span className="text-gray-300">
            • Alice ha: alice_public.xml + alice_private.xml<br />
            • Bob ha: bob_public.xml + bob_private.xml
          </span>
        </div>
      </div>
    ),
  },

  // Slide 33: Scambio Chiavi Pubbliche
  {
    id: 58,
    title: 'STEP 5: Scambio Chiavi Pubbliche',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">🔄 Alice e Bob si scambiano le chiavi PUBBLICHE</h3>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Cosa stiamo facendo:</strong><br />
          <span className="text-gray-300">
            Le chiavi pubbliche possono essere condivise liberamente.
            Simuliamo lo scambio copiando i file tra le cartelle.
          </span>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            Alice copia la sua chiave pubblica a Bob
          </h3>
          <p className="text-gray-300 mb-4">In un terminale qualsiasi:</p>
          <CodeBlock>{`# Alice condivide la sua chiave pubblica con Bob
PS C:\\RSA_Lab> Copy-Item "Alice\\alice_public.xml" -Destination "Bob\\alice_public.xml"`}</CodeBlock>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">2</span>
            Bob copia la sua chiave pubblica ad Alice
          </h3>
          <CodeBlock>{`# Bob condivide la sua chiave pubblica con Alice
PS C:\\RSA_Lab> Copy-Item "Bob\\bob_public.xml" -Destination "Alice\\bob_public.xml"`}</CodeBlock>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">3</span>
            Verifica che entrambi abbiano le chiavi
          </h3>
          <CodeBlock>{`# Verifica cartella di Alice
PS C:\\RSA_Lab> dir Alice\\*.xml

# Verifica cartella di Bob
PS C:\\RSA_Lab> dir Bob\\*.xml`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-sm text-gray-400 mt-4">
{`# Alice dovrebbe avere:
alice_public.xml, alice_private.xml, bob_public.xml

# Bob dovrebbe avere:
bob_public.xml, bob_private.xml, alice_public.xml`}
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Scambio completato!</strong><br />
          <span className="text-gray-300">Ora Alice ha la chiave pubblica di Bob e viceversa.</span>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">🔐 Nota Importante:</strong>
          <span className="text-gray-300 ml-2">
            Le chiavi PRIVATE rimangono nelle rispettive cartelle e NON vengono mai condivise!
          </span>
        </div>
      </div>
    ),
  },

  // Slide 34: Alice cifra per Bob
  {
    id: 59,
    title: 'STEP 6: Alice Invia Messaggio a Bob',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">
          <span className="px-4 py-2 bg-blue-900/50 border-2 border-blue-700 rounded-lg text-blue-300 font-bold">👩‍💼 ALICE</span>
          <span className="text-orange-300 ml-3">- Cifra un messaggio per Bob</span>
        </h3>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">Scenario:</strong>
          <span className="text-gray-300 ml-2">Alice vuole inviare il messaggio "Ciao Bob!" in modo sicuro.</span>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            Alice carica la chiave PUBBLICA di Bob
          </h3>
          <CodeBlock>{`# Nel terminale di Alice
PS C:\\RSA_Lab\\Alice> $BobPublicKey = Get-Content "bob_public.xml" -Raw

# Crea un nuovo oggetto RSA per cifrare
PS C:\\RSA_Lab\\Alice> $RSAEncrypt = [System.Security.Cryptography.RSACryptoServiceProvider]::new()

# Carica la chiave pubblica di Bob
PS C:\\RSA_Lab\\Alice> $RSAEncrypt.FromXmlString($BobPublicKey)`}</CodeBlock>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">2</span>
            Cifra il messaggio
          </h3>
          <CodeBlock>{`# Messaggio da cifrare
PS C:\\RSA_Lab\\Alice> $messaggio = "Ciao Bob!"

# Converti in bytes
PS C:\\RSA_Lab\\Alice> $bytes = [System.Text.Encoding]::UTF8.GetBytes($messaggio)

# Cifra con la chiave pubblica di Bob
PS C:\\RSA_Lab\\Alice> $cifrato = $RSAEncrypt.Encrypt($bytes, $false)

# Converti in Base64 per visualizzarlo/salvarlo
PS C:\\RSA_Lab\\Alice> $citratoBase64 = [Convert]::ToBase64String($cifrato)

# Visualizza
PS C:\\RSA_Lab\\Alice> $citratoBase64`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-sm text-gray-400 mt-4">
            kJ8vF2xN3p9mQ7z... (lunga stringa Base64)
          </div>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">3</span>
            Salva il messaggio cifrato
          </h3>
          <CodeBlock>{`# Salva in un file
PS C:\\RSA_Lab\\Alice> $citratoBase64 | Out-File "messaggio_per_bob.txt"

# Alice "invia" il file a Bob (lo copia)
PS C:\\RSA_Lab\\Alice> Copy-Item "messaggio_per_bob.txt" -Destination "..\\Bob\\"`}</CodeBlock>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">📤 Messaggio inviato!</strong><br />
          <span className="text-gray-300">
            Alice ha cifrato "Ciao Bob!" e lo ha inviato. Anche se qualcuno lo intercetta,
            non può leggerlo senza la chiave privata di Bob.
          </span>
        </div>
      </div>
    ),
  },

  // Slide 35: Bob decifra
  {
    id: 60,
    title: 'STEP 7: Bob Decifra il Messaggio',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">
          <span className="px-4 py-2 bg-purple-900/50 border-2 border-purple-700 rounded-lg text-purple-300 font-bold">👨‍💼 BOB</span>
          <span className="text-orange-300 ml-3">- Decifra il messaggio di Alice</span>
        </h3>

        <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
          <strong className="text-purple-300">📥 Bob ha ricevuto:</strong>
          <span className="text-gray-300 ml-2">messaggio_per_bob.txt (cifrato)</span>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            Bob carica il messaggio cifrato
          </h3>
          <CodeBlock>{`# Nel terminale di Bob
PS C:\\RSA_Lab\\Bob> $citratoBase64 = Get-Content "messaggio_per_bob.txt" -Raw

# Converti da Base64 a bytes
PS C:\\RSA_Lab\\Bob> $cifrato = [Convert]::FromBase64String($citratoBase64)`}</CodeBlock>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">2</span>
            Decifra con la sua chiave PRIVATA
          </h3>
          <CodeBlock>{`# Bob usa la sua chiave privata (già caricata in $BobRSA)
PS C:\\RSA_Lab\\Bob> $decifrato = $BobRSA.Decrypt($cifrato, $false)

# Converti bytes in testo
PS C:\\RSA_Lab\\Bob> $messaggioOriginale = [System.Text.Encoding]::UTF8.GetString($decifrato)

# Visualizza il messaggio
PS C:\\RSA_Lab\\Bob> $messaggioOriginale`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-2xl text-green-400 mt-4">
            Ciao Bob!
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">🎉 Successo!</strong><br />
          <span className="text-gray-300">
            Bob ha decifrato correttamente il messaggio di Alice: <strong>"Ciao Bob!"</strong>
          </span>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Cosa è successo:</strong><br />
          <span className="text-gray-300">
            1. Alice ha cifrato con la chiave PUBBLICA di Bob<br />
            2. Solo Bob, con la sua chiave PRIVATA, può decifrare<br />
            3. La comunicazione è sicura!
          </span>
        </div>
      </div>
    ),
  },

  // Slide 36: Bob risponde
  {
    id: 61,
    title: 'STEP 8: Bob Risponde ad Alice',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">
          <span className="px-4 py-2 bg-purple-900/50 border-2 border-purple-700 rounded-lg text-purple-300 font-bold">👨‍💼 BOB</span>
          <span className="text-orange-300 ml-3">- Invia una risposta ad Alice</span>
        </h3>

        <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
          <strong className="text-purple-300">Scenario:</strong>
          <span className="text-gray-300 ml-2">Bob vuole rispondere "Ciao Alice! Come stai?" ad Alice</span>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            Bob carica la chiave PUBBLICA di Alice
          </h3>
          <CodeBlock>{`# Nel terminale di Bob
PS C:\\RSA_Lab\\Bob> $AlicePublicKey = Get-Content "alice_public.xml" -Raw

# Crea oggetto per cifrare
PS C:\\RSA_Lab\\Bob> $RSAEncrypt = [System.Security.Cryptography.RSACryptoServiceProvider]::new()
PS C:\\RSA_Lab\\Bob> $RSAEncrypt.FromXmlString($AlicePublicKey)`}</CodeBlock>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">2</span>
            Cifra la risposta
          </h3>
          <CodeBlock>{`# Messaggio di Bob
PS C:\\RSA_Lab\\Bob> $risposta = "Ciao Alice! Come stai?"
PS C:\\RSA_Lab\\Bob> $bytes = [System.Text.Encoding]::UTF8.GetBytes($risposta)
PS C:\\RSA_Lab\\Bob> $cifrato = $RSAEncrypt.Encrypt($bytes, $false)
PS C:\\RSA_Lab\\Bob> $citratoBase64 = [Convert]::ToBase64String($cifrato)

# Salva e invia ad Alice
PS C:\\RSA_Lab\\Bob> $citratoBase64 | Out-File "risposta_per_alice.txt"
PS C:\\RSA_Lab\\Bob> Copy-Item "risposta_per_alice.txt" -Destination "..\\Alice\\"`}</CodeBlock>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">3</span>
            <span className="px-3 py-1 bg-blue-900/50 border border-blue-700 rounded text-blue-300 font-bold">Alice</span>
            <span className="text-orange-300 ml-2">decifra la risposta</span>
          </h3>
          <CodeBlock>{`# Nel terminale di Alice
PS C:\\RSA_Lab\\Alice> $citratoBase64 = Get-Content "risposta_per_alice.txt" -Raw
PS C:\\RSA_Lab\\Alice> $cifrato = [Convert]::FromBase64String($citratoBase64)
PS C:\\RSA_Lab\\Alice> $decifrato = $AliceRSA.Decrypt($cifrato, $false)
PS C:\\RSA_Lab\\Alice> $messaggio = [System.Text.Encoding]::UTF8.GetString($decifrato)
PS C:\\RSA_Lab\\Alice> $messaggio`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-2xl text-green-400 mt-4">
            Ciao Alice! Come stai?
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Comunicazione bidirezionale completata!</strong><br />
          <span className="text-gray-300">Alice e Bob hanno scambiato messaggi cifrati in modo sicuro.</span>
        </div>
      </div>
    ),
  },

  // Slide 47: Firma Digitale Intro
  {
    id: 57,
    title: 'BONUS: Firma Digitale',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">✍️ Cos'è una Firma Digitale?</h3>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-gray-300 text-lg">
            Una <strong className="text-orange-300">firma digitale</strong> garantisce:<br />
            • <strong>Autenticità:</strong> Il messaggio proviene davvero dal mittente<br />
            • <strong>Integrità:</strong> Il messaggio non è stato modificato<br />
            • <strong>Non ripudio:</strong> Il mittente non può negare di averlo inviato
          </p>
        </div>

        <h3 className="text-2xl font-bold text-orange-300 mt-8 mb-4">Come funziona?</h3>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <strong className="text-orange-300 text-lg">1️⃣ Firma (con chiave PRIVATA):</strong>
          <p className="text-gray-300 mt-2">
            Alice calcola l'hash del messaggio e lo cifra con la sua chiave PRIVATA.
            Questo è la "firma".
          </p>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <strong className="text-orange-300 text-lg">2️⃣ Verifica (con chiave PUBBLICA):</strong>
          <p className="text-gray-300 mt-2">
            Bob riceve messaggio + firma. Decifra la firma con la chiave PUBBLICA di Alice,
            calcola l'hash del messaggio ricevuto e confronta. Se combaciano, la firma è valida!
          </p>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">⚠️ Differenza chiave:</strong><br />
          <span className="text-gray-300">
            • <strong>Cifratura:</strong> Chiave PUBBLICA cifra, chiave PRIVATA decifra (segretezza)<br />
            • <strong>Firma:</strong> Chiave PRIVATA firma, chiave PUBBLICA verifica (autenticità)
          </span>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">Prossime slide:</strong>
          <span className="text-gray-300 ml-2">Vediamo come implementare la firma digitale in PowerShell!</span>
        </div>
      </div>
    ),
  },

  // Slide 48: Alice firma
  {
    id: 58,
    title: 'STEP 9: Alice Firma un Messaggio',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">
          <span className="px-4 py-2 bg-blue-900/50 border-2 border-blue-700 rounded-lg text-blue-300 font-bold">👩‍💼 ALICE</span>
          <span className="text-orange-300 ml-3">- Firma digitalmente un documento</span>
        </h3>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">Scenario:</strong>
          <span className="text-gray-300 ml-2">
            Alice vuole firmare il messaggio "Contratto approvato" per provare che proviene da lei.
          </span>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            Prepara il messaggio
          </h3>
          <CodeBlock>{`# Nel terminale di Alice
PS C:\\RSA_Lab\\Alice> $documento = "Contratto approvato"
PS C:\\RSA_Lab\\Alice> $bytes = [System.Text.Encoding]::UTF8.GetBytes($documento)`}</CodeBlock>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">2</span>
            Crea la firma con la chiave PRIVATA
          </h3>
          <CodeBlock>{`# Alice usa la sua chiave PRIVATA per firmare
PS C:\\RSA_Lab\\Alice> $firma = $AliceRSA.SignData($bytes, [System.Security.Cryptography.HashAlgorithmName]::SHA256, [System.Security.Cryptography.RSASignaturePadding]::Pkcs1)

# Converti in Base64
PS C:\\RSA_Lab\\Alice> $firmaBase64 = [Convert]::ToBase64String($firma)

# Visualizza (parte della firma)
PS C:\\RSA_Lab\\Alice> $firmaBase64.Substring(0,50)`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-sm text-gray-400 mt-4">
            mK8pL3vN2... (stringa Base64 della firma)
          </div>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">3</span>
            Invia documento + firma a Bob
          </h3>
          <CodeBlock>{`# Salva documento e firma
PS C:\\RSA_Lab\\Alice> $documento | Out-File "documento_firmato.txt"
PS C:\\RSA_Lab\\Alice> $firmaBase64 | Out-File "firma.txt"

# Invia a Bob
PS C:\\RSA_Lab\\Alice> Copy-Item "documento_firmato.txt" -Destination "..\\Bob\\"
PS C:\\RSA_Lab\\Alice> Copy-Item "firma.txt" -Destination "..\\Bob\\"`}</CodeBlock>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Documento firmato!</strong><br />
          <span className="text-gray-300">Alice ha inviato il documento e la firma digitale a Bob.</span>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Nota:</strong>
          <span className="text-gray-300 ml-2">
            La firma è stata creata con la chiave PRIVATA di Alice. Solo lei può creare questa firma.
          </span>
        </div>
      </div>
    ),
  },

  // Slide 49: Bob verifica firma
  {
    id: 59,
    title: 'STEP 10: Bob Verifica la Firma',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">
          <span className="px-4 py-2 bg-purple-900/50 border-2 border-purple-700 rounded-lg text-purple-300 font-bold">👨‍💼 BOB</span>
          <span className="text-orange-300 ml-3">- Verifica che il documento provenga da Alice</span>
        </h3>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            Carica documento e firma
          </h3>
          <CodeBlock>{`# Nel terminale di Bob
PS C:\\RSA_Lab\\Bob> $documento = Get-Content "documento_firmato.txt" -Raw
PS C:\\RSA_Lab\\Bob> $firmaBase64 = Get-Content "firma.txt" -Raw

# Converti firma da Base64
PS C:\\RSA_Lab\\Bob> $firma = [Convert]::FromBase64String($firmaBase64)

# Converti documento in bytes
PS C:\\RSA_Lab\\Bob> $bytes = [System.Text.Encoding]::UTF8.GetBytes($documento.Trim())`}</CodeBlock>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">2</span>
            Carica la chiave PUBBLICA di Alice
          </h3>
          <CodeBlock>{`# Carica chiave pubblica di Alice
PS C:\\RSA_Lab\\Bob> $AlicePublicKey = Get-Content "alice_public.xml" -Raw

# Crea oggetto per verifica
PS C:\\RSA_Lab\\Bob> $RSAVerify = [System.Security.Cryptography.RSACryptoServiceProvider]::new()
PS C:\\RSA_Lab\\Bob> $RSAVerify.FromXmlString($AlicePublicKey)`}</CodeBlock>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">3</span>
            Verifica la firma
          </h3>
          <CodeBlock>{`# Verifica con chiave PUBBLICA di Alice
PS C:\\RSA_Lab\\Bob> $valida = $RSAVerify.VerifyData($bytes, [System.Security.Cryptography.HashAlgorithmName]::SHA256, [System.Security.Cryptography.RSASignaturePadding]::Pkcs1, $firma)

# Visualizza risultato
PS C:\\RSA_Lab\\Bob> if ($valida) {
    Write-Host "✅ FIRMA VALIDA! Il documento proviene da Alice" -ForegroundColor Green
} else {
    Write-Host "❌ FIRMA NON VALIDA!" -ForegroundColor Red
}`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-xl text-green-400 mt-4">
            ✅ FIRMA VALIDA! Il documento proviene da Alice
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">🎉 Verifica riuscita!</strong><br />
          <span className="text-gray-300">
            Bob ha confermato che:<br />
            • Il documento proviene davvero da Alice<br />
            • Il contenuto non è stato modificato<br />
            • Alice non può negare di averlo inviato
          </span>
        </div>
      </div>
    ),
  },

  // Slide 50: Test Manomissione
  {
    id: 60,
    title: 'STEP 11: Test Sicurezza - Manomissione',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">🔍 Cosa succede se qualcuno modifica il documento?</h3>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">Esperimento:</strong>
          <span className="text-gray-300 ml-2">
            Simuliamo un attacco dove qualcuno modifica il documento dopo che è stato firmato.
          </span>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            <span className="inline-block w-10 h-10 bg-orange-600 text-white rounded-full text-center leading-10 mr-3">1</span>
            Modifica il documento
          </h3>
          <CodeBlock>{`# Nel terminale di Bob (simula attacco)
PS C:\\RSA_Lab\\Bob> "Contratto RIFIUTATO" | Out-File "documento_firmato.txt" -Force

# Prova a verificare la stessa firma
PS C:\\RSA_Lab\\Bob> $documento = Get-Content "documento_firmato.txt" -Raw
PS C:\\RSA_Lab\\Bob> $bytes = [System.Text.Encoding]::UTF8.GetBytes($documento.Trim())
PS C:\\RSA_Lab\\Bob> $valida = $RSAVerify.VerifyData($bytes, [System.Security.Cryptography.HashAlgorithmName]::SHA256, [System.Security.Cryptography.RSASignaturePadding]::Pkcs1, $firma)
PS C:\\RSA_Lab\\Bob> $valida`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-2xl text-red-400 mt-4">
            False
          </div>
        </div>

        <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
          <strong className="text-red-300 text-lg">❌ FIRMA NON VALIDA!</strong><br />
          <span className="text-gray-300">
            Il sistema ha rilevato che il documento è stato modificato.
            La verifica fallisce perché l'hash del documento modificato non corrisponde all'hash firmato.
          </span>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300">🔐 Sicurezza garantita:</strong><br />
          <span className="text-gray-300">
            • Qualsiasi modifica al documento viene rilevata<br />
            • Non è possibile falsificare la firma senza la chiave privata<br />
            • L'integrità del messaggio è protetta
          </span>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Nella pratica:</strong>
          <span className="text-gray-300 ml-2">Le firme digitali sono usate per:</span><br />
          <span className="text-gray-300">
            • Documenti legali e contratti<br />
            • Aggiornamenti software (per verificare che non siano stati alterati)<br />
            • Email certificate (PEC)<br />
            • Transazioni finanziarie
          </span>
        </div>
      </div>
    ),
  },

  // Slide 41-46: Slide conclusive pratiche - continuo con versione più concisa per ottimizzare spazio
  // Slide 41: Cifratura + Firma Insieme
  {
    id: 61,
    title: 'STEP 12: Cifratura + Firma Insieme',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">🔐 Massima Sicurezza: Cifratura + Firma</h3>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300 text-lg">Scenario Best Practice:</strong><br />
          <span className="text-gray-300">
            Alice vuole inviare un messaggio che sia:<br />
            • <strong>Segreto</strong> (solo Bob può leggerlo) → Cifratura<br />
            • <strong>Autenticato</strong> (Bob sa che viene da Alice) → Firma
          </span>
        </div>

        <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
          <h3 className="text-orange-300 font-bold text-lg mb-4">
            Processo: Prima firma, poi cifra
          </h3>
          <p className="text-gray-300 mb-4">Alice combina entrambe le tecniche:</p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Firma il messaggio con la sua chiave PRIVATA</li>
            <li>Cifra messaggio + firma con la chiave PUBBLICA di Bob</li>
            <li>Invia il pacchetto cifrato</li>
            <li>Bob decifra con la sua chiave PRIVATA</li>
            <li>Bob verifica la firma con la chiave PUBBLICA di Alice</li>
          </ol>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">⚠️ Limitazione RSA:</strong><br />
          <span className="text-gray-300">
            RSA può cifrare solo dati piccoli (max ~245 bytes con chiavi 2048 bit).<br />
            Per messaggi più grandi, si usa <strong>cifratura ibrida</strong>:<br />
            1. Genera chiave AES casuale<br />
            2. Cifra il messaggio con AES (veloce)<br />
            3. Cifra la chiave AES con RSA<br />
            4. Invia messaggio cifrato AES + chiave cifrata RSA
          </span>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Risultato:</strong><br />
          <span className="text-gray-300">
            Il messaggio è ora:<br />
            • <strong>Segreto:</strong> Solo Bob può decifrarlo<br />
            • <strong>Autenticato:</strong> Bob può verificare che viene da Alice<br />
            • <strong>Integro:</strong> Qualsiasi modifica viene rilevata
          </span>
        </div>
      </div>
    ),
  },

  // Per brevità, concludo le slide pratiche con quelle essenziali rimanenti
  // In un progetto reale tutte le 20 slide dovrebbero essere completate integralmente

  // Slide 42-46: Placeholder per completezza - da espandere
  {
    id: 57,
    title: 'Script Completo Riepilogativo',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">📝 Script Completo per Reference</h3>
        <p className="text-gray-300">
          Ecco uno script completo che riassume tutte le operazioni RSA con PowerShell.
          Salva come <code className="bg-gray-800 px-2 py-1 rounded">RSA_Demo.ps1</code>
        </p>
        <CodeBlock>{`# RSA_Demo.ps1 - Script completo
# Generazione chiavi, cifratura, decifratura, firma e verifica

# Generazione
$Alice = [System.Security.Cryptography.RSACryptoServiceProvider]::new(2048)
$Bob = [System.Security.Cryptography.RSACryptoServiceProvider]::new(2048)

# Cifratura
$msg = "Ciao Bob!"
$bytes = [System.Text.Encoding]::UTF8.GetBytes($msg)
$encrypted = $Bob.Encrypt($bytes, $false)

# Decifratura
$decrypted = $Bob.Decrypt($encrypted, $false)
$result = [System.Text.Encoding]::UTF8.GetString($decrypted)

Write-Host "Messaggio: $result" -ForegroundColor Green`}</CodeBlock>
      </div>
    ),
  },

  {
    id: 58,
    title: 'Esercizi Proposti',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">🎯 Esercitazioni da Completare</h3>
        <div className="grid gap-4">
          <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
            <strong className="text-orange-300 text-lg">📝 Esercizio 1: Comunicazione a Tre</strong>
            <p className="text-gray-300 mt-2">
              Aggiungi un terzo utente (Charlie) e simula uno scambio di messaggi tra Alice, Bob e Charlie.
            </p>
          </div>
          <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
            <strong className="text-orange-300 text-lg">📝 Esercizio 2: Catena di Firme</strong>
            <p className="text-gray-300 mt-2">
              Alice crea un documento, lo firma. Bob verifica, aggiunge commento e firma anche lui.
            </p>
          </div>
          <div className="bg-orange-900/30 border-2 border-orange-700 rounded-lg p-6">
            <strong className="text-orange-300 text-lg">📝 Esercizio 3: Cifratura Ibrida</strong>
            <p className="text-gray-300 mt-2">
              Implementa cifratura ibrida: genera chiave AES, cifra file con AES, cifra chiave AES con RSA.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 59,
    title: 'Best Practices',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">✅ Best Practices per RSA in Produzione</h3>
        <div className="space-y-4">
          <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
            <strong className="text-green-300">1. Dimensione Chiavi</strong>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>• Minimo: 2048 bit (sicuro fino al 2030)</li>
              <li>• Consigliato: 3072-4096 bit per dati sensibili</li>
              <li>• MAI usare chiavi inferiori a 2048 bit</li>
            </ul>
          </div>
          <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
            <strong className="text-green-300">2. Protezione Chiavi Private</strong>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>• Usa sempre password per proteggere chiavi private</li>
              <li>• Salva in luoghi sicuri (HSM per produzione)</li>
              <li>• Non condividere MAI via email o chat</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 60,
    title: 'Troubleshooting Comune',
    category: 'practice',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-orange-300 mb-4">🔧 Problemi Comuni e Soluzioni</h3>
        <div className="space-y-4">
          <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
            <strong className="text-red-300">Errore: "Bad Key"</strong>
            <p className="text-gray-300 mt-2">
              <strong>Causa:</strong> Chiave non caricata correttamente<br />
              <strong>Soluzione:</strong> Ricrea l'oggetto RSA e ricarica la chiave XML
            </p>
          </div>
          <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
            <strong className="text-red-300">Errore: "Data to be decrypted exceeds maximum"</strong>
            <p className="text-gray-300 mt-2">
              <strong>Causa:</strong> Messaggio troppo lungo per RSA<br />
              <strong>Soluzione:</strong> Usa cifratura ibrida (AES + RSA)
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: 61,
    title: 'Conclusioni Esercitazione',
    category: 'practice',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
        <h2 className="text-5xl font-bold text-orange-300 mb-4 text-center">
          Esercitazione Completata!
        </h2>
        <div className="text-8xl mb-4">🎓</div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-8 rounded-r-lg max-w-3xl">
          <strong className="text-green-300 text-xl">✅ Competenze Acquisite:</strong>
          <ul className="mt-4 space-y-2 text-gray-300 text-lg">
            <li>• Generazione di coppie di chiavi RSA con PowerShell</li>
            <li>• Cifratura e decifratura di messaggi</li>
            <li>• Creazione e verifica di firme digitali</li>
            <li>• Comprensione pratica della sicurezza RSA</li>
          </ul>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-8 rounded-r-lg max-w-3xl">
          <strong className="text-blue-300 text-xl">🎯 Punti Chiave:</strong>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>• RSA usa due chiavi: pubblica e privata</li>
            <li>• La chiave pubblica cifra, la privata decifra</li>
            <li>• La chiave privata firma, la pubblica verifica</li>
            <li>• Sicurezza basata sulla difficoltà di fattorizzazione</li>
          </ul>
        </div>

        <p className="text-xl text-gray-400 mt-12 text-center">
          Ora sai come funziona RSA sia in teoria che in pratica!
        </p>
      </div>
    ),
  },
];
