import { createSignal } from 'solid-js'
import './style.css'
import InputForm from '~/components/Widgets/UI/Input/InputForm'
import   TextareaForm from '~/components/Widgets/UI/Textarea/Textarea'

import { newPost, submitMissing } from "../../../../api/api";
import MyButton from '~/components/Widgets/UI/Button/Button';
import axios from 'axios';



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

    interface file {
        fileName: string;
        fileObject?: File;
    }

    const [file, setFile] = createSignal<file>({
        fileName: '',
        fileObject: undefined
    })

    type ErrorProperty = string | boolean;
    interface Error {
        errorNameMissing: ErrorProperty;
        errorAge: ErrorProperty;
        errorSigns: ErrorProperty;
        errorNameApplicant: ErrorProperty;
        errorEmail: ErrorProperty;
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

    const [visibleFile, setVisibleFile] = createSignal<boolean>(false)


    let inpFileOpen: any;

    const updateVisileFile = () => {
      return setVisibleFile(!visibleFile());
    }
    
    const submitVisibleFile = () => {
        updateVisileFile && updateVisileFile()
        inpFileOpen.click()
    }

    const deletedFile = () => {
        setFile({
            fileName: '',
            fileObject: undefined 
        });
        updateVisileFile && updateVisileFile()
    }

    const validation = () => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const ageRegex = /^\b([0-9]|[1-9][0-9]|100)\b$/;
        setErrorMessage({
            errorNameMissing: !dataInput().nameMissing ? "Поле не должно быть пустым" : true,
            errorAge: !dataInput().age ? "Поле не должно быть пустым" : !ageRegex.test(dataInput().age) ? "Возраст должен быть не более 100 лет" :  true,
            errorSigns: !dataInput().signs ? "Поле не должно быть пустым" : true,
            errorNameApplicant: !dataInput().nameApplicant ? "Поле не должно быть пустым" : true,
            errorEmail: !dataInput().email ? "Поле не должно быть пустым" : !emailRegex.test(dataInput().email) ? 'Неверный формат email' : true,
            sendError: dataInput().nameMissing && dataInput().age && dataInput().signs && dataInput().nameApplicant && dataInput().email ? true : false
        })
    }
    
    const submitForm = async (event: Event) => {
        event.preventDefault();
        validation && validation();
        if(errorMessage().sendError){
            try {
                const response = await submitMissing(dataInput().nameMissing, dataInput().age, dataInput().signs, dataInput().nameApplicant, dataInput().email , file().fileObject);
                // Обработайте ответ от сервера
                console.log(response)
                alert('Анкета успешно отправлена.')
            } catch (error) {
                // Обработайте ошибку
                console.log(error);
                 alert('У нас проходят технические работы. Повторите попытку позже.')
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
                        type="number"
                        min="0"
                        max="100"
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

                <div class="input__file">
                    <div class={`${!file().fileName ? "": "hidden"} input__checkbox` }  onClick={submitVisibleFile} >
                        <svg class={`${!file().fileName? "": "hidden"} cursor-pointer`} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                            <path d="M9.5 11L12.5 14L22.5 4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.5 12V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V5C3.5 4.46957 3.71071 3.96086 4.08579 3.58579C4.46086 3.21071 4.96957 3 5.5 3H16.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                        <label for="checkbox" class={`${!file().fileName? "": "hidden "} cursor-pointer`}> Прикрепить фото пропавшего человека</label>
                    </div>
                    <input 
                        type="file"
                        accept=".jpg,.png,.gif"
                        class={`hidden`}
                        ref={inpFileOpen}
                        onInput={event => {
                            const file = event.target.files ? event.target.files[0] : null;
                            if (file) {
                                setFile({
                                    fileName: file.name,
                                    _fileObject: file,
                                    get fileObject() {
                                        return this._fileObject;
                                    },
                                    set fileObject(value) {
                                        this._fileObject = value;
                                    },
                                })
                            }
                        }}
                    /> 
                    <p>{file().fileName}</p>
                    <svg onClick={deletedFile} class={`${file().fileName ? "": "hidden"} cursor-pointer`} width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1351_1664)">
                        <path d="M35 0L0 35M35 35L0 0" stroke="#FF3300" stroke-width="2" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1351_1664">
                        <rect width="35" height="35" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>

                {/* <button class="button_form" onClick={submitForm} >
                    <h4 class="hide-send">Отправить</h4>
                </button> */}
                <MyButton castomClass='w-382pxForm h-55pxForm' onClick={submitForm}/>

        </form>
    )
}