import React, { useState } from 'react';
import { Home, Settings, Music, Wind, Volume2, User, ChevronUp, ChevronDown } from 'lucide-react';

interface ControlBarProps {
  onHome: () => void;
  activeMode: string;
}

export const ControlBar: React.FC<ControlBarProps> = ({ onHome, activeMode }) => {
  const [temp, setTemp] = useState(22.5);
  const [windLevel, setWindLevel] = useState(1); // 0: off, 1, 2, 3
  const [volume, setVolume] = useState(65);

  const handleTempUp = () => setTemp(prev => Math.min(prev + 0.5, 30));
  const handleTempDown = () => setTemp(prev => Math.max(prev - 0.5, 16));

  const cycleWindLevel = () => {
    setWindLevel(prev => (prev + 1) % 4);
  };

  const getWindIcon = () => {
    if (windLevel === 0) return <Wind size={22} className="text-white/10" />;
    return <Wind size={22} className={windLevel > 0 ? "text-blue-400" : "text-white/50"} />;
  };

  return (
    <div className="flex items-center justify-between px-8 py-3 bg-black/80 backdrop-blur-xl border-t border-white/5 text-white/70">
      <div className="flex items-center gap-6">
        <button 
          onClick={onHome}
          className={`p-2.5 rounded-xl transition-all duration-300 ${activeMode === 'home' ? 'bg-white/10 text-white shadow-lg' : 'hover:bg-white/5'}`}
        >
          <Home size={24} />
        </button>
        <button className="p-2.5 rounded-xl hover:bg-white/5 transition-colors">
          <User size={24} />
        </button>
      </div>

      <div className="flex items-center gap-10">
        {/* Temperature Control */}
        <div className="flex items-center gap-4 bg-white/5 px-4 py-1.5 rounded-xl border border-white/5">
          <button 
            onClick={handleTempDown}
            className="text-blue-400 hover:scale-120 transition-transform active:scale-90 p-1"
          >
            <ChevronDown size={20} />
          </button>
          <div className="flex flex-col items-center min-w-[50px]">
            <span className="text-2xl font-black text-white leading-none tracking-tighter w-[60px] text-center">
              {temp.toFixed(1)}
            </span>
            <span className="text-[9px] font-bold text-white/40 mt-0.5 uppercase tracking-[0.2em]">Temp</span>
          </div>
          <button 
            onClick={handleTempUp}
            className="text-red-400 hover:scale-120 transition-transform active:scale-90 p-1"
          >
            <ChevronUp size={20} />
          </button>
        </div>
        
        <div className="h-8 w-px bg-white/10" />

        <div className="flex items-center gap-6">
          {/* Wind Speed Control */}
          <button 
            onClick={cycleWindLevel}
            className="flex flex-col items-center gap-1 p-2 hover:bg-white/10 rounded-xl transition-all min-w-[50px]"
          >
            <div className="relative">
              {getWindIcon()}
              {windLevel > 0 && (
                <span className="absolute -top-1 -right-2 text-[10px] font-black text-blue-400">
                  {windLevel}
                </span>
              )}
            </div>
            <span className="text-[8px] font-bold uppercase tracking-wider text-white/30">Wind</span>
          </button>

          <div className="flex items-center gap-3 group">
            <Music size={22} className="text-blue-400 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white leading-tight">Now Playing</span>
              <span className="text-[10px] text-white/40 leading-tight">Midnight City - M83</span>
            </div>
          </div>

          {/* Volume Slider */}
          <div className="flex items-center gap-3">
            <Volume2 size={20} className={volume === 0 ? "text-white/20" : "text-white/40"} />
            <div className="relative flex items-center group">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-24 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-blue-500 focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #3b82f6 ${volume}%, rgba(255, 255, 255, 0.1) ${volume}%)`
                }}
              />
              <style>{`
                input[type='range']::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 12px;
                  height: 12px;
                  background: white;
                  border-radius: 50%;
                  cursor: pointer;
                  box-shadow: 0 0 10px rgba(0,0,0,0.5);
                  opacity: 0;
                  transition: opacity 0.2s;
                }
                .group:hover input[type='range']::-webkit-slider-thumb {
                  opacity: 1;
                }
                input[type='range']::-moz-range-thumb {
                  width: 12px;
                  height: 12px;
                  background: white;
                  border-radius: 50%;
                  cursor: pointer;
                  border: none;
                  opacity: 0;
                  transition: opacity 0.2s;
                }
                .group:hover input[type='range']::-moz-range-thumb {
                  opacity: 1;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2.5 rounded-xl hover:bg-white/5 transition-colors">
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};
