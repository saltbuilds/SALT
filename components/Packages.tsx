
import React from 'react';
import { COLORS } from '../constants';
import { PackageType } from '../types';

const pricingPlans: PackageType[] = [
  {
    name: "Monthly",
    price: "Rs. 8,000",
    billingInfo: "Billed Monthly",
    duration: "30-day notice",
    icon: "ICON: Calendar",
    features: [
      { label: "Setup Fee", included: "Rs. 0" },
      { label: "First Month", included: "FREE" },
      { label: "Seasonal Designs", included: false },
      { label: "Trend Updates", included: false },
      { label: "Support Priority", included: "Standard" },
      { label: "Strategy Calls", included: false },
    ]
  },
  {
    name: "6-Month",
    price: "Rs. 7,000",
    billingInfo: "Rs. 42,000 upfront",
    savings: "Save Rs. 6,000",
    duration: "6 months contract",
    icon: "ICON: Shield",
    features: [
      { label: "Setup Fee", included: "Rs. 0" },
      { label: "First Month", included: "FREE" },
      { label: "Seasonal Designs", included: "Yes" },
      { label: "Trend Updates", included: false },
      { label: "Support Priority", included: "Priority" },
      { label: "Strategy Calls", included: false },
    ]
  },
  {
    name: "Annual",
    price: "Rs. 6,000",
    billingInfo: "Rs. 72,000 upfront",
    savings: "Save Rs. 24,000",
    duration: "12 months contract",
    icon: "ICON: Trophy",
    isPopular: true,
    features: [
      { label: "Setup Fee", included: "Rs. 0" },
      { label: "First Month", included: "FREE" },
      { label: "Seasonal Designs", included: "Yes" },
      { label: "Trend Updates", included: "Every 6 months" },
      { label: "Support Priority", included: "Priority+" },
      { label: "Strategy Calls", included: "Quarterly" },
    ]
  }
];

const addOns = [
  { tier: "Tier 1", name: "Essential Upgrades", items: ["Basic SEO Audit", "Security Hardening", "Speed Optimization"] },
  { tier: "Tier 2", name: "Growth Tools", items: ["Advanced Analytics", "A/B Testing", "CRM Integration"] },
  { tier: "Tier 3", name: "Premium Features", items: ["Full E-commerce Suite", "Custom API Dev", "Priority 24/7 Support"] }
];

const Packages: React.FC = () => {
  return (
    <div className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-6">
          <div 
            className="inline-block px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-4 border shadow-sm"
            style={{ backgroundColor: 'white', color: COLORS.NAVY, borderColor: COLORS.AQUA }}
          >
            💰 Pricing Structure
          </div>
          <h2 className="text-4xl md:text-6xl font-black" style={{ color: COLORS.NAVY }}>
            Choose Your Growth Plan
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-70 font-medium" style={{ color: COLORS.NAVY }}>
            Unlock premium features and significant savings with our annual billing.
            The perfect foundation for a high-performance digital presence.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start mb-24">
          {pricingPlans.map((pkg) => (
            <div 
              key={pkg.name}
              className={`relative bg-white rounded-[2.5rem] p-10 transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col border-2 ${
                pkg.isPopular ? 'scale-105 z-10' : 'scale-100 z-0'
              }`}
              style={{ borderColor: pkg.isPopular ? COLORS.AQUA : '#EEF2F6' }}
            >
              {pkg.isPopular && (
                <div 
                  className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-white text-xs font-black tracking-widest uppercase shadow-xl flex items-center gap-2"
                  style={{ backgroundColor: COLORS.NAVY }}
                >
                  <span className="text-yellow-400">★</span> Best Value
                </div>
              )}

              {pkg.savings && (
                <div 
                  className="absolute top-8 right-8 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tighter"
                  style={{ backgroundColor: `${COLORS.AQUA}20`, color: COLORS.NAVY }}
                >
                  {pkg.savings}
                </div>
              )}

              <div className="mb-8">
                <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-50" style={{ color: COLORS.NAVY }}>{pkg.name}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-black" style={{ color: COLORS.NAVY }}>{pkg.price}</span>
                  <span className="text-sm opacity-50 font-bold">/ month</span>
                </div>
                <div className="text-sm font-bold" style={{ color: COLORS.AQUA }}>{pkg.billingInfo}</div>
              </div>

              <div className="space-y-4 mb-10 pt-6 border-t border-slate-50">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm font-medium">
                    <span className="text-slate-500">{feature.label}</span>
                    <span className={`font-bold ${
                      !feature.included ? 'text-slate-300' : 'text-slate-900'
                    }`}>
                      {typeof feature.included === 'string' ? feature.included : (feature.included ? '✓' : '✕')}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: COLORS.NAVY, color: 'white' }}
              >
                Select {pkg.name}
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="grid md:grid-cols-3 gap-8 pt-16 border-t border-slate-100">
          {addOns.map((addon) => (
            <div key={addon.tier} className="space-y-4">
              <div className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: COLORS.AQUA }}>{addon.tier}</div>
              <h4 className="text-xl font-bold" style={{ color: COLORS.NAVY }}>{addon.name}</h4>
              <ul className="space-y-2">
                {addon.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.AQUA }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
