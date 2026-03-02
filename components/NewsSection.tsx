import React from 'react';
import { NEWS_ITEMS } from '../utils/coforgeData';
import { ArrowUpRight } from 'lucide-react';

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#082340] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[#f15b40] font-bold text-sm uppercase tracking-wide mb-2">In The News</h2>
            <h3 className="text-3xl md:text-4xl font-bold">What's Buzzing</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-[#f15b40] transition-colors">
            View Newsroom <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
          {NEWS_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="min-w-[300px] md:min-w-[400px] snap-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <span className="text-[#f15b40] text-sm font-semibold flex items-center gap-1">
                  Read More <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;