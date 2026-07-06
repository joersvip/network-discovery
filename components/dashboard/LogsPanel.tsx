export default function LogsPanel() {
  return (
    <div className="col-span-1 lg:col-span-8 row-span-1 lg:row-span-2 bg-[#080808] border border-[#1a1a1a] rounded-lg flex flex-col p-3 font-mono min-h-[200px]">
      <div className="text-[9px] text-[#444] mb-2 uppercase tracking-widest border-b border-[#111] pb-1">System_Events / Audit_Log</div>
      <div className="space-y-1 text-[10px] overflow-y-auto flex-1 pr-2 custom-scrollbar">
        <div className="flex gap-4"><span className="text-[#555] whitespace-nowrap">[14:00:21]</span><span className="text-blue-500 w-16">[AUTH]</span><span className="text-gray-300">User 'Operator_Alpha' authenticated successfully from 192.168.1.15</span></div>
        <div className="flex gap-4"><span className="text-[#555] whitespace-nowrap">[14:01:45]</span><span className="text-orange-500 w-16">[TRAFFIC]</span><span className="text-gray-300">Alert: Bandwidth threshold exceeded on Interface eth0 (In: 850Mbps)</span></div>
        <div className="flex gap-4"><span className="text-[#555] whitespace-nowrap">[14:03:12]</span><span className="text-red-500 w-16">[SYSTEM]</span><span className="text-gray-300">Critical: Attempted login failure for 'root' from unknown IP 104.22.1.2</span></div>
        <div className="flex gap-4 text-[#00f2ff]"><span className="text-[#555] whitespace-nowrap">[14:05:00]</span><span className="w-16">[INFO]</span><span>Scheduled ARP discovery sequence initiated.</span></div>
        <div className="flex gap-4"><span className="text-[#555] whitespace-nowrap">[14:06:22]</span><span className="text-green-500 w-16">[SCAN]</span><span className="text-gray-300">Host 192.168.1.105 (Synology) came online.</span></div>
        <div className="flex gap-4"><span className="text-[#555] whitespace-nowrap">[14:08:11]</span><span className="text-blue-500 w-16">[AUTH]</span><span className="text-gray-300">Admin_Zero logged in from local console.</span></div>
      </div>
    </div>
  );
}
