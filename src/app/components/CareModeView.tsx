import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Music, 
  BellOff, 
  Zap, 
  Moon, 
  Play, 
  Pause, 
  CheckCircle2,
  ChevronRight,
  Volume2
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CareModeProps {
  onBack: () => void;
}

export const CareModeView: React.FC<CareModeProps> = ({ onBack }) => {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDND, setIsDND] = useState(false);
  const [isComfort, setIsComfort] = useState(false);
  const [isNapMode, setIsNapMode] = useState(false);

  const tracks = [
    { id: 1, title: '수면을 돕는 자장가', type: 'Sleep' },
    { id: 2, title: '아기상어 동요', type: 'Kids' },
    { id: 3, title: '엄마가 읽어주는 전래동화', type: 'Story' },
    { id: 4, title: '잔잔한 클래식 모음', type: 'Classic' },
    { id: 5, title: '멍멍이/야옹이 힐링 BGM', type: 'Pet' },
  ];

  const toggleTrack = (id: number) => {
    if (currentTrack === id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(id);
      setIsPlaying(true);
    }
  };

  const CardWrapper = ({ children, title, icon: Icon, active, onClick, colorClass }: any) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden rounded-[32px] p-6 border transition-all duration-500 flex flex-col h-full ${
        active 
          ? `bg-white/10 border-white/20 shadow-2xl shadow-white/5` 
          : 'bg-white/5 border-white/5 hover:bg-white/[0.08]'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-2xl ${active ? colorClass : 'bg-white/5'} text-white transition-colors duration-500`}>
          <Icon size={24} />
        </div>
        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${active ? 'bg-white/20 text-white' : 'bg-white/5 text-white/30'}`}>
          {active ? 'Active' : 'Standby'}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="flex-1">
        {children}
      </div>
    </motion.div>
  );

  return (
    <div className="flex-1 flex flex-col p-8 max-w-[1000px] mx-auto w-full">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={onBack}
          className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-colors"
        >
          <ChevronRight size={24} className="rotate-180" />
        </button>
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3 tracking-tighter">
            <Heart className="text-pink-500 fill-pink-500/20" size={32} />
            케어모드 설정
          </h1>
          <p className="text-sm text-white/40 font-medium mt-1">동승한 가족과 반려동물을 위한 최적의 환경을 조성합니다.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 flex-1">
        {/* 1. Playlist Card */}
        <div className="relative overflow-hidden rounded-[32px] p-6 bg-white/5 border border-white/5 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400">
              <Music size={24} />
            </div>
            {isPlaying && (
              <div className="flex gap-1 items-end h-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 16, 8, 14, 4] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.2 }}
                    className="w-1 bg-blue-400 rounded-full"
                  />
                ))}
              </div>
            )}
          </div>
          <h3 className="text-xl font-bold text-white mb-4">재생목록 선택</h3>
          <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => toggleTrack(track.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                  currentTrack === track.id 
                    ? 'bg-blue-500/20 border border-blue-500/30 text-white' 
                    : 'hover:bg-white/5 text-white/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                    currentTrack === track.id ? 'border-blue-400/50 text-blue-400' : 'border-white/10 text-white/20'
                  }`}>
                    {track.type}
                  </span>
                  <span className="text-sm font-medium">{track.title}</span>
                </div>
                {currentTrack === track.id && isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
            ))}
          </div>
        </div>

        {/* 2. DND Mode */}
        <CardWrapper 
          title="방해금지 모드" 
          icon={BellOff} 
          active={isDND} 
          onClick={() => setIsDND(!isDND)}
          colorClass="bg-purple-500/20 text-purple-400"
        >
          <p className="text-sm text-white/40 leading-relaxed">
            알림 소리를 최소화하고 내부 조명을 차분하게 조절하여 방해받지 않는 환경을 만듭니다.
          </p>
          <div className="mt-6 flex justify-end">
            <div className={`w-14 h-7 rounded-full relative transition-colors duration-500 ${isDND ? 'bg-purple-500' : 'bg-white/10'}`}>
              <motion.div 
                animate={{ x: isDND ? 28 : 4 }}
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-lg"
              />
            </div>
          </div>
        </CardWrapper>

        {/* 3. Comfort Driving */}
        <CardWrapper 
          title={isComfort ? "컴포트 모드 ON" : "스탠다드 모드"} 
          icon={Zap} 
          active={isComfort} 
          onClick={() => setIsComfort(!isComfort)}
          colorClass="bg-orange-500/20 text-orange-400"
        >
          <p className="text-sm text-white/40 leading-relaxed">
            가속과 제동을 부드럽게 조절하여 동승자의 멀미를 방지하고 승차감을 극대화합니다.
          </p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-[10px] font-bold text-white/20 uppercase">Driving Profile</span>
            <div className="flex items-center gap-2">
               <span className={`text-xs font-bold transition-colors ${!isComfort ? 'text-white' : 'text-white/20'}`}>Standard</span>
               <div className="w-8 h-px bg-white/10" />
               <span className={`text-xs font-bold transition-colors ${isComfort ? 'text-orange-400' : 'text-white/20'}`}>Comfort</span>
            </div>
          </div>
        </CardWrapper>

        {/* 4. Nap Mode (Brightness) */}
        <CardWrapper 
          title={isNapMode ? "낮잠 모드 ON" : "조도 스탠다드"} 
          icon={Moon} 
          active={isNapMode} 
          onClick={() => setIsNapMode(!isNapMode)}
          colorClass="bg-indigo-500/20 text-indigo-400"
        >
          <p className="text-sm text-white/40 leading-relaxed">
            실내 조도를 낮추고 창문 가림막을 조절하여 깊은 수면을 취할 수 있는 조도를 구성합니다.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${
                  isNapMode 
                    ? (i < 1 ? 'bg-indigo-400' : 'bg-white/5') 
                    : (i < 4 ? 'bg-white/40' : 'bg-white/5')
                }`} 
              />
            ))}
          </div>
        </CardWrapper>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};
