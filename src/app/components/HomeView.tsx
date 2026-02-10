import React from 'react';
import { motion } from 'motion/react';
import { Navigation, Coffee, Briefcase, Zap, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ModeCardProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  onClick: () => void;
  isVertical?: boolean;
}

const ModeCard: React.FC<ModeCardProps> = ({ title, icon, image, description, onClick, isVertical }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`relative group overflow-hidden rounded-[40px] w-full h-full bg-neutral-900 border border-white/5 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 ${isVertical ? '' : 'aspect-video md:aspect-auto'}`}
    >
      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
        <ImageWithFallback 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>
      
      <div className={`absolute inset-0 z-10 p-6 flex flex-col justify-end items-start text-left`}>
        <div className={`mb-3 p-2.5 bg-white/10 backdrop-blur-xl rounded-2xl text-white border border-white/10 shadow-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500`}>
          {icon}
        </div>
        <h2 className={`${isVertical ? 'text-3xl' : 'text-xl'} font-bold text-white mb-1 tracking-tight group-hover:translate-x-1 transition-transform duration-500`}>
          {title}
        </h2>
        <p className={`text-white/60 ${isVertical ? 'text-base' : 'text-xs'} leading-relaxed max-w-[200px] group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-500 delay-75`}>
          {description}
        </p>
      </div>
    </motion.button>
  );
};

interface HomeViewProps {
  onSelectMode: (mode: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectMode }) => {
  const modes = [
    {
      id: 'relax',
      title: '휴식모드',
      icon: <Coffee size={28} strokeWidth={2.5} />,
      image: 'https://images.unsplash.com/photo-1766678003078-c8f7110c82d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYW1iaWVudCUyMGxpZ2h0JTIwbG91bmdlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNjk4NzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '아늑한 조명과 음악이 함께하는 휴식'
    },
    {
      id: 'work',
      title: '업무모드',
      icon: <Briefcase size={28} strokeWidth={2.5} />,
      image: 'https://images.unsplash.com/photo-1765648684555-de2d0f6af467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBsYXB0b3AlMjBkZXNrfGVufDF8fHx8MTc3MDY5ODc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '끊김 없는 생산적인 업무 환경'
    },
    {
      id: 'charge',
      title: '충전모드',
      icon: <Zap size={28} strokeWidth={2.5} />,
      image: 'https://images.unsplash.com/photo-1753131296629-962915ad6ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMHN0YXRpb24lMjBuZW9uJTIwbmlnaHR8ZW58MXx8fHwxNzcwNjk4NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '배터리 상태 확인 및 충전 가이드'
    },
    {
      id: 'care',
      title: '케어모드',
      icon: <Heart size={28} strokeWidth={2.5} />,
      image: 'https://images.unsplash.com/photo-1619719287848-883c8f26efbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2FyJTIwc2VhdCUyMGludGVyaW9yJTIwc2FmZXR5fGVufDF8fHx8MTc3MDcwODUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '영유아 및 반려동물 최적화 환경'
    }
  ];

  const driveMode = {
    id: 'drive',
    title: '이동모드',
    icon: <Navigation size={40} strokeWidth={2.5} />,
    image: 'https://images.unsplash.com/photo-1668437119216-0ecb924fba22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwcm9hZCUyMGxhbmRzY2FwZSUyMGRpZ2l0YWwlMjBtYXB8ZW58MXx8fHwxNzcwNjk4NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '목적지까지 안전하고 스마트한 자율 주행'
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-6 w-full h-full max-w-[1000px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-black text-white mb-1 tracking-tighter">
          안녕하세요, <span className="text-blue-400">오너님.</span>
        </h1>
        <p className="text-lg text-white/40 font-medium">오늘의 여정을 위해 원하는 모드를 선택해주세요.</p>
      </motion.div>

      <div className="grid grid-cols-12 gap-5 flex-1 min-h-0">
        {/* Left: Vertical Drive Mode */}
        <motion.div
          className="col-span-5"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ModeCard
            {...driveMode}
            isVertical
            onClick={() => onSelectMode(driveMode.id)}
          />
        </motion.div>

        {/* Right: 2x2 Grid for Other Modes */}
        <div className="col-span-7 grid grid-cols-2 grid-rows-2 gap-5">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ModeCard
                {...mode}
                onClick={() => onSelectMode(mode.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
