export default function Header() {
  return (
    <div className="h-14 bg-[#0a0a0a] border-b border-[#1a1a1a] flex items-center justify-between px-4 lg:px-6 shrink-0">
      <div className="flex items-center gap-4">
        <h1 className="text-xs font-bold tracking-[0.2em] text-[#00f2ff]">NETWORK_CORE // KALI-LINUX</h1>
        <div className="hidden lg:block h-4 w-[1px] bg-[#333]"></div>
        <div className="hidden lg:flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] text-green-500">SCANNER_ACTIVE: eth0</span>
        </div>
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        <div className="flex flex-col items-end">
          <span className="text-[9px] text-[#555] uppercase tracking-tighter">Bandwidth In/Out</span>
          <span className="text-[11px] font-mono text-orange-400">1.2 GBps / 480 MBps</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-[10px] font-bold">AD</div>
      </div>
    </div>
  );
}
