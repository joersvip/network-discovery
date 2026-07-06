import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import DiscoveryPanel from '@/components/dashboard/DiscoveryPanel';
import TrafficPanel from '@/components/dashboard/TrafficPanel';
import MessengerPanel from '@/components/dashboard/MessengerPanel';
import LogsPanel from '@/components/dashboard/LogsPanel';

export default function Page() {
  return (
    <div className="w-screen h-screen flex overflow-hidden selection:bg-[#00f2ff33]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 grid-rows-none lg:grid-rows-6 gap-4 overflow-y-auto lg:overflow-hidden bg-[#050505]">
          <DiscoveryPanel />
          <TrafficPanel />
          <MessengerPanel />
          <LogsPanel />
        </div>
      </div>
    </div>
  );
}
