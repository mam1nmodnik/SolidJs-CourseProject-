import { JSX } from "solid-js";
import Footer from "./Footer";

export default function GlobalFooter(props: any): JSX.Element{
    return (
        <>
            {
                props.props.location?.pathname === '/' 
                ? <>
                    <Footer/>
                </>
                : props.props.location?.pathname === '/Admin' 
                ?  <>
                        
                    </>
                :   <>
                        <Footer/>
                    </>
            }
        </>
    )
}