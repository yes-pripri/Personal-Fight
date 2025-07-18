import {Hero} from './_components/hero'

console.log('Hero é:', Hero)

export default function Home() {
  return (
    <main>
        <div>
          <Hero />
        </div>
    </main>
  )
}