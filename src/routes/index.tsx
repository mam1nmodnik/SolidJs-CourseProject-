import FormBlock from "~/components/Main/FormBlock/FormBlock";
import MarqueeBlocks from "~/components/Main/MarqueeBlock/MarqueeBlock";
import Statistics from "~/components/Main/Statistics";
import Volunteer from "~/components/Main/VolunteerBlock/Volunteer";


export default function Home() {
  return (
    <>
        <Statistics/>    
        <Volunteer/>
        <MarqueeBlocks/>
        <FormBlock/>
    </>
  );
}
