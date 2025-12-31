
import React from 'react';
import { SaltLogo, COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 text-white" style={{ backgroundColor: COLORS.NAVY }} id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white rounded-xl">
                <SaltLogo className="w-8 h-8" />
              </div>
              <span className="text-3xl font-black tracking-tighter">SALT.</span>
            </div>
            <p className="text-xl text-slate-300 leading-relaxed max-w-md">
              Crafting modern digital experiences with precision and clarity. We are your partner in building foundations that last.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <div 
                  key={social}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-bold text-slate-400 cursor-pointer hover:bg-white/10 transition-colors uppercase text-center leading-none px-2"
                >
                  ICON: {social}
                </div>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h5 className="text-lg font-bold mb-8 uppercase tracking-widest text-slate-400">Services</h5>
            <ul className="space-y-4 font-medium text-slate-300">
              <li className="hover:text-white cursor-pointer transition-colors">Web Development</li>
              <li className="hover:text-white cursor-pointer transition-colors">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer transition-colors">E-Commerce</li>
              <li className="hover:text-white cursor-pointer transition-colors">SEO Strategy</li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h5 className="text-lg font-bold mb-8 uppercase tracking-widest text-slate-400">Contact</h5>
            <ul className="space-y-4 font-medium text-slate-300">
              <li>hello@salt-agency.com</li>
              <li>+1 (555) 0123-4567</li>
              <li>123 Digital Ave, Suite 400<br/>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
          <div>© {new Date().getFullYear()} SALT Web Development Agency. All rights reserved.</div>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
