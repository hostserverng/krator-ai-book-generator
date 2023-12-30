
import Image from "next/image";
import Homepage from "./pages/Homepage";
import Writebook from "./writebookcontent/page";
import StepContext from "./StepContext";
import Designbook from "./bookcoverdesign/page";
import CreateIllustration from "./createillustration/page";






export default function Home() {
  return (
    <main>
      <StepContext>
        <Homepage />
        {/* <Designbook /> */}
        {/* <CreateIllustration /> */}
      </StepContext>
    </main>
  );
}
