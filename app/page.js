import Image from 'next/image'
import Homepage from './pages/Homepage'
import Writebook from './pages/Writebook'
import StepContext from './StepContext'

export default function Home() {
  return (
    <main>
    <StepContext >
    {/* <Homepage /> */}
    <Writebook />
    </StepContext>
    </main>
  )
}
