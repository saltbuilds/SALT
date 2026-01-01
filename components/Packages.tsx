
import React, { useState } from 'react';
import { COLORS } from '../constants';
import { PackageType } from '../types';
import SaltCharacter from './SaltCharacter';

const pricingPlans: (PackageType & { char: any })[] = [
  {
    name: "Monthly",
    price: "Variable",
    billingInfo: "Flexible Billing",
    duration: "30-day notice",
    icon: "ICON: Calendar",
    char: "musician",
    features: [
      { label: "Standard Support", included: true },
      { label: "Essential Security", included: true },
      { label: "Basic Analytics", included: true },
    ]
  },
  {
    name: "6-Month",
    price: "Variable",
    billingInfo: "Priority Billing",
    savings: "Loyalty Discount",
    duration: "6 months contract",
    icon: "ICON: Shield",
    char: "gardener",
    features: [
      { label: "Priority Support", included: true },
      { label: "Seasonal Designs", included: true },
      { label: "Advanced Security", included: true },
    ]
  },
  {
    name: "Annual",
    price: "Variable",
    billingInfo: "Best Value",
    savings: "Max Discount",
    duration: "12 months contract",
    icon: "ICON: Trophy",
    isPopular: true,
    char: "hero",
    features: [
      { label: "24/7 Priority+", included: true },
      { label: "Quarterly Strategy", included: true },
      { label: "Trend Updates", included: true },
    ]
  }
];

const addOns = [
  { id: 'seo', name: "SEO Audit & Strategy", tier: "Growth" },
  { id: 'perf', name: "Performance Optimization", tier: "Core" },
  { id: 'ecommerce', name: "E-Commerce Suite", tier: "Premium" },
  { id: 'copy', name: "Professional Copywriting", tier: "Content" },
  { id: 'api', name: "Custom API Integration", tier: "Technical" },
  { id: 'maintenance', name: "24/7 Managed Support", tier: "Safety" },
];

const Packages: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("Annual");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const handleSendInquiry = () => {
    const plan = pricingPlans.find(p => p.name === selectedPlan);
    const addonsList = addOns
      .filter(a => selectedAddons.includes(a.id))
      .map(a => `- ${a.name}`)
      .join('%0D%0A');

    const subject = `SALT Inquiry: ${selectedPlan} Package Configuration`;
    const body = `Hi SALT Team,%0D%0A%0D%0AI would like to request a custom quote for my digital foundation.%0D%0A%0D%0ASelected Base Plan: ${selectedPlan}%0D%0ASelected Add-ons:%0D%0A${addonsList || '- No additional add-ons selected'}%0D%0A%0D%0APlease get back to me with the next steps.%0D%0A%0D%0AThanks!`;

    window.location.href = `mailto:saltbuilds@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <div 
            className="inline-block px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 border border-white/40 bg-white/20 backdrop-blur-md shadow-sm"
            style={{ color: COLORS.NAVY }}
          >
            🛠️ Build Your Foundation
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter" style={{ color: COLORS.NAVY }}>
            Choose Your Tier
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-70 font-medium" style={{ color: COLORS.NAVY }}>
            A modular approach to high-end development. Select your contract duration and add the modules your brand needs.
          </p>
        </div>

        {/* Plan Selection */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((pkg) => {
            const isSelected = selectedPlan === pkg.name;
            return (
              <div 
                key={pkg.name}
                onClick={() => setSelectedPlan(pkg.name)}
                className={`group relative cursor-pointer rounded-[3rem] p-10 transition-all duration-500 border border-white/40 flex flex-col ${
                  isSelected 
                    ? 'bg-white/70 backdrop-blur-2xl shadow-2xl -translate-y-2' 
                    : 'bg-white/30 backdrop-blur-md hover:bg-white/50'
                }`}
              >
                {pkg.isPopular && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-white text-[9px] font-black tracking-[0.2em] uppercase shadow-xl z-20"
                    style={{ backgroundColor: COLORS.NAVY }}
                  >
                    Recommended
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-black tracking-tight" style={{ color: COLORS.NAVY }}>{pkg.name}</h3>
                    <p className="text-[10px] font-black opacity-40 uppercase tracking-[0.2em] mt-1">{pkg.duration}</p>
                  </div>
                  <div className="relative">
                    <SaltCharacter type={pkg.char} size={60} className={`transition-all duration-500 ${isSelected ? 'scale-110' : 'opacity-40 grayscale'}`} />
                  </div>
                </div>

                <div className="space-y-4 mt-auto pt-8 border-t border-navy/5">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-navy/60">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.AQUA }} />
                      {f.label}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-ons Checklist */}
        <div className="bg-white/20 backdrop-blur-2xl rounded-[4rem] p-10 md:p-16 mb-20 border border-white/40 shadow-xl">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-4xl font-black tracking-tight mb-3" style={{ color: COLORS.NAVY }}>Power-Up Add-ons</h3>
              <p className="text-navy/60 font-bold text-lg">Scale your foundation with specialized modules.</p>
            </div>
            <div className="text-navy/30 font-black text-xs uppercase tracking-widest hidden md:block">
              Multi-select available
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {addOns.map((addon) => {
              const isActive = selectedAddons.includes(addon.id);
              return (
                <div 
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-8 rounded-[2rem] cursor-pointer transition-all duration-300 border border-white/40 flex items-center gap-5 ${
                    isActive 
                      ? 'bg-white/80 shadow-xl scale-[1.03] border-aqua/30' 
                      : 'bg-white/30 backdrop-blur-sm hover:bg-white/50 opacity-80'
                  }`}
                >
                  <div 
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all border-2 ${
                      isActive ? 'border-transparent bg-aqua scale-110' : 'border-navy/10'
                    }`}
                    style={{ backgroundColor: isActive ? COLORS.AQUA : 'transparent' }}
                  >
                    {isActive && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: COLORS.AQUA }}>{addon.tier}</div>
                    <div className="font-black text-navy tracking-tight">{addon.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <button 
              onClick={handleSendInquiry}
              className="group px-16 py-6 rounded-[2rem] text-white font-black text-lg uppercase tracking-widest transition-all hover:shadow-[0_20px_50px_rgba(26,43,68,0.3)] hover:-translate-y-2 active:scale-95 flex items-center gap-5 shadow-2xl overflow-hidden relative"
              style={{ backgroundColor: COLORS.NAVY }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10">Generate Inquiry</span>
              <svg className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <div className="bg-white/30 backdrop-blur-md px-6 py-2 rounded-full border border-white/40">
            <p className="text-navy/50 text-xs font-black uppercase tracking-widest">A custom quote will be sent to your email.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
