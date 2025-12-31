
import React from 'react';

export const COLORS = {
  NAVY: '#1A2B44', // Deep Navy Blue
  AQUA: '#81C7D4', // Light Aqua/Cyan
  WHITE: '#FFFFFF',
  GRAY_LIGHT: '#F8F9FA',
  GRAY_TEXT: '#64748B'
};

/**
 * BRAND CONFIGURATION
 * Using the high-resolution brand image directly as requested.
 */
export const BRAND_CONFIG = {
  name: "SALT.",
  fullName: "SALT Web Development Agency",
  tagline: "Building Digital Foundations",
  description: "Crafting modern digital experiences with precision and clarity. We are your partner in building foundations that last.",
  logo: {
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5f1b297920f32e2930491a9b/1595610015507-O3O3N0O3O3N0O3O3N0O3/Crystal+Cube+Logo.png",
  }
};

/**
 * SALT LOGO COMPONENT
 * Renders the brand logo with a scale transform to eliminate 
 * the massive whitespace inherent in the Squarespace source file.
 */
export const SaltLogo: React.FC<{ className?: string }> = ({ 
  className = "w-10 h-10"
}) => {
  return (
    <div className={`${className} flex items-center justify-center overflow-hidden relative`}>
      <img 
        src={BRAND_CONFIG.logo.imageUrl} 
        alt="SALT Brand Logo" 
        className="w-full h-full object-contain transform scale-[2.8]" 
        loading="eager"
      />
    </div>
  );
};

export const BrandIdentity: React.FC<{ 
  showText?: boolean, 
  textColor?: string, 
  iconSize?: string,
  textSize?: string 
}> = ({ showText = true, textColor = COLORS.NAVY, iconSize = "w-10 h-10", textSize = "text-2xl" }) => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative">
      <SaltLogo className={`${iconSize} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`} />
    </div>
    {showText && <span className={`${textSize} font-black tracking-tighter`} style={{ color: textColor }}>{BRAND_CONFIG.name}</span>}
  </div>
);
