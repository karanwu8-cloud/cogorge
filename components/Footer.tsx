import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051628] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Let's Engage!</h2>
            <p className="text-gray-400 mb-6 max-w-md">
                We transform at the intersect of deep domain knowledge and emerging technologies to drive real-world business impact.
            </p>
            <div className="flex gap-4">
                <SocialIcon Icon={Linkedin} />
                <SocialIcon Icon={Twitter} />
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Youtube} />
                <SocialIcon Icon={Instagram} />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#f15b40]">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">Artificial Intelligence</li>
                <li className="hover:text-white cursor-pointer">Digital Engineering</li>
                <li className="hover:text-white cursor-pointer">Data & Analytics</li>
                <li className="hover:text-white cursor-pointer">Cloud Services</li>
                <li className="hover:text-white cursor-pointer">Cybersecurity</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-[#f15b40]">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Investors</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Newsroom</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>&copy; 2025 Coforge. All rights reserved.</p>
            <div className="flex gap-6">
                <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer">Terms of Use</span>
                <span className="hover:text-white cursor-pointer">Cookie Policy</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }: { Icon: any }) => (
    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f15b40] transition-colors cursor-pointer">
        <Icon size={20} />
    </div>
);

export default Footer;