
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { COLORS, BRAND_CONFIG } from '../constants';
import { Message } from '../types';
import SaltCharacter from './SaltCharacter';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hi! I am the ${BRAND_CONFIG.name} Assistant. How can I help you build your digital foundation today?` }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    const initChat = async () => {
      if (chatRef.current) return;
      const apiKey = process.env.API_KEY;
      if (apiKey) {
        try {
          const ai = new GoogleGenAI({ apiKey });
          chatRef.current = ai.chats.create({
            model: 'gemini-3-flash-preview',
            config: {
              systemInstruction: `You are the AI assistant for ${BRAND_CONFIG.fullName}. Your tone is professional and premium. SALT builds digital foundations.`
            }
          });
        } catch (e) {
          console.error("AI Assistant initialization failed:", e);
        }
      }
    };
    initChat();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);
    if (!chatRef.current) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'model', text: "Offline mode. Please contact hello@salt-agency.com" }]);
        setIsTyping(false);
      }, 1000);
      return;
    }
    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection error." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] font-sans hidden md:block">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 rounded-[2rem] shadow-[0_20px_50px_rgba(26,43,68,0.2)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-white/40 group relative overflow-hidden"
        style={{ backgroundColor: COLORS.NAVY }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="flex items-center justify-center">
            <SaltCharacter type="thinking" size={60} />
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[380px] md:w-[420px] h-[600px] bg-white/70 backdrop-blur-3xl rounded-[3rem] shadow-[0_30px_100px_rgba(26,43,68,0.2)] border border-white/60 flex flex-col overflow-hidden animate-in zoom-in-95 fade-in slide-in-from-bottom-10 duration-500">
          <div className="p-8 text-white flex justify-between items-center relative overflow-hidden" style={{ backgroundColor: COLORS.NAVY }}>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                <SaltCharacter type="thinking" size={40} />
              </div>
              <div>
                <div className="font-black text-sm tracking-widest uppercase">{BRAND_CONFIG.name} AI</div>
                <div className="text-[9px] uppercase tracking-[0.2em] opacity-50 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Foundation Expert
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-40 hover:opacity-100 transition-opacity relative z-10">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 custom-scroll">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl text-sm font-medium leading-relaxed shadow-sm transition-all ${
                  m.role === 'user' 
                    ? 'bg-navy text-white rounded-tr-none' 
                    : 'bg-white/60 backdrop-blur-sm border border-white/40 text-navy rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-white/40 bg-white/20">
            <div className="flex gap-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] p-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our process..."
                className="flex-1 bg-transparent border-none px-6 py-4 text-sm font-bold placeholder:text-navy/30 focus:ring-0 outline-none"
              />
              <button onClick={handleSend} disabled={!input.trim() || isTyping} className="w-14 h-14 flex items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: COLORS.NAVY }}>
                <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;
