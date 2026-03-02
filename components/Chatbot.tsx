import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, User, Bot as BotIcon, RefreshCw } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { COFORGE_CONTEXT } from '../utils/coforgeData';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  initialMessage?: string | null;
  clearInitialMessage?: () => void;
}

const SUGGESTIONS = [
  "What is Quasar AI?",
  "Industries you serve?",
  "Latest news from Coforge?",
  "How to contact sales?"
];

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, setIsOpen, initialMessage, clearInitialMessage }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm the Coforge AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini Chat Session
  useEffect(() => {
    if (isOpen && !chatSession) {
      try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) return;

        const ai = new GoogleGenAI({ apiKey });
        const chat = ai.chats.create({
          model: 'gemini-3-pro-preview',
          config: {
            systemInstruction: COFORGE_CONTEXT,
            temperature: 0.7,
          },
        });
        setChatSession(chat);
      } catch (error) {
        console.error("Failed to init chat", error);
      }
    }
  }, [isOpen, chatSession]);

  // Handle programmatic initial message
  useEffect(() => {
    if (isOpen && initialMessage && chatSession && !isLoading) {
      handleSend(initialMessage);
      if (clearInitialMessage) clearInitialMessage();
    }
  }, [isOpen, initialMessage, chatSession, isLoading]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (customMessage?: string) => {
    const textToSend = customMessage || input.trim();
    if (!textToSend || !chatSession) return;

    if (!customMessage) setInput('');
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    // Prepare a placeholder for the streaming response
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
      const stream = await chatSession.sendMessageStream({ message: textToSend });
      let fullText = '';
      
      for await (const chunk of stream) {
        const chunkText = (chunk as GenerateContentResponse).text || "";
        fullText += chunkText;
        
        // Update the last message (the placeholder) with the accumulated text
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', text: fullText };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { role: 'model', text: "I'm having trouble connecting right now. Please try again later." };
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* FAB (Floating Action Button) */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 animate-pulse-soft
          ${isOpen ? 'translate-y-24 opacity-0' : 'bg-[#f15b40] text-white'}`}
      >
        <MessageCircle size={28} />
        <span className="font-semibold hidden md:inline">Ask Coforge AI</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-[95vw] md:w-[420px] h-[650px] max-h-[85vh] bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] z-50 flex flex-col overflow-hidden transition-all duration-500 ease-out border border-gray-100
        ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-[20%] opacity-0 scale-90 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-[#082340] p-5 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                <Sparkles size={20} className="text-cyan-400" />
            </div>
            <div>
                <h3 className="font-bold text-lg">Coforge Assistant</h3>
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <p className="text-[10px] text-cyan-300 uppercase tracking-widest font-bold">Online & Intelligent</p>
                </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50 space-y-6 scroll-smooth">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
               {msg.role === 'model' && (
                  <div className="w-9 h-9 rounded-lg bg-[#082340] flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                     <BotIcon size={18} className="text-white" />
                  </div>
               )}
               <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-[#f15b40] text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-200/50 rounded-tl-none'
                  }`}
                >
                  {msg.text || (isLoading && idx === messages.length - 1 ? <RefreshCw className="w-4 h-4 animate-spin opacity-50" /> : '')}
               </div>
               {msg.role === 'user' && (
                  <div className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                     <User size={18} className="text-gray-500" />
                  </div>
               )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        {messages.length < 3 && !isLoading && (
            <div className="px-5 py-2 bg-slate-50 flex gap-2 overflow-x-auto no-scrollbar">
                {SUGGESTIONS.map((s, i) => (
                    <button 
                        key={i}
                        onClick={() => handleSend(s)}
                        className="whitespace-nowrap bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs text-slate-600 hover:border-[#f15b40] hover:text-[#f15b40] transition-all shadow-sm"
                    >
                        {s}
                    </button>
                ))}
            </div>
        )}

        {/* Input Area */}
        <div className="p-5 bg-white border-t border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask me anything about Coforge..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#f15b40]/20 focus:border-[#f15b40] transition-all shadow-inner"
            />
            <button 
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="bg-[#082340] text-white p-4 rounded-2xl hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg active:scale-95 flex items-center justify-center"
            >
              <Send size={20} />
            </button>
          </div>
          <div className="text-center mt-3">
            <p className="text-[10px] text-gray-400 font-medium tracking-tight">Coforge Intelligent Support • Always learning</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;