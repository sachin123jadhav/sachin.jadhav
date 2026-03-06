"use client";

import { useState } from "react";

export default function HoverCard({ children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-lg bg-white p-6 group transition-shadow duration-300 hover:shadow-[0px_16px_50px_0px_rgba(13,14,29,0.12)]"
      style={{
        "--x": `${pos.x}px`,
        "--y": `${pos.y}px`,
      }}
    >
      {/* Hover Glow */}
      <div
        className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          top: "var(--y)",
          left: "var(--x)",
          transform: "translate(-50%, -50%)",
          width: "200%",
          height: "200%",
          background: "radial-gradient(#6366f1, transparent, transparent)",
        }}
      />

      {/* Inner background */}
      <div className="absolute inset-[2px] bg-white rounded-lg"></div>

      {/* Dynamic Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}