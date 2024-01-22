

interface InputForm{
    type: string;
    class?: string;
    style?: string;
    name?: string;
    id?: string;
    onInput?: (event: any) => void;
    error?: string;
}

export default function InputForm({...props}: InputForm){
    return (
        <input 
            type={props.type}
            class={`input-area_input ${props.class} ${props.error ? 'input__error' : ''} `}   
            style={props.style}
            name={props.name}
            id={props.id}
            onInput={props.onInput}
        />
    )
}