import { createSignal } from 'solid-js'
import './style.css'
import InputForm from '~/components/Widgets/UI/Input/InputForm'
import TextareaForm from '~/components/Widgets/UI/Textarea/Textarea'

import { submitMissing } from "../../../../api/auth";


export default function Form(){

    interface DataInput {
        nameMissing: string;
        age: string;
        signs: string;
        nameApplicant: string;
        email: string;
    }
    
    const [dataInput, setDataInput] = createSignal<DataInput>({
        nameMissing: '',
        age: '',
        signs: '',
        nameApplicant: '',
        email: '',
    })

    interface File {
        fileName: string;
        fileObject: {};
    }

    const [file, setFile] = createSignal<File>({
        fileName: '',
        fileObject: ''
    })

    interface Error {
        errorNameMissing: string;
        errorAge: string;
        errorSigns: string;
        errorNameApplicant: string;
        errorEmail: string;
        sendError: boolean;
    }
    const [errorMessage, setErrorMessage] = createSignal<Error>({
        errorNameMissing: '',
        errorAge: '',
        errorSigns: '',
        errorNameApplicant: '',
        errorEmail: '',
        sendError: false
    })
    
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const validation = () => {
        setErrorMessage({
            errorNameMissing: !dataInput().nameMissing ? "Поле не должно быть пустым" : "",
            errorAge: !dataInput().age ? "Поле не должно быть пустым" : "",
            errorSigns: !dataInput().signs ? "Поле не должно быть пустым" : "",
            errorNameApplicant: !dataInput().nameApplicant ? "Поле не должно быть пустым" : "",
            errorEmail: !dataInput().email ? "Поле не должно быть пустым" : !emailRegex.test(dataInput().email) ? 'Неверный формат email' : '',
            sendError: dataInput().nameMissing && dataInput().age && dataInput().signs && dataInput().nameApplicant && dataInput().email ? true : false
        })
    }


    const submitForm = async (event: Event) => {
        event.preventDefault();
        validation()
        if(errorMessage().sendError){
            try {
                const response = await submitMissing(dataInput().nameMissing, dataInput().age, dataInput().signs, dataInput().nameApplicant, dataInput().email , file().fileObject);
                // Обработайте ответ от сервера
                console.log(response)
            } catch (error) {
                // Обработайте ошибку
                console.log("Error" + error);
            }
        }


    }

    return (
        <form>  
            <div class="container__form">
                <div >
                    <label for="" class="label_h4">ФИО пропавшего</label>
                    <InputForm  
                        type="text"
                        error={errorMessage().errorNameMissing}
                        onInput={event => setDataInput( {...dataInput(), nameMissing: event.target.value} ) }
                    />
                    <div class="block__inputs">
                        <p>
                            {errorMessage().errorNameMissing}
                        </p>
                    </div>
                </div>
                <div class="block__inputs">
                    <label for="" class="label_h4">Возсраст пропавшего</label>
                    <InputForm 
                        type="text"  
                        error={errorMessage().errorAge}
                        onInput={event => setDataInput( {...dataInput(), age: event.target.value} )}  
                    />
                    <div class="block__inputs">
                        <p>
                            {errorMessage().errorAge}
                        </p>
                    </div>
                </div>
                <div class="block__inputs">
                    <label for="" class="label_h4">Опишите приметы пропавшего</label>
                    <TextareaForm  
                        style="max-height: 120px; min-height: 44px;" 
                        name="signs" 
                        id="signs" 
                        error={errorMessage().errorSigns}
                        onInput={event => setDataInput( {...dataInput(), signs: event.target.value} )} 
                    />
                    <div class="block__inputs">
                        <p>
                            {errorMessage().errorSigns}
                        </p>
                    </div>
                </div>
                <div class="block__inputs">
                    <label for="" class="label_h4">ФИО заявителя</label>
                    <InputForm 
                        type="text" 
                        error={errorMessage().errorNameApplicant}
                        onInput={event => setDataInput( {...dataInput(), nameApplicant: event.target.value} )} 
                    />
                    <div class="block__inputs">
                        <p>
                            {errorMessage().errorNameApplicant}
                        </p>
                    </div>
                </div>
                <div class="block__inputs">
                    <label for="" class="label_h4">Email заявителя</label>
                    <InputForm 
                        type="text" 
                        error={errorMessage().errorEmail}
                        onInput={event => setDataInput( {...dataInput(), email: event.target.value} )}
                    />
                    <div class="block__inputs">
                        <p>
                            {errorMessage().errorEmail}
                        </p>
                    </div>
                </div>
            </div>
                <div class="input__checkbox">
                    <input 
                        type="checkbox"  
                       
                    />
                    <label for="checkbox" >Прикрепить фото пропавшего человека</label>
                </div>

                <input 
                    type="file"
                    accept=".jpg,.png,.gif"
                    // style="display: none;"
                    onInput={event => {
                        const file = event.target.files ? event.target.files[0] : null;
                        if (file) {
                            setFile({
                                fileName: file.name,
                                fileObject: file
                            })
                        }
                    }}
                /> 
                <button class="button_form" onClick={submitForm}>
                    <h4 class="hide-send">Отправить</h4>
                </button>
          
        </form>
    )
}