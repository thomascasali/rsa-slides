import { Lock, Book, Code, Zap, Shield, ArrowRight, Terminal } from 'lucide-react';
import { getSlideStats, getSlidePosition } from '../data/slides';

interface DashboardProps {
  onGoToSlide: (slideIndex: number) => void;
}

export function Dashboard({ onGoToSlide }: DashboardProps) {
  const stats = getSlideStats();

  // Quick-start cards con ID precisi
  const quickStartCards = [
    {
      id: 1,
      title: 'Inizia dall\'inizio',
      description: 'Introduzione alla Crittografia Asimmetrica',
      icon: Book,
      color: 'blue',
      category: 'intro',
    },
    {
      id: 7,
      title: 'Crittografia Asimmetrica',
      description: 'Algoritmo RSA e Generazione Chiavi',
      icon: Lock,
      color: 'purple',
      category: 'asymmetric',
    },
    {
      id: 12,
      title: 'Pratica OpenSSL',
      description: 'Esercitazioni Cross-Platform con OpenSSL',
      icon: Terminal,
      color: 'teal',
      category: 'openssl',
    },
    {
      id: 27,
      title: 'Pratica PowerShell',
      description: 'Esercitazioni Windows con Alice e Bob',
      icon: Code,
      color: 'orange',
      category: 'practice',
    },
    {
      id: 47,
      title: 'Argomenti Avanzati',
      description: 'Sicurezza, Limitazioni e Applicazioni Reali',
      icon: Shield,
      color: 'red',
      category: 'advanced',
    },
  ];

  const handleQuickStart = (slideId: number) => {
    const position = getSlidePosition(slideId);
    onGoToSlide(position);
  };

  const colorClasses = {
    blue: {
      bg: 'bg-gradient-to-br from-blue-900/50 to-blue-800/50',
      border: 'border-blue-700',
      text: 'text-blue-300',
      hover: 'hover:border-blue-500',
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-900/50 to-purple-800/50',
      border: 'border-purple-700',
      text: 'text-purple-300',
      hover: 'hover:border-purple-500',
    },
    teal: {
      bg: 'bg-gradient-to-br from-teal-900/50 to-teal-800/50',
      border: 'border-teal-700',
      text: 'text-teal-300',
      hover: 'hover:border-teal-500',
    },
    orange: {
      bg: 'bg-gradient-to-br from-orange-900/50 to-orange-800/50',
      border: 'border-orange-700',
      text: 'text-orange-300',
      hover: 'hover:border-orange-500',
    },
    red: {
      bg: 'bg-gradient-to-br from-red-900/50 to-red-800/50',
      border: 'border-red-700',
      text: 'text-red-300',
      hover: 'hover:border-red-500',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-blue-700/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center mb-6">
            <Lock className="w-16 h-16 text-blue-300" />
          </div>
          <h1 className="text-6xl font-bold text-center text-blue-300 mb-4">
            Dispensa Crittografia
          </h1>
          <p className="text-xl text-center text-gray-300">
            Materiale didattico interattivo sull'Algoritmo RSA
          </p>
          <p className="text-center text-gray-400 mt-2">
            Prof. Thomas Casali - ITTS Sistemi e Reti - Classe Quinta
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Statistiche */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-300">{stats.total}</div>
            <div className="text-gray-400 mt-2">Slide Totali</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 border border-indigo-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-indigo-300">{stats.byCategory.intro}</div>
            <div className="text-gray-400 mt-2">Intro</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border border-purple-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-purple-300">{stats.byCategory.asymmetric + stats.byCategory.theory}</div>
            <div className="text-gray-400 mt-2">Teoria</div>
          </div>
          <div className="bg-gradient-to-br from-teal-900/30 to-teal-800/30 border border-teal-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-teal-300">{stats.byCategory.openssl}</div>
            <div className="text-gray-400 mt-2">OpenSSL</div>
          </div>
          <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 border border-orange-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-orange-300">{stats.byCategory.practice}</div>
            <div className="text-gray-400 mt-2">PowerShell</div>
          </div>
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 border border-red-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-red-300">{stats.byCategory.advanced}</div>
            <div className="text-gray-400 mt-2">Avanzato</div>
          </div>
        </div>

        {/* Quick Start Cards */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-200 mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-400" />
            Accesso Rapido
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickStartCards.map((card) => {
              const Icon = card.icon;
              const colors = colorClasses[card.color as keyof typeof colorClasses];

              return (
                <button
                  key={card.id}
                  onClick={() => handleQuickStart(card.id)}
                  className={`${colors.bg} border-2 ${colors.border} ${colors.hover} rounded-xl p-8 text-left transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className={`w-12 h-12 ${colors.text}`} />
                      <ArrowRight className={`w-6 h-6 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>
                    <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>
                      {card.title}
                    </h3>
                    <p className="text-gray-300">
                      {card.description}
                    </p>
                    <div className="mt-4 text-sm text-gray-400">
                      Slide #{card.id}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenuti del Corso */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-200 mb-6 flex items-center gap-3">
            <Book className="w-8 h-8 text-blue-400" />
            Contenuti del Corso
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-4">📚 Teoria</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Crittografia Simmetrica vs Asimmetrica</li>
                <li>• Matematica di Base (Numeri Primi, φ di Eulero)</li>
                <li>• Algoritmo RSA - I 5 Passi</li>
                <li>• Formule di Cifratura e Decifratura</li>
                <li>• Esempi Numerici Completi</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-300 mb-4">🔧 Pratica OpenSSL</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Installazione Cross-Platform (Win/Linux/Mac)</li>
                <li>• Generazione Chiavi RSA con openssl</li>
                <li>• Encryption/Decryption con RSA</li>
                <li>• Firme Digitali e Certificati X.509</li>
                <li>• Cifratura Ibrida (RSA + AES)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-orange-300 mb-4">⚡ Pratica PowerShell</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Setup Ambiente Windows</li>
                <li>• Generazione Chiavi con .NET APIs</li>
                <li>• Cifratura e Decifratura Messaggi</li>
                <li>• Firme Digitali e Verifica</li>
                <li>• Test di Sicurezza e Manomissione</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-300 mb-4">🔐 Sicurezza</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Problema della Fattorizzazione</li>
                <li>• Dimensioni delle Chiavi (2048-4096 bit)</li>
                <li>• Limitazioni di RSA</li>
                <li>• Cifratura Ibrida (RSA + AES)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-300 mb-4">🌐 Applicazioni</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• HTTPS / SSL / TLS</li>
                <li>• Email Sicure (PGP/GPG)</li>
                <li>• Firme Digitali per Documenti</li>
                <li>• VPN e SSH</li>
                <li>• Transazioni Bancarie</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-blue-300 mb-3">ℹ️ Come Utilizzare</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• <strong>Clicca sulle card sopra</strong> per saltare direttamente a una sezione</li>
            <li>• <strong>Usa le frecce</strong> della tastiera (← →) per navigare tra le slide</li>
            <li>• <strong>Segui l'ordine consigliato</strong>: Intro → Teoria → Pratica → Avanzato</li>
            <li>• <strong>Tieni aperte</strong> più finestre durante l'esercitazione pratica</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Anno Scolastico 2024-2025 - Dispensa Crittografia Interattiva</p>
          <p className="mt-2">Realizzato con React 18 • TypeScript • Tailwind CSS • Vite</p>
        </div>
      </div>
    </div>
  );
}
