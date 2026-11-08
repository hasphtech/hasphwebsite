import Nav      from '@/components/Nav'
import Hero     from '@/components/Hero'
import Marquee  from '@/components/Marquee'
import About    from '@/components/About'
import Products from '@/components/Products'
import Process  from '@/components/Process'
import Talent   from '@/components/Talent'
import CTA      from '@/components/CTA'
import Footer   from '@/components/Footer'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Marquee />
        <About />
        <Products />
        <Process />
        <Talent />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
