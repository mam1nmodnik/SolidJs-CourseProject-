interface TextareaForm{
    class?: string;
    style?: string;
    name?: string;
    id?: string;
    onInput?: (event: any) => void;
    error?: string;
}

export default function TextareaForm({...props}: TextareaForm){
    return(
        <textarea 
            class={`input-area_input ${props.class} ${props.error ? 'input__error' : ''}`}   
            style={props.style}
            name={props.name}
            id={props.id}
            onInput={props.onInput}
        /> 
    )
}