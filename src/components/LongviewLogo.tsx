import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  linkToHome?: boolean;
}

export const LongviewLogo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showTagline = false,
  linkToHome = true,
}) => {
  // Height configurations that maintain exact aspect ratio from official PNG:
  // Full logo with tagline: 809 x 234 (aspect ratio: 3.457)
  // Compact logo without tagline: 809 x 178 (aspect ratio: 4.545)
  const sizeConfig = {
    sm: { height: 36, width: showTagline ? 124 : 164 },
    md: { height: 44, width: showTagline ? 152 : 200 },
    lg: { height: 56, width: showTagline ? 194 : 255 },
    xl: { height: 72, width: showTagline ? 249 : 327 },
  };

  const { height, width } = sizeConfig[size];
  const logoSrc = showTagline
    ? "/images/logo-transparent.png"
    : "/images/logo-compact.png?v=2";

  const logoImg = (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={logoSrc}
        alt="Longview Capital - Think. Invest. Grow."
        width={width}
        height={height}
        priority
        className="h-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
        style={{ height: `${height}px`, width: "auto" }}
      />
    </div>
  );

  if (!linkToHome) {
    return logoImg;
  }

  return (
    <Link
      href="/"
      className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-0.5 transition"
      aria-label="Longview Capital - Return to Home"
    >
      {logoImg}
    </Link>
  );
};
