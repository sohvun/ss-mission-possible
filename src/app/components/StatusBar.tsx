import React from 'react';
import { Signal, Wifi, Battery, Cloud, MapPin } from 'lucide-react';

export const StatusBar: React.FC = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-between px-6 py-2 bg-black/40 backdrop-blur-md border-b border-white/10 text-white/90">
      <div className="flex items-center gap-4">
        <span className="text-lg font-medium tracking-tight">
          {time.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false })}
        </span>
        <div className="flex items-center gap-2 text-xs text-white/60">
          <Cloud size={14} />
          <span>서울 18°C</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <MapPin size={14} className="text-blue-400" />
        <span className="text-xs font-medium">서울대학교 관악캠퍼스</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Signal size={16} />
          <span className="text-[10px] font-bold uppercase tracking-wider">5G</span>
        </div>
        <Wifi size={16} />
        <div className="flex items-center gap-1.5">
          <div className="flex flex-col items-end -space-y-0.5">
            <span className="text-xs font-bold">82%</span>
            <span className="text-[8px] text-green-400 font-medium leading-none">충전 중</span>
          </div>
          <Battery size={20} className="text-green-400" />
        </div>
      </div>
    </div>
  );
};
