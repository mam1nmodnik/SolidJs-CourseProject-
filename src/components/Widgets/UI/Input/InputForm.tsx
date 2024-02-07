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
                class={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${customClasses} ${ErrorProps} `}   
                min={MinProps}
                max={MaxProps}
            />
        </>
    )
}

export default InputForm;
