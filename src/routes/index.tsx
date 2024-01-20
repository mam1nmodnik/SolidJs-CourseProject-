import FormBlock from "~/components/FormBlock/FormBlock";
import MarqueeBlocks from "~/components/MarqueeBlock/MarqueeBlock";
import Statistics from "~/components/Statistics";
import Volunteer from "~/components/VolunteerBlock/Volunteer";


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
