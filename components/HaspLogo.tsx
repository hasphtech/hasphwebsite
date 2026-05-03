'use client'

/**
 * HaspLogo — official Hasph brand wordmark component
 *
 * Renders "has" + branded "p" mark (ring + stem, blue gradient) + "h"
 * in Nunito 800 for the rounded letterforms matching the brand guide.
 *
 * Props:
 *   fontSize  – controls overall scale (default 26)
 *   textColor – color of "has" and "h" spans (default white for dark backgrounds)
 */

interface PMarkProps {
  size: number
}

/**
 * The iconic Hasph "p" mark:
 * • A thick circular ring (bowl) with a dark-blue → sky-blue gradient
 * • A rounded-rect stem (descender) below the ring
 *
 * Geometry kept identical to the original hasph-p.svg master spec so the
 * shape is faithful to the brand guide.
 */
function PMarkIcon({ size }: PMarkProps) {
  // Original coordinate space from master spec
  // viewBox covers exactly the visible "p" bounds
  const vx = 61, vy = 43, vw = 134, vh = 147
  const width = (size * vw) / vh

  return (
    <svg
      width={width}
      height={size}
      viewBox={`${vx} ${vy} ${vw} ${vh}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        {/*
          Gradient aligned to the actual coordinate space so the colour
          shift runs top-left (deeper blue) → bottom-right (sky cyan),
          matching the brand guide app icon.
        */}
        <linearGradient
          id="hasph-pmark-g"
          x1={vx}        y1={vy}
          x2={vx + vw}   y2={vy + vh}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#1D4ED8" />
          <stop offset="50%"  stopColor="#2563EB" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Ring / Bowl */}
      <circle
        cx="128" cy="110" r="60"
        stroke="url(#hasph-pmark-g)"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />

      {/* Stem / Descender */}
      <rect
        x="118" y="120"
        width="20" height="70"
        rx="10"
        fill="url(#hasph-pmark-g)"
      />
    </svg>
  )
}

interface HaspLogoProps {
  /** Overall font size; the p-mark scales proportionally (default 26) */
  fontSize?: number
  /** Text colour for "has" and "h" — use white on dark backgrounds */
  textColor?: string
}

export default function HaspLogo({
  fontSize = 26,
  textColor = '#FFFFFF',
}: HaspLogoProps) {
  return (
    <div
      className="flex items-center"
      style={{
        fontFamily: "'Nunito', 'Inter', Arial, sans-serif",
        fontSize,
        fontWeight: 800,
        color: textColor,
        letterSpacing: '-0.01em',
        lineHeight: 1,
        gap: 0,
        userSelect: 'none',
      }}
      aria-label="Hasph"
    >
      <span>has</span>
      {/* p-mark is 20 % taller than fontSize to expose the descender */}
      <PMarkIcon size={fontSize * 1.22} />
      <span>h</span>
    </div>
  )
}
