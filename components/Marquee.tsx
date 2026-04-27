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
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,255,255,0.14)',
        borderBottom: '1px solid rgba(255,255,255,0.14)',
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
            <span className="w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.4)' }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
