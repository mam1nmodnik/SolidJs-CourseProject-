import { JSX } from "solid-js";
import HeaderBlock from "./HeaderBlockMain";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function GlobalHeader(props: any): JSX.Element{
    return (
        <>
         {
            props.props.location?.pathname === '/' 
              ? <>
                    <HeaderBlock/>
                    <MobileNav/>
                </>
            : props.props.location?.pathname === '/Admin' 
                ?  <>
                    
                    </>
                :   <>
                        <Nav addClass={true}/> 
                        <MobileNav/>
                    </>
          }
        
        </>
    )
}