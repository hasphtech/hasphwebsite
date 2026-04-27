import Nav      from '@/components/Nav'
import Hero     from '@/components/Hero'
import Marquee  from '@/components/Marquee'
import Products from '@/components/Products'
import Talent   from '@/components/Talent'
import Footer   from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Talent />
      </main>
      <Footer />
    </>
  )
}
