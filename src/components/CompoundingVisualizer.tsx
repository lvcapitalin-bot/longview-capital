"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export const CompoundingVisualizer: React.FC<{ onConsultClick?: () => void }> = ({
  onConsultClick,
}) => {
  const [initialCapital, setInitialCapital] = useState<number>(1000000); // ₹10 Lakhs
  const [years, setYears] = useState<number>(10);
  const [cagr, setCagr] = useState<number>(14); // 14% CAGR

  // Calculations
  const futureValue = Math.round(initialCapital * Math.pow(1 + cagr / 100, years));
  const multiple = (futureValue / initialCapital).toFixed(1);
  const fdValue = Math.round(initialCapital * Math.pow(1 + 0.07, years)); // 7% Bank FD
  const extraWealth = futureValue - fdValue;

  // Data points for SVG chart
  const dataPoints = Array.from({ length: years + 1 }, (_, i) => ({
    year: i,
    equity: Math.round(initialCapital * Math.pow(1 + cagr / 100, i)),
    fd: Math.round(initialCapital * Math.pow(1 + 0.07, i)),
  }));

  const maxVal = Math.max(futureValue, fdValue);

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      const lakhs = val / 100000;
      return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)} L`;
    }
    return `₹${val.toLocaleString("en-IN")}`;
  };

  // Compact SVG geometry
  const width = 460;
  const height = 120;
  const padX = 14;
  const padY = 12;

  const getCoord = (year: number, val: number) => ({
    x: padX + (year / years) * (width - 2 * padX),
    y: height - padY - (val / maxVal) * (height - 2 * padY),
  });

  const eqPts = dataPoints.map((p) => getCoord(p.year, p.equity));
  const fdPts = dataPoints.map((p) => getCoord(p.year, p.fd));

  const eqPath = eqPts.map((pt, i) => `${i === 0 ? "M" : "L"} ${pt.x} ${pt.y}`).join(" ");
  const eqArea = `${eqPath} L ${eqPts[eqPts.length - 1].x} ${height - padY} L ${eqPts[0].x} ${height - padY} Z`;
  const fdPath = fdPts.map((pt, i) => `${i === 0 ? "M" : "L"} ${pt.x} ${pt.y}`).join(" ");

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl border border-[#E8D2A7] shadow-[0_8px_30px_-8px_rgba(16,37,66,0.08)] overflow-hidden">
      {/* Main Grid: On mobile, Results + Chart sit on TOP right above compact controls so everything fits in 1 screen */}
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* VISUAL OUTPUT & CHART (Top on mobile, Right on desktop) */}
        <div className="md:col-span-7 md:order-2 flex flex-col justify-between bg-[#FAF8F5] border-b md:border-b-0 md:border-l border-[#E8D2A7]/70">
          {/* Compact Navy Result Strip */}
          <div className="bg-gradient-to-r from-[#102542] to-[#1A365D] text-white px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gold-light font-semibold block">
                Est. Value in {years} Yrs ({cagr}%)
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-serif font-bold text-white">
                  {formatINR(futureValue)}
                </span>
                <span className="text-[11px] font-semibold text-emerald-400">
                  {multiple}x
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 text-right">
              <div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-powder/75 block">
                  FD (7%)
                </span>
                <span className="text-xs sm:text-sm font-serif font-semibold text-powder">
                  {formatINR(fdValue)}
                </span>
              </div>
              <div className="pl-3 border-l border-white/15">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-emerald-300 block">
                  Extra Gain
                </span>
                <span className="text-xs sm:text-sm font-serif font-bold text-emerald-400">
                  +{formatINR(extraWealth)}
                </span>
              </div>
            </div>
          </div>

          {/* Compact SVG Curve */}
          <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
            <div className="bg-white rounded-xl border border-[#E8D2A7]/60 px-3 pt-2.5 pb-2">
              <div className="flex items-center justify-between text-[10px] text-warmgrey mb-1">
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 font-semibold text-navy">
                    <span className="w-2 h-2 rounded-full bg-gold" /> Equity
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2.5 h-0 border-t border-dashed border-warmgrey" /> FD 7%
                  </span>
                </span>
                <span className="font-semibold text-gold-dark">{years}-Year Curve</span>
              </div>

              <div className="w-full h-24 sm:h-32">
                <svg
                  viewBox={`0 0 ${width} ${height}`}
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="lvEqGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C99532" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#FAF8F4" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  <line
                    x1={padX}
                    y1={height - padY}
                    x2={width - padX}
                    y2={height - padY}
                    stroke="#E5E3DC"
                    strokeWidth="1"
                  />
                  <path d={eqArea} fill="url(#lvEqGrad)" />
                  <path
                    d={fdPath}
                    fill="none"
                    stroke="#9A9FA7"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                  />
                  <path
                    d={eqPath}
                    fill="none"
                    stroke="#C99532"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle
                    cx={eqPts[eqPts.length - 1].x}
                    cy={eqPts[eqPts.length - 1].y}
                    r="4.5"
                    fill="#102542"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div className="flex justify-between text-[10px] text-warmgrey pt-1 border-t border-[#E8D2A7]/30">
                <span>Start: {formatINR(initialCapital)}</span>
                <span className="font-bold text-navy">Yr {years}: {formatINR(futureValue)}</span>
              </div>
            </div>

            {/* Footer line inside visual panel (desktop) */}
            <div className="hidden md:flex items-center justify-between pt-3 text-[10px] text-warmgrey">
              <span className="italic">*Illustrative only. No guaranteed returns.</span>
              {onConsultClick && (
                <button
                  type="button"
                  onClick={onConsultClick}
                  className="inline-flex items-center gap-1 font-bold text-navy hover:text-gold-dark transition"
                >
                  <span>Discuss Strategy</span>
                  <ArrowRight className="w-3 h-3 text-gold" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* COMPACT CONTROLS (Bottom on mobile, Left on desktop) */}
        <div className="md:col-span-5 md:order-1 p-4 sm:p-5 flex flex-col justify-between space-y-3.5 sm:space-y-5">
          {/* Slider 1: Capital with inline quick pills */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-navy">
                Investment
              </span>
              <div className="flex items-center gap-1">
                {[500000, 1000000, 2500000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setInitialCapital(amt)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition ${
                      initialCapital === amt
                        ? "bg-navy text-white"
                        : "bg-[#FAF8F4] text-warmgrey border border-[#E8D2A7]/70 hover:text-navy"
                    }`}
                  >
                    {amt / 100000}L
                  </button>
                ))}
              </div>
              <span className="text-sm font-serif font-bold text-navy min-w-[54px] text-right">
                {formatINR(initialCapital)}
              </span>
            </div>
            <input
              type="range"
              min="200000"
              max="10000000"
              step="100000"
              value={initialCapital}
              onChange={(e) => setInitialCapital(Number(e.target.value))}
              className="w-full h-1.5 bg-[#DCE6ED] rounded-lg appearance-none cursor-pointer accent-gold"
              aria-label="Investment amount"
            />
          </div>

          {/* Sliders 2 & 3: Side-by-side on mobile to stay single-glance, stacked on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3.5 sm:gap-4">
            {/* Time Horizon */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-bold uppercase tracking-wider text-navy">Horizon</span>
                <span className="font-serif font-bold text-navy text-sm">{years} Yrs</span>
              </div>
              <input
                type="range"
                min="3"
                max="20"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full h-1.5 bg-[#DCE6ED] rounded-lg appearance-none cursor-pointer accent-gold"
                aria-label="Holding horizon in years"
              />
            </div>

            {/* Expected CAGR */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-bold uppercase tracking-wider text-navy">Return</span>
                <span className="font-serif font-bold text-gold-dark text-sm">{cagr}% p.a.</span>
              </div>
              <input
                type="range"
                min="10"
                max="18"
                step="1"
                value={cagr}
                onChange={(e) => setCagr(Number(e.target.value))}
                className="w-full h-1.5 bg-[#DCE6ED] rounded-lg appearance-none cursor-pointer accent-gold"
                aria-label="Expected annual return percentage"
              />
            </div>
          </div>

          {/* Mobile Footer Line */}
          <div className="flex md:hidden items-center justify-between pt-2 border-t border-[#E8D2A7]/40 text-[10px] text-warmgrey">
            <span className="italic">*Illustrative only</span>
            {onConsultClick && (
              <button
                type="button"
                onClick={onConsultClick}
                className="inline-flex items-center gap-1 font-bold text-navy"
              >
                <span>Discuss Strategy</span>
                <ArrowRight className="w-3 h-3 text-gold" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
