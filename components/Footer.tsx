
import React from 'react';
import { SaltLogo, COLORS } from '../constants';

const Footer: React.FC = () => {
  const socials = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/buildwithsalt/',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      url: 'https://web.facebook.com/profile.php?id=61585690749471',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@saltbuilds',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.46-.24-.17-.47-.35-.68-.54v7.57c.22 4.76-4.68 8.41-9.33 7.14-3.48-.95-5.58-4.63-4.48-8 1-3.1 4.58-4.73 7.35-3.23.11.06.21.12.31.19v4.1c-.22-.1-.44-.17-.67-.22-2.02-.51-4.22.9-4.42 2.97-.24 2.27 2.15 4.1 4.29 3.39 1.4-.46 1.95-1.9 1.95-3.24V.02z"></path>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/saltbuilds/about/?viewAsMember=true',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    }
  ];

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
              {socials.map(social => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
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
              <li>saltbuilds@gmail.com</li>
              <li className="pt-2 text-slate-500 text-xs italic">Building digital foundations worldwide.</li>
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
