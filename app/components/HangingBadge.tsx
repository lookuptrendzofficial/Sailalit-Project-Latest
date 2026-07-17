"use client";

import { useEffect, useState } from "react";

const stats = [
  "🏆 170+ Projects Completed",
  "⭐ 20+ Years of Experience",
  "🤝 150+ Happy Clients",
  "✅ Premium Quality Construction",
];

export default function HangingBadge() {
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50">
      <div className="flex flex-col items-center">

        {/* Rope */}
        <div className="w-[2px] h-10 bg-blue-400"></div>

        {/* Hanging Badge */}
        <div className="animate-swing rounded-2xl bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 px-8 py-4 shadow-2xl border border-white/20">
          <p className="text-white font-semibold text-sm md:text-base text-center transition-all duration-500">
            {stats[currentStat]}
          </p>
        </div>

      </div>
    </div>
  );
}
