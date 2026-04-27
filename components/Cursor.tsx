'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let raf: number

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      if (dotRef.current) {
        dotRef.current.style.left = mx - 5 + 'px'
        dotRef.current.style.top  = my - 5 + 'px'
      }
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx - 18 + 'px'
        ringRef.current.style.top  = ry - 18 + 'px'
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Solid bright dot — visible on dark bg */}
      <div
        ref={dotRef}
        className="fixed w-[10px] h-[10px] rounded-full pointer-events-none z-[9999]"
        style={{
          background: '#38BDF8',
          boxShadow: '0 0 8px 2px rgba(56,189,248,0.6)',
        }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed w-[36px] h-[36px] rounded-full pointer-events-none z-[9998] transition-all duration-[250ms]"
        style={{
          border: '1.5px solid rgba(56,189,248,0.7)',
          boxShadow: '0 0 6px rgba(56,189,248,0.2)',
        }}
      />
    </>
  )
}
