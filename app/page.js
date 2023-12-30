import Image from 'next/image'
import Homepage from './pages/Homepage'
import Writebook from './pages/Writebook'
import StepContext from './StepContext'
import Designbook from './pages/Designbook'
import CreateIllustration from './pages/CreateIllustration'

export default function Home() {
  return (
    <main>
    <StepContext >
    {/* <Homepage /> */}
    {/* <Designbook /> */}
    <CreateIllustration />
    </StepContext>
    </main>
  )
}
