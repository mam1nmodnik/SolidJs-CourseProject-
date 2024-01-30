import ContentNeeds from "~/components/Widgets/contentNeeds/contentNeeds";
import { backpacks } from "~/helpers/help";

export default function Backpacks(){
    return (
        <>
            <ContentNeeds props={backpacks}/>
        </>
    )
}