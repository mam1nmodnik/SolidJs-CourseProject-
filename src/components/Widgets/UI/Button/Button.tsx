import { JSX } from "solid-js";
import './style.css'
interface ButtonType {
    onClick?: (event: Event) => void;
    castomClass?: string;
}


export default function MyButton({...props}: ButtonType): JSX.Element {
    return (
        <button {...props} class={`MyButton ${props.castomClass}` }>
            <h4 class="hide-send">Отправить</h4>
        </button>
    )
}