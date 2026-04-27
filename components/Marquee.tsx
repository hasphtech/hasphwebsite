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
      className="w-full overflow-hidden py-[14px] md:py-[15px]"
      style={{
        background: 'linear-gradient(90deg, #2563EB, #1d4ed8)',
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
            className="inline-flex items-center gap-[12px] md:gap-[18px] px-5 md:px-10 font-bebas text-[14px] md:text-[18px] tracking-[0.12em] uppercase text-white flex-shrink-0"
          >
            <span className="w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full bg-[rgba(255,255,255,0.4)] flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
