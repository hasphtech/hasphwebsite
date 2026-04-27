import Nav      from '@/components/Nav'
import Hero     from '@/components/Hero'
import Marquee  from '@/components/Marquee'
import Products from '@/components/Products'
import Talent   from '@/components/Talent'
import Footer   from '@/components/Footer'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Marquee />
        <Products />
        <Talent />
      </main>
      <Footer />
    </div>
  )
}
