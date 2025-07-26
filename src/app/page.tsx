import {Hero} from './_components/hero'
import { WhyChooseUs} from './_components/benefits'
import {Plans} from './_components/plans'
import { Footer} from './_components/footer'

export default function Home() {
  return (
    <main>
        <div>
          <Hero />
          <WhyChooseUs />
          <Plans/>
          <Footer />
        </div>
    </main> 
  )
}