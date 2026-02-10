import React from 'react';
import { ArrowLeft, LucideIcon } from 'lucide-react';

interface PlaceholderViewProps {
  title: string;
  icon: LucideIcon;
  onBack: () => void;
  color: string;
}

export const PlaceholderView: React.FC<PlaceholderViewProps> = ({ title, icon: Icon, onBack, color }) => {
  return (
    <div className="flex-1 flex flex-col p-8 gap-8">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={24} />
          <span className="text-xl font-medium">홈으로 돌아가기</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className={`p-10 rounded-[48px] bg-neutral-900 border border-white/5 shadow-2xl flex flex-col items-center text-center max-w-2xl w-full`}>
          <div className={`p-6 rounded-3xl mb-8`} style={{ backgroundColor: `${color}20`, color }}>
            <Icon size={64} />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">{title} 활성화됨</h2>
          <p className="text-xl text-white/40 mb-12">
            선택하신 {title} 환경을 조성하고 있습니다.<br />
            차량의 시트와 조명, 미디어가 모드에 맞춰 최적화됩니다.
          </p>
          
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-white/5 p-6 rounded-[32px] border border-white/5">
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-2">Interior Light</p>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-white font-medium">시스템 최적화</span>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-[32px] border border-white/5">
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-2">Climate</p>
              <span className="text-white font-medium">쾌적 모드 (22.5°C)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
