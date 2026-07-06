'use client';
import { useEffect, useState } from 'react';

export default function TrafficPanel() {
  const [bars, setBars] = useState<number[]>(Array(20).fill(50));

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => {
        const next = [...prev.slice(1)];
        next.push(Math.floor(Math.random() * 80) + 20);
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-1 lg:col-span-4 row-span-1 lg:row-span-2 bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg p-4 flex flex-col gap-2 min-h-[150px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold text-orange-500 uppercase">REALTIME_TRAFFIC</span>
        <span className="text-[10px] text-[#555]">PACKETS/SEC</span>
      </div>
      <div className="flex-1 flex items-end gap-[2px] h-24 overflow-hidden">
        {bars.map((height, i) => (
          <div
            key={i}
            className="flex-1 bg-orange-500/20 border-t border-orange-500/40 transition-all duration-300"
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
      <div className="flex justify-between text-[9px] text-[#555] font-mono mt-1">
        <span>60S AGO</span>
        <span>NOW</span>
      </div>
    </div>
  );
}
