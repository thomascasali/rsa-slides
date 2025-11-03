import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { slides } from '../data/slides';

interface SlideViewerProps {
  initialSlideIndex?: number;
  onGoHome: () => void;
}

export function SlideViewer({ initialSlideIndex = 0, onGoHome }: SlideViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialSlideIndex);

  const currentSlide = slides[currentIndex];
  const SlideContent = currentSlide?.content;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goNext();
      } else if (e.key === 'ArrowLeft') {
        goPrevious();
      } else if (e.key === 'Home' || e.key === 'Escape') {
        onGoHome();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex]);

  const goNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentIndex(index);
    }
  };

  // Category colors
  const categoryColors = {
    intro: 'from-blue-900/50 to-blue-800/50 border-blue-700',
    theory: 'from-indigo-900/50 to-indigo-800/50 border-indigo-700',
    asymmetric: 'from-purple-900/50 to-purple-800/50 border-purple-700',
    openssl: 'from-teal-900/50 to-teal-800/50 border-teal-700',
    practice: 'from-orange-900/50 to-orange-800/50 border-orange-700',
    advanced: 'from-red-900/50 to-red-800/50 border-red-700',
  };

  const categoryBg = categoryColors[currentSlide.category];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 md:p-8">
      <div className={`bg-gradient-to-br ${categoryBg} border-2 rounded-2xl shadow-2xl max-w-6xl w-full relative`}>
        {/* Home Button */}
        <button
          onClick={onGoHome}
          className="absolute top-4 right-4 bg-gray-800/80 hover:bg-gray-700 border-2 border-gray-600 text-gray-300 p-3 rounded-lg transition-all duration-200 hover:scale-105 z-10"
          title="Torna alla Dashboard"
        >
          <Home className="w-5 h-5" />
        </button>

        {/* Slide Content */}
        <div className="p-8 md:p-12 min-h-[600px] flex flex-col">
          {/* Title */}
          {currentSlide.title && (
            <h1 className="text-3xl md:text-4xl font-bold text-gray-200 mb-8 border-b-2 border-gray-600 pb-4">
              {currentSlide.title}
            </h1>
          )}

          {/* Content Area - Scrollable */}
          <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
            {SlideContent && <SlideContent />}
          </div>

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t-2 border-gray-600 flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={goPrevious}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-800/50 disabled:cursor-not-allowed text-gray-200 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
            >
              <ChevronLeft className="w-5 h-5" />
              Indietro
            </button>

            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              {/* Dots */}
              <div className="hidden md:flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-blue-400 scale-150'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    title={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <span className="text-gray-400 font-medium ml-4">
                {currentIndex + 1} / {slides.length}
              </span>
            </div>

            {/* Next Button */}
            <button
              onClick={goNext}
              disabled={currentIndex === slides.length - 1}
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-800/50 disabled:cursor-not-allowed text-gray-200 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
            >
              Avanti
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(75, 85, 99, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(96, 165, 250, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(96, 165, 250, 0.7);
        }
      `}</style>
    </div>
  );
}
