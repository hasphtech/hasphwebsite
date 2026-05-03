'use client'

/**
 * HaspLogo — official Hasph brand wordmark component
 *
 * Renders "has" + branded "p" mark (thick-ring bowl + stem, blue→cyan gradient) + "h"
 * in Nunito 800, matching the brand guide wordmark exactly.
 *
 * Key geometry insight from brand guide:
 *   The "p" mark has a THICK ring — stroke width ≈ 55% of ring radius —
 *   giving the bold donut shape visible in the app icon. The old implementation
 *   used sw=14 vs r=60 (23%) which rendered as a hairline at small sizes.
 */

// ─── "p" mark SVG ────────────────────────────────────────────────────────────
//
// ViewBox: 0 0 70 100
//
//   Ring  (bowl):  cx=35, cy=38, r=24, strokeWidth=16
//     outer-radius = 32  → ring outer Ø 64
//     inner-radius = 16  → visible hole Ø 32  (inner/outer ≈ 50% — bold donut)
//     bounds: top=6  bottom=70  left=3  right=67
//
//   Stem (descender): x=27 y=50 w=16 h=46 rx=8
//     stem width = strokeWidth  →  consistent visual weight with ring
//     stem bottom = 96  →  descender extends cleanly below bowl
//
// At fontSize=26 (nav), rendered SVG is ≈ 22 × 32 px:
//   ring outer Ø ≈ 20.5 px,  stroke ≈ 5.1 px/side  →  bold, clearly donut-shaped

function PMarkIcon({ size }: { size: number }) {
  const w = size * (70 / 100)

  return (
    <svg
      width={w}
      height={size}
      viewBox="0 0 70 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        {/* diagonal top-left → bottom-right, darker-blue → sky-cyan */}
        <linearGradient
          id="hasph-pg"
          x1="0" y1="0" x2="70" y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#1D4ED8" />
          <stop offset="50%"  stopColor="#2563EB" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* ── Ring / Bowl ── thick-stroke circle matching brand donut shape */}
      <circle
        cx="35" cy="38" r="24"
        stroke="url(#hasph-pg)"
        strokeWidth="16"
        fill="none"
      />

      {/* ── Stem / Descender ── same width as ring stroke for visual unity */}
      <rect
        x="27" y="50"
        width="16" height="46"
        rx="8"
        fill="url(#hasph-pg)"
      />
    </svg>
  )
}

// ─── Wordmark ─────────────────────────────────────────────────────────────────

interface HaspLogoProps {
  /** Controls overall scale — text fontSize in px (default 26) */
  fontSize?: number
  /** Colour for "has" and "h" spans — white for dark backgrounds */
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
      {/*
        p-mark height = fontSize × 1.25 so the descender peeks below the
        text baseline while the bowl aligns with the cap-height of "has"/"h".
      */}
      <PMarkIcon size={fontSize * 1.25} />
      <span>h</span>
    </div>
  )
}
