import { JSX, createSignal } from "solid-js";

interface inputForm{
    type: string;
    class?: string;
    style?: string;
    name?: string;
    id?: string;
    onInput?: (event: any) => void;
    error: string | boolean;
    min?: string;
    max?: string;
}

 const InputForm = ({...props}: inputForm): JSX.Element => {
   
    let customClasses = props.class ? props.class : '';
    let ErrorProps = props.error  ? "input__error" : '';
    let MinProps = props.min ? props.min : '';
    let MaxProps = props.max ? props.max : '';
    
    return (
        <>
            <input 
                {...props}
                class={`input-area_input ${customClasses} ${ErrorProps} `}   
                min={MinProps}
                max={MaxProps}
            />
        </>
        
    )
}

export default InputForm;
