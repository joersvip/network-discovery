'use client';
import { useState } from 'react';

export default function DiscoveryPanel() {
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => setScanning(false), 2000);
  };

  return (
    <div className="col-span-1 lg:col-span-8 row-span-1 lg:row-span-4 bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg overflow-hidden flex flex-col shadow-2xl min-h-[300px]">
      <div className="p-3 bg-[#111] border-b border-[#1a1a1a] flex justify-between items-center">
        <span className="text-[11px] font-bold tracking-widest text-[#00f2ff]">NETWORK_DISCOVERY [192.168.1.0/24]</span>
        <button
          onClick={handleScan}
          className="px-3 py-1 bg-[#00f2ff11] border border-[#00f2ff44] text-[#00f2ff] text-[10px] hover:bg-[#00f2ff22] transition-colors cursor-pointer"
        >
          {scanning ? 'SCANNING...' : 'RUN ARP SCAN'}
        </button>
      </div>
      <div className="flex-1 overflow-x-auto p-2">
        <table className="w-full text-left text-[11px] font-mono min-w-[500px]">
          <thead className="text-[#555] uppercase border-b border-[#1a1a1a]">
            <tr>
              <th className="p-2">IP_ADDR</th>
              <th className="p-2">MAC_ADDR</th>
              <th className="p-2">VENDOR/OS</th>
              <th className="p-2">LATENCY</th>
              <th className="p-2">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#151515]">
            <tr className="bg-[#11111144] hover:bg-[#1a1a1a] transition-colors">
              <td className="p-2 text-[#00f2ff]">192.168.1.1</td>
              <td className="p-2 text-[#888]">00:1B:44:11:3A:B7</td>
              <td className="p-2">Cisco Systems (Linux 4.x)</td>
              <td className="p-2 text-green-400">1.2ms</td>
              <td className="p-2"><span className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 border border-green-700/50">GATEWAY</span></td>
            </tr>
            <tr className="hover:bg-[#1a1a1a] transition-colors">
              <td className="p-2 text-[#00f2ff]">192.168.1.42</td>
              <td className="p-2 text-[#888]">BC:E2:65:F1:11:09</td>
              <td className="p-2">Apple Inc (macOS Sonoma)</td>
              <td className="p-2 text-green-400">14ms</td>
              <td className="p-2"><span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-400 border border-blue-700/50">WORKSTATION</span></td>
            </tr>
            <tr className="hover:bg-[#1a1a1a] transition-colors">
              <td className="p-2 text-[#00f2ff]">192.168.1.105</td>
              <td className="p-2 text-[#888]">48:D7:05:88:E2:C1</td>
              <td className="p-2">Synology Inc (DiskStation)</td>
              <td className="p-2 text-yellow-400">4ms</td>
              <td className="p-2"><span className="px-2 py-0.5 rounded bg-orange-900/30 text-orange-400 border border-orange-700/50">NAS</span></td>
            </tr>
            <tr className="hover:bg-[#1a1a1a] opacity-50 transition-colors">
              <td className="p-2 text-[#00f2ff]">192.168.1.112</td>
              <td className="p-2 text-[#888]">00:E0:4C:68:01:A2</td>
              <td className="p-2">Realtek (Embedded Device)</td>
              <td className="p-2 text-red-400">---</td>
              <td className="p-2"><span className="px-2 py-0.5 rounded bg-red-900/30 text-red-400 border border-red-700/50">OFFLINE</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
