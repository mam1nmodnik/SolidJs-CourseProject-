import FormBlock from "./FormBlock/FormBlock";
import MarqueeBlocks from "./MarqueeBlock/MarqueeBlock";
import Statistics from "./Statistics";
import Volunteer from "./VolunteerBlock/Volunteer";

export default function Main(){
    return (
        <div class="content__home__children">                
                <Statistics/>    
                <Volunteer/>
                <MarqueeBlocks/>
                <FormBlock/>
        </div>
    )
}