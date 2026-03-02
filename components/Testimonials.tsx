import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../utils/coforgeData';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#082340]">Client Stories</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <Quote className="w-10 h-10 text-cyan-500/20 mb-6" fill="currentColor" />
                <p className="text-slate-700 text-lg italic mb-8">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0"></div>
                <div>
                  <h5 className="font-bold text-[#082340]">{t.author}</h5>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;