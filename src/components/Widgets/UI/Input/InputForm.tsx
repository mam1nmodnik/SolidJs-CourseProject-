import { JSX } from "solid-js";

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

    const customClasses = props.class ? props.class : '';
    const ErrorProps = props.error  ? "input__error" : '';
    const Min = props.min ? props.min : '';
    const Max = props.max ? props.max : '';
    return (
        <>
            <input 
                type={props.type}
                class={`input-area_input ${customClasses}  ${ErrorProps} `}   
                style={props.style}
                name={props.name}
                id={props.id}
                onInput={props.onInput}
                min={Min}
                max={Max}
            />
        </>
        
    )
}

export default InputForm;
