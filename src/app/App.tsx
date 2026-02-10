import React, { useState } from 'react';
import { StatusBar } from './components/StatusBar';
import { ControlBar } from './components/ControlBar';
import { HomeView } from './components/HomeView';
import { DriveView } from './components/DriveView';
import { PlaceholderView } from './components/PlaceholderView';
import { CareModeView } from './components/CareModeView';
import { Coffee, Briefcase, Zap, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const App: React.FC = () => {
  const [activeMode, setActiveMode] = useState<string>('home');

  const renderContent = () => {
    switch (activeMode) {
      case 'home':
        return <HomeView onSelectMode={setActiveMode} />;
      case 'drive':
        return <DriveView onBack={() => setActiveMode('home')} />;
      case 'relax':
        return (
          <PlaceholderView 
            title="휴식모드" 
            icon={Coffee} 
            color="#fbbf24" 
            onBack={() => setActiveMode('home')} 
          />
        );
      case 'work':
        return (
          <PlaceholderView 
            title="업무모드" 
            icon={Briefcase} 
            color="#60a5fa" 
            onBack={() => setActiveMode('home')} 
          />
        );
      case 'charge':
        return (
          <PlaceholderView 
            title="충전모드" 
            icon={Zap} 
            color="#4ade80" 
            onBack={() => setActiveMode('home')} 
          />
        );
      case 'care':
        return (
          <CareModeView onBack={() => setActiveMode('home')} />
        );
      default:
        return <HomeView onSelectMode={setActiveMode} />;
    }
  };

  return (
    <div className="h-screen w-screen bg-[#050505] flex flex-col overflow-hidden select-none font-sans antialiased text-white selection:bg-blue-500/30">
      {/* Glossy background element */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[80px]" />
      </div>

      <StatusBar />
      
      <main className="flex-1 flex flex-col relative overflow-hidden max-w-[1180px] mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <ControlBar 
        activeMode={activeMode} 
        onHome={() => setActiveMode('home')} 
      />
    </div>
  );
};

export default App;
