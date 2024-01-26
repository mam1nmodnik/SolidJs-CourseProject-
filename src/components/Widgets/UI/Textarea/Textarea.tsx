import { JSX} from "solid-js";

interface textareaForm{
    class?: string;
    style?: string;
    name?: string;
    id?: string;
    onInput?: (event: any) => void;
    error?: string | boolean; 
}
const TextareaForm = ({...props}: textareaForm): JSX.Element => {

    const customClasses = props.class ? props.class : '';
    const ErrorProps = props.error ? "input__error" : '';
    
    return(
        <textarea 
            class={`input-area_input ${customClasses} ${ErrorProps}`}   
            style={props.style}
            name={props.name}
            id={props.id}
            onInput={props.onInput}
        /> 
    )
}

export default TextareaForm;