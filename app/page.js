import Image from 'next/image'
import Homepage from './pages/Homepage'
import Writebook from './pages/Writebook'
import StepContext from './StepContext'
import Designbook from './pages/Designbook'

export default function Home() {
  return (
    <main>
    <StepContext >
    {/* <Homepage /> */}
    <Designbook />
    </StepContext>
    </main>
  )
}
