"use client";

import React, { useEffect, useState } from "react";

/**
 * CreativeLoader
 * - Gooey gradient blobs that morph/float (SVG filter)
 * - Centered logo / initials
 * - Subtle text reveal
 *
 * Usage: <CreativeLoader show={loading} />
 */

export default function CreativeLoader({ show = true }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
      aria-hidden={!show}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/95 dark:bg-gray-900/92 backdrop-blur-sm transition-opacity" />

      {/* svg goo + logo */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6">
        {/* Gooey blob stage */}
        <div className="w-[260px] h-[170px] relative">
          <svg
            viewBox="0 0 600 400"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#6f42c1" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>

              {/* goo filter */}
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 18 -7"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>

            <g filter="url(#goo)">
              <circle className="blob blob-1" cx="160" cy="120" r="80" fill="url(#g1)" />
              <circle className="blob blob-2" cx="300" cy="80" r="60" fill="url(#g1)" />
              <circle className="blob blob-3" cx="220" cy="200" r="50" fill="url(#g1)" />
            </g>
          </svg>
        </div>

        {/* Logo / initials floating on top */}
        <div className="flex flex-col items-center gap-2 transform -translate-y-10">
          <div className="rounded-full w-20 h-20 flex items-center justify-center shadow-2xl glass -translate-y-6">
            {/* replace inner content with your logo or initials */}
            <img
              src="/images/SachinJadhavLogo.png"
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 tracking-wide">
              Sachin Jadhav
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 loader-subtext">
              crafting pixels & experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
