'use client';
import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

type Message = {
  sender: string;
  time: string;
  text: string;
  isOwn?: boolean;
};

export default function MessengerPanel() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'Admin_Zero', time: '14:02', text: 'Broadcasting: All stations maintain 10.0.0.x monitoring. Potential unauthorized ARP detected.' },
    { sender: 'Operator_Alpha', time: '14:05', text: 'Copy that. Checking segment B logs now.' },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const now = new Date();
    setMessages(prev => [...prev, {
      sender: 'You',
      time: `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`,
      text: input,
      isOwn: true
    }]);
    setInput('');
  };

  return (
    <div className="col-span-1 lg:col-span-4 row-span-1 lg:row-span-4 bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg flex flex-col shadow-inner min-h-[350px]">
      <div className="p-3 border-b border-[#1a1a1a] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-[11px] font-bold text-white">OPS_MESSENGER</span>
        </div>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold">3 ONLINE</span>
      </div>
      <div className="flex-1 p-3 space-y-4 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`space-y-1 ${m.isOwn ? 'text-right' : 'text-left'}`}>
            <div className={`flex justify-between text-[9px] text-[#555] ${m.isOwn ? 'flex-row-reverse' : ''}`}>
              <span>{m.sender}</span><span>{m.time}</span>
            </div>
            <div className={`p-2 text-[11px] inline-block text-left ${m.isOwn ? 'bg-[#00f2ff11] rounded-l-lg rounded-br-lg border-r-2 border-[#00f2ff] text-[#00f2ff]' : 'bg-[#1a1a1a] rounded-r-lg rounded-bl-lg text-[#e0e0e0]'}`}>
              {m.text}
            </div>
          </div>
        ))}
        <div ref={endRef} />
        <div className="flex gap-1 text-[9px] text-[#444] italic animate-pulse">Operator_Beta is typing...</div>
      </div>
      <div className="p-3 bg-[#111] border-t border-[#1a1a1a]">
        <div className="flex gap-2 items-center bg-[#050505] p-2 border border-[#222] rounded focus-within:border-[#00f2ff44] transition-colors">
          <input
            type="text"
            placeholder="Type message..."
            className="bg-transparent border-none text-[11px] flex-1 outline-none text-[#e0e0e0] font-mono"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} className="text-[#444] hover:text-[#00f2ff] transition-colors cursor-pointer">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
