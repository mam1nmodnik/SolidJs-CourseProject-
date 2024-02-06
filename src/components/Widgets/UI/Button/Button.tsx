import { JSX } from "solid-js";
import './style.css'
interface ButtonType {
    onClick?: (event: Event) => void;
    castomClass?: string;
    title: string;
    link?: string;
}


export default function MyButton({...props}: ButtonType): JSX.Element {
    
    const content = !props.link ? 
        <button class={`MyButton ${props.castomClass}`} onClick={props.onClick}>
            <h4 class="hide-send">{props.title}</h4>
        </button>
        :  
        <a href={props.link}>
            <button class={`MyButton ${props.castomClass}`} onClick={props.onClick}>
                <h4 class="hide-send">{props.title}</h4>
            </button>
        </a>
    return (
       <>{content}</> 
    )
}