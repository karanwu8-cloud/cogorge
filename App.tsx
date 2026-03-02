import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import NewsSection from './components/NewsSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialChatMessage, setInitialChatMessage] = useState<string | null>(null);

  const triggerChat = (message?: string) => {
    if (message) {
      setInitialChatMessage(message);
    }
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar openChat={() => triggerChat()} />
      
      <main>
        <div id="home">
            <Hero />
        </div>
        
        <div id="news" className="py-12">
            <NewsSection />
        </div>

        <div id="services">
            <Services onLearnMore={triggerChat} />
        </div>

        <div id="testimonials">
            <Testimonials />
        </div>
      </main>

      <Footer />
      
      {/* Intelligent Chatbot Overlay */}
      <Chatbot 
        isOpen={isChatOpen} 
        setIsOpen={setIsChatOpen} 
        initialMessage={initialChatMessage}
        clearInitialMessage={() => setInitialChatMessage(null)}
      />
    </div>
  );
};

export default App;