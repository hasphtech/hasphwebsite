'use client'

const items = [
  'AI-Native SaaS',
  'Global Platform',
  'Intelligent Automation',
  'Talent Network',
  'Virtual Company',
  'Scalable Infrastructure',
  'Human-Centered Design',
  'Future-Ready Software',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden bg-[#b8f000] py-[15px]"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: 'marqueeScroll 26s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[18px] px-10 font-bebas text-[18px] tracking-[0.12em] uppercase text-[#0a0a0a] flex-shrink-0"
          >
            <span className="w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.25)] flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
