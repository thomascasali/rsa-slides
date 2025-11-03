import type { Slide } from '../../types';

// Componente helper per code blocks con dark theme
const CodeBlock = ({ children, language = 'bash' }: { children: string; language?: string }) => (
  <div className="relative bg-gray-900 text-gray-300 p-6 rounded-lg font-mono text-sm overflow-x-auto border border-teal-700/50">
    <div className="absolute top-2 right-2 text-xs text-teal-400 uppercase tracking-wide">{language}</div>
    <pre className="m-0 mt-4">{children}</pre>
  </div>
);

export const opensslSlides: Slide[] = [
  // Slide 12: Titolo OpenSSL
  {
    id: 12,
    title: 'Esercitazione Pratica con OpenSSL',
    category: 'openssl',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
        <div className="text-8xl mb-4">🔓</div>
        <h1 className="text-6xl font-bold text-teal-300 mb-4 text-center">
          OpenSSL
        </h1>
        <h2 className="text-3xl text-gray-300 font-normal text-center">
          Crittografia RSA Cross-Platform
        </h2>
        <p className="text-xl text-gray-400 mt-12 text-center max-w-2xl">
          Lo standard industriale per crittografia<br />
          <span className="inline-block px-4 py-2 bg-teal-900/30 border-2 border-teal-700 rounded-lg text-teal-300 font-bold mx-2 mt-4">
            Windows • Linux • macOS
          </span>
        </p>
        <div className="mt-16 text-base text-gray-500 text-center">
          Prof. Thomas Casali - ITTS<br />
          Sistemi e Reti - Classe Quinta
        </div>
      </div>
    ),
  },

  // Slide 13: Cos'è OpenSSL
  {
    id: 13,
    title: "Cos'è OpenSSL?",
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <div className="bg-teal-900/20 border-l-4 border-teal-500 p-6 rounded-r-lg">
          <strong className="text-teal-300 text-xl">OpenSSL è un toolkit crittografico open-source</strong>
          <p className="text-gray-300 mt-3 text-lg">
            La libreria crittografica più usata al mondo per implementare SSL/TLS e gestire certificati digitali.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-teal-300 mt-8 mb-4">🌟 Caratteristiche Principali</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
            <div className="text-4xl mb-3">🌍</div>
            <strong className="text-teal-300 text-lg">Cross-Platform</strong>
            <p className="text-gray-300 mt-2">Funziona su Windows, Linux, macOS, BSD, Unix</p>
          </div>

          <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
            <div className="text-4xl mb-3">🏆</div>
            <strong className="text-teal-300 text-lg">Industry Standard</strong>
            <p className="text-gray-300 mt-2">Usato da Apache, Nginx, server web, VPN, applicazioni enterprise</p>
          </div>

          <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
            <div className="text-4xl mb-3">🔐</div>
            <strong className="text-teal-300 text-lg">Completo</strong>
            <p className="text-gray-300 mt-2">RSA, AES, DES, SHA, MD5, certificati X.509, SSL/TLS</p>
          </div>

          <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
            <div className="text-4xl mb-3">🆓</div>
            <strong className="text-teal-300 text-lg">Open Source</strong>
            <p className="text-gray-300 mt-2">Gratuito, codice sorgente disponibile, community attiva</p>
          </div>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mt-8">
          <strong className="text-blue-300">💡 Differenza con PowerShell:</strong><br />
          <span className="text-gray-300">
            • <strong>PowerShell:</strong> Usa API .NET (specifico Windows)<br />
            • <strong>OpenSSL:</strong> Tool standalone (funziona ovunque)<br />
            • <strong>Formati:</strong> PowerShell usa XML, OpenSSL usa PEM/DER (standard IETF)
          </span>
        </div>
      </div>
    ),
  },

  // Slide 14: Installazione OpenSSL
  {
    id: 14,
    title: 'Installazione OpenSSL',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-teal-300 mb-4">📥 Come Installare OpenSSL</h3>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">🪟 Windows</strong>
          <p className="text-gray-300 mb-4">Scarica l'installer pre-compilato:</p>
          <div className="bg-gray-800 p-4 rounded-lg text-teal-400 mb-4">
            https://slproweb.com/products/Win32OpenSSL.html
          </div>
          <p className="text-gray-300 text-sm">Scarica <strong>"Win64 OpenSSL v3.x.x"</strong> e installa normalmente.</p>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">🐧 Linux (Ubuntu/Debian)</strong>
          <CodeBlock language="bash">{`# Installa OpenSSL (di solito già presente)
sudo apt update
sudo apt install openssl

# Verifica installazione
openssl version`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">🍎 macOS</strong>
          <CodeBlock language="bash">{`# OpenSSL è già incluso in macOS
# Per versione aggiornata usa Homebrew:
brew install openssl

# Verifica
openssl version`}</CodeBlock>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Verifica Installazione</strong>
          <p className="text-gray-300 mt-2">Apri il terminale (CMD/Bash/Terminal) e digita:</p>
          <CodeBlock language="bash">{`openssl version`}</CodeBlock>
          <p className="text-gray-300 mt-3">Dovresti vedere qualcosa come: <code className="text-teal-400">OpenSSL 3.0.x</code></p>
        </div>
      </div>
    ),
  },

  // Slide 15: Setup Lab
  {
    id: 15,
    title: 'STEP 1: Setup Laboratorio',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-teal-300 mb-4">📁 Creiamo la Struttura</h3>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">💡 Lavoriamo Cross-Platform</strong><br />
          <span className="text-gray-300">I comandi funzionano su Windows CMD, PowerShell, Linux Bash e macOS Terminal!</span>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">Windows (CMD o PowerShell)</strong>
          <CodeBlock language="cmd">{`REM Crea cartella principale
mkdir C:\\OpenSSL_Lab
cd C:\\OpenSSL_Lab

REM Crea sottocartelle per Alice e Bob
mkdir Alice
mkdir Bob

REM Verifica struttura
dir`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">Linux / macOS</strong>
          <CodeBlock language="bash">{`# Crea cartella principale
mkdir ~/OpenSSL_Lab
cd ~/OpenSSL_Lab

# Crea sottocartelle per Alice e Bob
mkdir Alice Bob

# Verifica struttura
ls -la`}</CodeBlock>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 font-mono text-sm text-green-400">
{`OpenSSL_Lab/
├── Alice/
└── Bob/`}
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">📂 Cosa rappresentano:</strong><br />
          <span className="text-gray-300">
            • <strong>Alice/</strong> - Chiavi e file di Alice<br />
            • <strong>Bob/</strong> - Chiavi e file di Bob<br />
            <br />
            Simuleremo lo scambio di messaggi cifrati tra loro!
          </span>
        </div>
      </div>
    ),
  },

  // Slide 16: Generazione Chiavi Alice
  {
    id: 16,
    title: 'STEP 2: Generazione Chiavi Alice',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">
          <span className="px-4 py-2 bg-blue-900/50 border-2 border-blue-700 rounded-lg text-blue-300 font-bold">👩‍💼 ALICE</span>
          <span className="text-teal-300 ml-3">- Genera la sua coppia di chiavi RSA</span>
        </h3>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">1️⃣ Genera chiave PRIVATA (2048 bit)</strong>
          <CodeBlock language="bash">{`# Entra nella cartella di Alice
cd Alice

# Genera chiave privata RSA 2048 bit
openssl genrsa -out alice_private.pem 2048`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-sm text-gray-400 mt-4">
{`Generating RSA private key, 2048 bit long modulus
.....+++
.........+++
e is 65537 (0x10001)`}
          </div>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">2️⃣ Estrai chiave PUBBLICA dalla privata</strong>
          <CodeBlock language="bash">{`# Estrai chiave pubblica
openssl rsa -in alice_private.pem -pubout -out alice_public.pem`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-sm text-green-400 mt-4">
            writing RSA key
          </div>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">3️⃣ Visualizza le chiavi generate</strong>
          <CodeBlock language="bash">{`# Lista file
ls

# Mostra chiave pubblica (leggibile)
openssl rsa -in alice_public.pem -pubin -text -noout`}</CodeBlock>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Alice ha generato:</strong><br />
          <span className="text-gray-300">
            • <strong>alice_private.pem</strong> - Chiave privata (da mantenere SEGRETA) 🔒<br />
            • <strong>alice_public.pem</strong> - Chiave pubblica (da condividere) 🔓
          </span>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">📄 Formato PEM:</strong><br />
          <span className="text-gray-300">
            PEM (Privacy Enhanced Mail) è il formato standard per chiavi e certificati.<br />
            È un file di testo con header <code className="bg-gray-800 px-2 py-1 rounded">-----BEGIN RSA PRIVATE KEY-----</code>
          </span>
        </div>
      </div>
    ),
  },

  // Slide 17: Generazione Chiavi Bob
  {
    id: 17,
    title: 'STEP 3: Generazione Chiavi Bob',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">
          <span className="px-4 py-2 bg-purple-900/50 border-2 border-purple-700 rounded-lg text-purple-300 font-bold">👨‍💼 BOB</span>
          <span className="text-teal-300 ml-3">- Genera le sue chiavi</span>
        </h3>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">1️⃣ Bob genera la sua chiave privata</strong>
          <CodeBlock language="bash">{`# Torna alla cartella principale e vai in Bob
cd ../Bob

# Genera chiave privata RSA 2048 bit
openssl genrsa -out bob_private.pem 2048`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">2️⃣ Bob estrae la chiave pubblica</strong>
          <CodeBlock language="bash">{`# Estrai chiave pubblica
openssl rsa -in bob_private.pem -pubout -out bob_public.pem`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">3️⃣ Verifica i file generati</strong>
          <CodeBlock language="bash">{`# Lista file
ls

# Mostra dettagli chiave pubblica
cat bob_public.pem`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-xs text-gray-400 mt-4">
{`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
-----END PUBLIC KEY-----`}
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Bob ha generato:</strong><br />
          <span className="text-gray-300">
            • <strong>bob_private.pem</strong> - Chiave privata (segreta) 🔒<br />
            • <strong>bob_public.pem</strong> - Chiave pubblica 🔓
          </span>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Recap:</strong><br />
          <span className="text-gray-300">
            Ora sia Alice che Bob hanno le loro coppie di chiavi RSA.<br />
            Prossimo passo: scambiarsi le chiavi PUBBLICHE!
          </span>
        </div>
      </div>
    ),
  },

  // Slide 18: Scambio Chiavi Pubbliche
  {
    id: 18,
    title: 'STEP 4: Scambio Chiavi Pubbliche',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-teal-300 mb-4">🔄 Alice e Bob si scambiano le chiavi pubbliche</h3>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Cosa stiamo facendo:</strong><br />
          <span className="text-gray-300">
            Le chiavi pubbliche possono essere condivise liberamente via email, USB, o qualsiasi mezzo.<br />
            Simuliamo lo scambio copiando i file.
          </span>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">Windows (CMD/PowerShell)</strong>
          <CodeBlock language="cmd">{`REM Alice copia la sua chiave pubblica a Bob
copy Alice\\alice_public.pem Bob\\alice_public.pem

REM Bob copia la sua chiave pubblica ad Alice
copy Bob\\bob_public.pem Alice\\bob_public.pem

REM Verifica
dir Alice\\*.pem
dir Bob\\*.pem`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">Linux / macOS</strong>
          <CodeBlock language="bash">{`# Torna alla cartella principale
cd ..

# Alice copia la sua chiave pubblica a Bob
cp Alice/alice_public.pem Bob/

# Bob copia la sua chiave pubblica ad Alice
cp Bob/bob_public.pem Alice/

# Verifica
ls Alice/*.pem
ls Bob/*.pem`}</CodeBlock>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 font-mono text-sm text-gray-300">
{`# Alice dovrebbe avere:
alice_private.pem  (🔒 sua privata)
alice_public.pem   (🔓 sua pubblica)
bob_public.pem     (🔓 pubblica di Bob)

# Bob dovrebbe avere:
bob_private.pem    (🔒 sua privata)
bob_public.pem     (🔓 sua pubblica)
alice_public.pem   (🔓 pubblica di Alice)`}
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Scambio completato!</strong><br />
          <span className="text-gray-300">
            Ora possono cifrare messaggi uno per l'altro usando le chiavi pubbliche scambiate.
          </span>
        </div>
      </div>
    ),
  },

  // Slide 19: Alice Cifra per Bob
  {
    id: 19,
    title: 'STEP 5: Alice Invia Messaggio Cifrato a Bob',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">
          <span className="px-4 py-2 bg-blue-900/50 border-2 border-blue-700 rounded-lg text-blue-300 font-bold">👩‍💼 ALICE</span>
          <span className="text-teal-300 ml-3">- Cifra un messaggio per Bob</span>
        </h3>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">Scenario:</strong>
          <span className="text-gray-300 ml-2">Alice vuole inviare "Ciao Bob! Tutto OK?" in modo sicuro.</span>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">1️⃣ Alice crea il messaggio</strong>
          <CodeBlock language="bash">{`# Vai nella cartella di Alice
cd Alice

# Crea file con il messaggio
echo "Ciao Bob! Tutto OK?" > messaggio.txt

# Verifica contenuto
cat messaggio.txt`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">2️⃣ Alice cifra con la chiave PUBBLICA di Bob</strong>
          <CodeBlock language="bash">{`# Cifra il messaggio usando la chiave pubblica di Bob
openssl rsautl -encrypt -inkey bob_public.pem -pubin -in messaggio.txt -out messaggio_cifrato.bin

# Il file cifrato è binario, non leggibile
ls -lh messaggio_cifrato.bin`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-sm text-green-400 mt-4">
            -rw-r--r-- 1 alice users 256 Nov 3 14:30 messaggio_cifrato.bin
          </div>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">3️⃣ Alice "invia" il messaggio cifrato a Bob</strong>
          <CodeBlock language="bash">{`# Copia il file cifrato nella cartella di Bob
cp messaggio_cifrato.bin ../Bob/

# Verifica
ls ../Bob/messaggio_cifrato.bin`}</CodeBlock>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">📤 Messaggio inviato!</strong><br />
          <span className="text-gray-300">
            Anche se qualcuno intercetta <code className="bg-gray-800 px-2 py-1 rounded">messaggio_cifrato.bin</code>,
            non può leggerlo senza la chiave privata di Bob!
          </span>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">⚠️ Nota:</strong>
          <span className="text-gray-300 ml-2">
            Il file cifrato è binario (non testo). OpenSSL usa <code className="bg-gray-800 px-2 py-1 rounded">rsautl</code> per cifrare con RSA.
          </span>
        </div>
      </div>
    ),
  },

  // Slide 20: Bob Decifra
  {
    id: 20,
    title: 'STEP 6: Bob Decifra il Messaggio',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl mb-4">
          <span className="px-4 py-2 bg-purple-900/50 border-2 border-purple-700 rounded-lg text-purple-300 font-bold">👨‍💼 BOB</span>
          <span className="text-teal-300 ml-3">- Decifra il messaggio di Alice</span>
        </h3>

        <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg">
          <strong className="text-purple-300">📥 Bob ha ricevuto:</strong>
          <span className="text-gray-300 ml-2">messaggio_cifrato.bin (file binario illleggibile)</span>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">1️⃣ Bob decifra con la sua chiave PRIVATA</strong>
          <CodeBlock language="bash">{`# Vai nella cartella di Bob
cd ../Bob

# Decifra usando la chiave privata di Bob
openssl rsautl -decrypt -inkey bob_private.pem -in messaggio_cifrato.bin -out messaggio_decifrato.txt`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">2️⃣ Bob legge il messaggio originale</strong>
          <CodeBlock language="bash">{`# Visualizza il messaggio decifrato
cat messaggio_decifrato.txt`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-2xl text-green-400 mt-4 text-center">
            Ciao Bob! Tutto OK?
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">🎉 Successo!</strong><br />
          <span className="text-gray-300">
            Bob ha decifrato correttamente il messaggio di Alice.<br />
            Solo lui, con la sua chiave privata, poteva leggere questo messaggio!
          </span>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Cosa è successo:</strong><br />
          <span className="text-gray-300">
            1. Alice ha cifrato con la chiave PUBBLICA di Bob<br />
            2. Solo Bob, con la sua chiave PRIVATA, può decifrare<br />
            3. La comunicazione è sicura e confidenziale!
          </span>
        </div>
      </div>
    ),
  },

  // Continua con le slide rimanenti...
  // Per brevità, aggiungo le slide essenziali: Firma Digitale, Certificati, Conclusioni

  // Slide 21: Firma Digitale con OpenSSL
  {
    id: 21,
    title: 'STEP 7: Firme Digitali con OpenSSL',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-teal-300 mb-4">✍️ Firma Digitale per Autenticazione</h3>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">1️⃣ Alice crea e firma un documento</strong>
          <CodeBlock language="bash">{`# Crea documento
cd ../Alice
echo "Contratto approvato" > contratto.txt

# Alice firma con la SUA chiave PRIVATA
openssl dgst -sha256 -sign alice_private.pem -out contratto.sig contratto.txt`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">2️⃣ Alice invia documento + firma a Bob</strong>
          <CodeBlock language="bash">{`# Copia documento e firma a Bob
cp contratto.txt ../Bob/
cp contratto.sig ../Bob/`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">3️⃣ Bob verifica la firma con chiave PUBBLICA di Alice</strong>
          <CodeBlock language="bash">{`# Bob verifica l'autenticità
cd ../Bob
openssl dgst -sha256 -verify alice_public.pem -signature contratto.sig contratto.txt`}</CodeBlock>
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 font-mono text-xl text-green-400 mt-4">
            Verified OK
          </div>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300 text-lg">✅ Firma Valida!</strong><br />
          <span className="text-gray-300">
            Bob ha confermato che:<br />
            • Il documento proviene davvero da Alice<br />
            • Il contenuto non è stato modificato<br />
            • Alice non può negare di averlo firmato (non ripudio)
          </span>
        </div>
      </div>
    ),
  },

  // Slide 22: Certificati X.509
  {
    id: 22,
    title: 'BONUS: Certificati X.509 Self-Signed',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-teal-300 mb-4">📜 Creare un Certificato Self-Signed</h3>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <strong className="text-blue-300">💡 Cos'è un Certificato X.509?</strong><br />
          <span className="text-gray-300">
            Un certificato digitale che contiene chiave pubblica + identità (nome, email, organizzazione).<br />
            Usato in HTTPS, SSL/TLS, email sicure, code signing.
          </span>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">Genera Certificato Self-Signed (valido 365 giorni)</strong>
          <CodeBlock language="bash">{`# Genera chiave privata + certificato self-signed in un comando
openssl req -x509 -newkey rsa:2048 -keyout server_key.pem -out server_cert.pem -days 365 -nodes

# Ti chiederà:
# Country Name: IT
# Organization Name: ITTS
# Common Name: www.example.com`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">Visualizza il Certificato</strong>
          <CodeBlock language="bash">{`# Leggi il certificato in formato leggibile
openssl x509 -in server_cert.pem -text -noout`}</CodeBlock>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">⚠️ Self-Signed vs Certificate Authority (CA):</strong><br />
          <span className="text-gray-300">
            • <strong>Self-Signed:</strong> Firmato da te stesso, browser mostrano warning<br />
            • <strong>CA (Let's Encrypt, DigiCert):</strong> Firmato da autorità fidata, nessun warning<br />
            <br />
            I certificati self-signed vanno bene per test e reti interne!
          </span>
        </div>
      </div>
    ),
  },

  // Slide 23: Formati Chiavi
  {
    id: 23,
    title: 'Formati di Chiavi e Conversioni',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-teal-300 mb-4">🔄 Formati Comuni per Chiavi RSA</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
            <strong className="text-teal-300 text-lg mb-3 block">📄 PEM (Privacy Enhanced Mail)</strong>
            <p className="text-gray-300 text-sm mb-3">
              Formato testo Base64, più comune.<br />
              Header: <code className="text-xs bg-gray-800 px-1 rounded">-----BEGIN RSA PRIVATE KEY-----</code>
            </p>
            <p className="text-teal-400 text-sm">✅ Usato da: Apache, Nginx, OpenSSL</p>
          </div>

          <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
            <strong className="text-teal-300 text-lg mb-3 block">🔒 DER (Distinguished Encoding Rules)</strong>
            <p className="text-gray-300 text-sm mb-3">
              Formato binario, più compatto.<br />
              Usato in Java, alcuni dispositivi hardware.
            </p>
            <p className="text-teal-400 text-sm">✅ Usato da: Java KeyStore, hardware tokens</p>
          </div>

          <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
            <strong className="text-teal-300 text-lg mb-3 block">💼 PKCS#12 (.p12, .pfx)</strong>
            <p className="text-gray-300 text-sm mb-3">
              Contiene chiave privata + certificato + CA chain.<br />
              Protetto da password.
            </p>
            <p className="text-teal-400 text-sm">✅ Usato da: Windows, browser, email client</p>
          </div>

          <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
            <strong className="text-teal-300 text-lg mb-3 block">🔑 SSH Format</strong>
            <p className="text-gray-300 text-sm mb-3">
              Formato specifico per SSH (ssh-keygen).<br />
              Header: <code className="text-xs bg-gray-800 px-1 rounded">-----BEGIN OPENSSH PRIVATE KEY-----</code>
            </p>
            <p className="text-teal-400 text-sm">✅ Usato da: SSH, Git, remote servers</p>
          </div>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6 mt-6">
          <strong className="text-teal-300 text-lg mb-4 block">🔄 Conversioni Comuni</strong>
          <CodeBlock language="bash">{`# PEM → DER
openssl rsa -in key.pem -outform DER -out key.der

# DER → PEM
openssl rsa -in key.der -inform DER -out key.pem

# Crea PKCS#12 (chiave + certificato)
openssl pkcs12 -export -out identity.p12 -inkey key.pem -in cert.pem

# Estrai da PKCS#12
openssl pkcs12 -in identity.p12 -out key.pem -nodes`}</CodeBlock>
        </div>
      </div>
    ),
  },

  // Slide 24: Cifratura Ibrida
  {
    id: 24,
    title: 'Cifratura Ibrida: RSA + AES',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-teal-300 mb-4">🔐 Combinare RSA e AES per File Grandi</h3>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">⚠️ Problema RSA:</strong><br />
          <span className="text-gray-300">
            RSA può cifrare solo ~245 bytes (con chiavi 2048 bit).<br />
            Per file grandi serve <strong>cifratura ibrida</strong>!
          </span>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">1️⃣ Cifra file grande con AES (simmetrico, veloce)</strong>
          <CodeBlock language="bash">{`# Genera chiave AES casuale (256 bit)
openssl rand -base64 32 > aes_key.txt

# Cifra file grande con AES
openssl enc -aes-256-cbc -salt -in documento_grande.pdf -out documento.enc -pass file:aes_key.txt`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">2️⃣ Cifra chiave AES con RSA (asimmetrico)</strong>
          <CodeBlock language="bash">{`# Cifra la chiave AES con la chiave pubblica di Bob
openssl rsautl -encrypt -inkey bob_public.pem -pubin -in aes_key.txt -out aes_key.enc`}</CodeBlock>
        </div>

        <div className="bg-teal-900/30 border-2 border-teal-700 rounded-lg p-6">
          <strong className="text-teal-300 text-lg mb-4 block">3️⃣ Bob decifra (processo inverso)</strong>
          <CodeBlock language="bash">{`# Bob decifra la chiave AES con la sua chiave privata RSA
openssl rsautl -decrypt -inkey bob_private.pem -in aes_key.enc -out aes_key_decrypted.txt

# Bob decifra il file grande con la chiave AES
openssl enc -d -aes-256-cbc -in documento.enc -out documento_originale.pdf -pass file:aes_key_decrypted.txt`}</CodeBlock>
        </div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
          <strong className="text-green-300">✅ Risultato:</strong><br />
          <span className="text-gray-300">
            • File grande cifrato velocemente con AES<br />
            • Chiave AES protetta con RSA<br />
            • Solo Bob può recuperare sia chiave che file!
          </span>
        </div>
      </div>
    ),
  },

  // Slide 25: Best Practices
  {
    id: 25,
    title: 'Best Practices OpenSSL',
    category: 'openssl',
    content: () => (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-teal-300 mb-4">✅ Raccomandazioni per Uso Reale</h3>

        <div className="grid gap-4">
          <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
            <strong className="text-green-300 text-lg">1. Dimensione Chiavi</strong>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>• Minimo: <strong>2048 bit</strong> (sicuro fino al 2030)</li>
              <li>• Consigliato: <strong>3072-4096 bit</strong> per dati sensibili</li>
              <li>• MAI usare 1024 bit (deprecato dal 2013)</li>
            </ul>
          </div>

          <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
            <strong className="text-green-300 text-lg">2. Protezione Chiavi Private</strong>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>• Cifra sempre con password: <code className="bg-gray-800 px-2 py-1 rounded text-sm">-aes256</code></li>
              <li>• Permessi file: <code className="bg-gray-800 px-2 py-1 rounded text-sm">chmod 600 private.pem</code></li>
              <li>• Non condividere MAI via email/chat</li>
              <li>• Usa HSM (Hardware Security Module) in produzione</li>
            </ul>
          </div>

          <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
            <strong className="text-green-300 text-lg">3. Hash Algorithm</strong>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>• Usa <strong>SHA-256</strong> o superiore (SHA-384, SHA-512)</li>
              <li>• Evita MD5 e SHA-1 (compromessi)</li>
            </ul>
          </div>

          <div className="bg-green-900/20 border-l-4 border-green-500 p-6 rounded-r-lg">
            <strong className="text-green-300 text-lg">4. Cifratura Messaggi</strong>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li>• Per file &gt; 200 bytes: usa <strong>cifratura ibrida</strong> (RSA + AES)</li>
              <li>• AES-256 per simmetrico</li>
              <li>• Usa padding OAEP per RSA (più sicuro di PKCS#1)</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <strong className="text-yellow-300">⚠️ Da Evitare:</strong><br />
          <span className="text-gray-300">
            ❌ Non usare <code className="bg-gray-800 px-2 py-1 rounded">-nodes</code> in produzione (chiave non cifrata)<br />
            ❌ Non riutilizzare stesse chiavi per scopi diversi<br />
            ❌ Non implementare crittografia custom (usa librerie testate)
          </span>
        </div>
      </div>
    ),
  },

  // Slide 26: Conclusioni OpenSSL
  {
    id: 26,
    title: 'Conclusioni OpenSSL',
    category: 'openssl',
    content: () => (
      <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
        <h2 className="text-5xl font-bold text-teal-300 mb-4 text-center">
          Esercitazione OpenSSL Completata!
        </h2>
        <div className="text-8xl mb-4">🎓</div>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-8 rounded-r-lg max-w-3xl">
          <strong className="text-green-300 text-xl">✅ Competenze Acquisite:</strong>
          <ul className="mt-4 space-y-2 text-gray-300 text-lg">
            <li>• Installazione e uso di OpenSSL cross-platform</li>
            <li>• Generazione chiavi RSA in formato PEM</li>
            <li>• Cifratura e decifratura messaggi</li>
            <li>• Firme digitali con verifica</li>
            <li>• Certificati X.509 self-signed</li>
            <li>• Cifratura ibrida RSA + AES</li>
            <li>• Conversione tra formati (PEM, DER, PKCS#12)</li>
          </ul>
        </div>

        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-8 rounded-r-lg max-w-3xl">
          <strong className="text-blue-300 text-xl">🌍 Vantaggi OpenSSL:</strong>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>• <strong>Cross-platform:</strong> Funziona su Windows, Linux, macOS</li>
            <li>• <strong>Industry standard:</strong> Usato in produzione globalmente</li>
            <li>• <strong>Formati standard:</strong> PEM, X.509 compatibili ovunque</li>
            <li>• <strong>Completo:</strong> RSA, AES, certificati, SSL/TLS</li>
          </ul>
        </div>

        <p className="text-xl text-gray-400 mt-12 text-center">
          Ora sai usare lo strumento crittografico più importante al mondo!
        </p>

        <div className="bg-teal-900/20 border-l-4 border-teal-500 p-6 rounded-r-lg max-w-3xl text-center">
          <strong className="text-teal-300 text-lg">📚 Prossimo Passo:</strong><br />
          <span className="text-gray-300 text-lg mt-2 block">
            Continua con l'esercitazione PowerShell per vedere l'approccio .NET!
          </span>
        </div>
      </div>
    ),
  },
];
