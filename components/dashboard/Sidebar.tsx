import { Monitor, Activity, MessageSquare, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="hidden lg:flex w-20 bg-[#080808] border-r border-[#1a1a1a] flex-col items-center py-6 gap-8 shrink-0">
      <div className="w-10 h-10 bg-[#00f2ff22] rounded flex items-center justify-center border border-[#00f2ff44]">
        <div className="w-4 h-4 bg-[#00f2ff] rounded-full shadow-[0_0_10px_#00f2ff]"></div>
      </div>
      <div className="flex flex-col gap-6 opacity-60">
        <div className="p-2 hover:bg-[#1a1a1a] rounded cursor-pointer text-[#00f2ff] transition-colors">
          <Monitor className="w-6 h-6" />
        </div>
        <div className="p-2 hover:bg-[#1a1a1a] rounded cursor-pointer transition-colors">
          <Activity className="w-6 h-6" />
        </div>
        <div className="p-2 hover:bg-[#1a1a1a] rounded cursor-pointer transition-colors">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div className="p-2 hover:bg-[#1a1a1a] rounded cursor-pointer text-orange-500 transition-colors">
          <Settings className="w-6 h-6" />
        </div>
      </div>
      <div 
        className="mt-auto mb-2 opacity-40 text-[10px] uppercase tracking-widest rotate-180" 
        style={{ writingMode: 'vertical-rl' }}
      >
        KALI_INTEL_V1
      </div>
    </div>
  );
}
