import FormBlock from "~/components/Layouts/Main/FormBlock/FormBlock";
import MarqueeBlocks from "~/components/Layouts/Main/MarqueeBlock/MarqueeBlock";
import Statistics from "~/components/Layouts/Main/Statistics";
import Volunteer from "~/components/Layouts/Main/VolunteerBlock/Volunteer";


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
