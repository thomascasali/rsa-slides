import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { SlideViewer } from './components/SlideViewer';

type ViewMode = 'dashboard' | 'slides';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('dashboard');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleGoToSlide = (slideIndex: number) => {
    setCurrentSlideIndex(slideIndex);
    setViewMode('slides');
  };

  const handleGoHome = () => {
    setViewMode('dashboard');
  };

  return (
    <div className="min-h-screen">
      {viewMode === 'dashboard' ? (
        <Dashboard onGoToSlide={handleGoToSlide} />
      ) : (
        <SlideViewer
          initialSlideIndex={currentSlideIndex}
          onGoHome={handleGoHome}
        />
      )}
    </div>
  );
}

export default App;
