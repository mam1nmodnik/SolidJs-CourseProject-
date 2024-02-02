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

    let customClasses = props.class ? props.class : '';
    let ErrorProps = props.error ? "input__error" : '';
    
    return(
        <textarea 
            {...props}
            class={`input-area_input ${customClasses} ${ErrorProps}`}   
        /> 
    )
}

export default TextareaForm;