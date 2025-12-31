
import React, { useState } from 'react';
import { COLORS } from '../constants';
import { PackageType } from '../types';

const pricingPlans: PackageType[] = [
  {
    name: "Monthly",
    price: "Variable",
    billingInfo: "Flexible Billing",
    duration: "30-day notice",
    icon: "ICON: Calendar",
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
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-6">
          <div 
            className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4 border shadow-sm"
            style={{ backgroundColor: 'white', color: COLORS.NAVY, borderColor: COLORS.AQUA }}
          >
            🛠️ Build Your Foundation
          </div>
          <h2 className="text-4xl md:text-6xl font-black" style={{ color: COLORS.NAVY }}>
            Select Your Components
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-70 font-medium" style={{ color: COLORS.NAVY }}>
            Choose a base plan and select your desired upgrades. 
            We'll prepare a custom quote tailored to your specific needs.
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
                className={`relative cursor-pointer bg-white rounded-[2.5rem] p-8 transition-all border-2 flex flex-col ${
                  isSelected ? 'shadow-2xl -translate-y-2' : 'hover:border-slate-200'
                }`}
                style={{ borderColor: isSelected ? COLORS.AQUA : '#EEF2F6' }}
              >
                {pkg.isPopular && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[10px] font-black tracking-widest uppercase shadow-lg"
                    style={{ backgroundColor: COLORS.NAVY }}
                  >
                    Recommended
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black" style={{ color: COLORS.NAVY }}>{pkg.name}</h3>
                    <p className="text-xs font-bold opacity-50 uppercase tracking-widest">{pkg.duration}</p>
                  </div>
                  <div 
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected ? 'border-transparent' : 'border-slate-200'
                    }`}
                    style={{ backgroundColor: isSelected ? COLORS.AQUA : 'transparent' }}
                  >
                    {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </div>

                <div className="space-y-3 mt-auto pt-6 border-t border-slate-50">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.AQUA }} />
                      {f.label}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-ons Checklist */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 mb-16 border border-slate-100">
          <div className="mb-10">
            <h3 className="text-2xl font-black mb-2" style={{ color: COLORS.NAVY }}>Select Add-ons</h3>
            <p className="text-slate-500 font-medium">Fine-tune your digital foundation with specific expert services.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon) => {
              const isActive = selectedAddons.includes(addon.id);
              return (
                <div 
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all border-2 flex items-center gap-4 bg-white ${
                    isActive ? 'shadow-md scale-[1.02]' : 'hover:border-slate-200 opacity-70'
                  }`}
                  style={{ borderColor: isActive ? COLORS.AQUA : 'transparent' }}
                >
                  <div 
                    className={`w-5 h-5 rounded flex items-center justify-center transition-colors border-2 ${
                      isActive ? 'border-transparent' : 'border-slate-200'
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
                    <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: COLORS.AQUA }}>{addon.tier}</div>
                    <div className="font-bold text-slate-800">{addon.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em] mb-4">Ready to build?</p>
            <button 
              onClick={handleSendInquiry}
              className="px-12 py-5 rounded-2xl text-white font-black text-lg uppercase tracking-widest transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95 flex items-center gap-4"
              style={{ backgroundColor: COLORS.NAVY }}
            >
              Generate Inquiry Email
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          <p className="text-slate-400 text-sm font-medium">Clicking will open your email client addressed to saltbuilds@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Packages;
