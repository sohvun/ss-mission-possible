import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Navigation, Map as MapIcon, Compass, Search } from 'lucide-react';

export const DriveView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="flex-1 flex flex-col p-8 gap-8">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
          <ArrowLeft size={24} />
          <span className="text-xl font-medium">홈으로 돌아가기</span>
        </button>
        <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
          <div className="bg-blue-500/20 text-blue-400 p-2 rounded-xl">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder="목적지 검색..." 
            className="bg-transparent border-none outline-none text-white w-64 placeholder:text-white/20"
          />
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 gap-8">
        <div className="col-span-8 relative bg-neutral-900 rounded-[40px] overflow-hidden border border-white/5">
          {/* Mock Map Background */}
          <div className="absolute inset-0 bg-[#0f1115] flex items-center justify-center opacity-40">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
          </div>
          
          <div className="absolute inset-0 p-12 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-black/60 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 w-80">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 p-3 rounded-2xl">
                    <Navigation size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">300m 앞 우회전</h3>
                    <p className="text-white/40">테헤란로 삼성역 방면</p>
                  </div>
                </div>
                <div className="h-px bg-white/10 my-4" />
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Estimated Time</p>
                    <p className="text-2xl font-bold text-white tracking-tight">14분 <span className="text-sm font-medium text-blue-400 ml-1">5.2km</span></p>
                  </div>
                  <p className="text-white/60 font-medium">16:42 도착</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <button className="bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-white"><MapIcon size={24} /></button>
                <button className="bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10 text-white"><Compass size={24} /></button>
              </div>
            </div>

            <div className="flex justify-center">
               <div className="bg-black/80 backdrop-blur-2xl px-12 py-8 rounded-[40px] border border-white/10 flex items-baseline gap-2">
                 <span className="text-9xl font-black text-white tracking-tighter">72</span>
                 <span className="text-2xl font-bold text-white/40 tracking-widest uppercase">km/h</span>
               </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-6">
          <div className="flex-1 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 p-8">
            <h3 className="text-white font-bold text-xl mb-6">주변 인프라</h3>
            <div className="flex flex-col gap-4">
              {[
                { label: '카페 노티드 삼성', dist: '1.2km', time: '4분' },
                { label: '현대백화점 무역센터점', dist: '1.8km', time: '6분' },
                { label: '코엑스 별마당 도서관', dist: '2.1km', time: '8분' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div>
                    <p className="text-white font-medium">{item.label}</p>
                    <p className="text-white/40 text-sm">{item.dist}</p>
                  </div>
                  <span className="text-blue-400 font-bold">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-48 bg-blue-600 rounded-[40px] p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <h3 className="text-white/80 font-bold">전력 효율</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-white">18.4</span>
              <span className="text-sm font-bold text-white/60">kWh/100km</span>
            </div>
            <p className="text-white/60 text-sm">에코 드라이빙 활성화 중</p>
          </div>
        </div>
      </div>
    </div>
  );
};
