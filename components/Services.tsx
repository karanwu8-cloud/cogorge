import React from 'react';
import { BrainCircuit, Code2, Database, Cloud, Bot, Briefcase } from 'lucide-react';
import { SERVICES } from '../utils/coforgeData';

const iconMap: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-8 h-8" />,
  Code2: <Code2 className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Cloud: <Cloud className="w-8 h-8" />,
  Bot: <Bot className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
};

interface ServicesProps {
  onLearnMore: (message: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onLearnMore }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#f15b40] font-semibold uppercase tracking-wider text-sm mb-2">Capabilities</h2>
          <h3 className="text-4xl font-bold text-[#082340] mb-4">Transforming Business with Tech</h3>
          <p className="text-gray-600">
            Our comprehensive suite of services combines domain expertise with cutting-edge technology to deliver superior outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              onClick={() => onLearnMore(`Tell me more about Coforge's ${service.title} services.`)}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-cyan-100 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#082340] group-hover:bg-[#082340] group-hover:text-white transition-colors mb-6">
                {iconMap[service.icon]}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#f15b40] transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-[#082340] group-hover:translate-x-2 transition-transform">
                Ask AI about this <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;