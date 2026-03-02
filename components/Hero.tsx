import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082340]/90 to-[#082340]/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-8 animate-fade-in-up">
          <div className="inline-block bg-[#f15b40] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Digital Transformation
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Engage with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Emerging</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 max-w-xl">
            We transform at the intersect of deep domain knowledge and emerging technologies expertise to drive real-world business impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-[#f15b40] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold transition-all">
              View Success Stories
            </button>
          </div>
        </div>

        {/* Floating Stats / Visuals */}
        <div className="hidden lg:block relative">
             <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-2xl max-w-sm animate-float">
                <h3 className="text-cyan-400 font-bold text-lg mb-2">AI-First Approach</h3>
                <p className="text-gray-300 text-sm">Empowering enterprises with Quasar AI and Agentic solutions.</p>
             </div>
             
             <div className="absolute bottom-[-200px] left-10 bg-[#082340] p-6 rounded-2xl border border-gray-700 shadow-2xl max-w-sm animate-float-delayed">
                <h3 className="text-[#f15b40] font-bold text-4xl mb-1">28.5%</h3>
                <p className="text-gray-300 text-sm">YoY Revenue Growth</p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;