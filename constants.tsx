
import React from 'react';

export const COLORS = {
  NAVY: '#1A2B44', // Deep Navy Blue
  AQUA: '#81C7D4', // Light Aqua/Cyan
  WHITE: '#FFFFFF',
  GRAY_LIGHT: '#F8F9FA',
  GRAY_TEXT: '#64748B'
};

export const BRAND_CONFIG = {
  name: "SALT.",
  fullName: "SALT Web Development Agency",
  tagline: "Building Digital Foundations",
  description: "Crafting modern digital experiences with precision and clarity. We are your partner in building foundations that last.",
  logo: {
    useImage: true,
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5f1b297920f32e2930491a9b/1595610015507-O3O3N0O3O3N0O3O3N0O3/Crystal+Cube+Logo.png",
    svg: {
      viewBox: "0 0 100 100",
      mainPath: "M50 5L90 28V72L50 95L10 72V28L50 5Z",
      facets: [
        { d: "M50 5V50L90 28", strokeWidth: "4" },
        { d: "M50 50L10 28", strokeWidth: "4" },
        { d: "M50 50V95", strokeWidth: "4" }
      ],
      overlays: [
        { d: "M50 5L90 28L50 50L10 28L50 5Z", fill: "#E0F2F7", opacity: 0.9 },
        { d: "M10 28L50 50L50 95L10 72L10 28Z", fill: COLORS.AQUA, opacity: 0.6 },
        { d: "M90 28L90 72L50 95L50 50L90 28Z", fill: COLORS.AQUA, opacity: 0.3 }
      ]
    }
  }
};

export const SaltLogo: React.FC<{ className?: string, color?: string }> = ({ 
  className = "w-10 h-10", 
  color = COLORS.NAVY 
}) => {
  if (BRAND_CONFIG.logo.useImage) {
    return (
      <div className={`${className} flex items-center justify-center overflow-hidden`}>
        <img 
          src={BRAND_CONFIG.logo.imageUrl} 
          alt={BRAND_CONFIG.name} 
          className="w-full h-full object-contain"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>
    );
  }
  return (
    <svg viewBox={BRAND_CONFIG.logo.svg.viewBox} className={className} fill="none">
      {BRAND_CONFIG.logo.svg.overlays.map((o, i) => (
        <path key={i} d={o.d} fill={o.fill} fillOpacity={o.opacity} />
      ))}
      <path d={BRAND_CONFIG.logo.svg.mainPath} stroke={color} strokeWidth="5" strokeLinejoin="round" />
      {BRAND_CONFIG.logo.svg.facets.map((f, i) => (
        <path key={i} d={f.d} stroke={color} strokeWidth={f.strokeWidth} strokeLinejoin="round" />
      ))}
    </svg>
  );
};

export const BrandIdentity: React.FC<{ 
  showText?: boolean, 
  textColor?: string, 
  iconSize?: string,
  textSize?: string 
}> = ({ showText = true, textColor = COLORS.NAVY, iconSize = "w-10 h-10", textSize = "text-2xl" }) => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <SaltLogo className={`${iconSize} transition-all duration-500 group-hover:scale-110`} />
    {showText && <span className={`${textSize} font-extrabold tracking-tighter`} style={{ color: textColor }}>{BRAND_CONFIG.name}</span>}
  </div>
);
