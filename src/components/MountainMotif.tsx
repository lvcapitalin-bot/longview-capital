import React from "react";

interface MountainMotifProps {
  className?: string;
  variant?: "subtle-peaks" | "horizon-line" | "card-accent" | "watermark";
  color?: string;
  opacity?: number;
}

export const MountainMotif: React.FC<MountainMotifProps> = ({
  className = "",
  variant = "subtle-peaks",
  color = "#DCE6ED",
  opacity = 0.5,
}) => {
  if (variant === "horizon-line") {
    return (
      <div className={`w-full flex items-center justify-center my-8 ${className}`}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-border to-transparent" />
        <div className="mx-4 flex items-center gap-1">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="text-gold">
            <path d="M0 12L7 3L11 8L16 1L24 12H0Z" fill="currentColor" fillOpacity="0.7" />
          </svg>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-border to-transparent" />
      </div>
    );
  }

  if (variant === "card-accent") {
    return (
      <div className={`absolute bottom-0 right-0 pointer-events-none overflow-hidden ${className}`}>
        <svg
          width="160"
          height="80"
          viewBox="0 0 160 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-25"
        >
          {/* Subtle multi-layer peaks matching card design */}
          <path d="M70 80L115 25L145 60L160 40V80H70Z" fill="#DCE6ED" />
          <path d="M95 80L135 15L160 50V80H95Z" fill="#E8D2A7" fillOpacity="0.5" />
          <path d="M120 80L150 35L160 52V80H120Z" fill="#102542" fillOpacity="0.1" />
        </svg>
      </div>
    );
  }

  if (variant === "watermark") {
    return (
      <div className={`pointer-events-none absolute select-none ${className}`}>
        <svg
          width="480"
          height="240"
          viewBox="0 0 480 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity }}
        >
          {/* Soft background mountain ranges */}
          <path
            d="M0 240 L110 110 L170 170 L260 70 L340 160 L410 80 L480 180 L480 240 Z"
            fill="url(#peakGradient)"
          />
          <path
            d="M130 240 L230 115 L310 200 L410 95 L480 160 V240 H130 Z"
            fill="url(#goldPeakGradient)"
          />
          <defs>
            <linearGradient id="peakGradient" x1="240" y1="70" x2="240" y2="240" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DCE6ED" stopOpacity="0.4" />
              <stop stopColor="#FAF8F4" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="goldPeakGradient" x1="305" y1="95" x2="305" y2="240" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E8D2A7" stopOpacity="0.25" />
              <stop stopColor="#FAF8F4" stopOpacity="0.02" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // Default subtle peaks
  return (
    <div className={`overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto text-powder"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 L150,60 L240,90 L380,35 L470,80 L580,20 L690,75 L820,15 L950,85 L1080,45 L1200,100 L1200,120 L0,120 Z"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <path
          d="M80,120 L280,50 L390,95 L520,38 L670,82 L790,25 L920,80 L1040,30 L1150,75 L1200,60 L1200,120 Z"
          fill="#E8D2A7"
          fillOpacity="0.2"
        />
      </svg>
    </div>
  );
};
