import Forest from "../../../../assets/img/лес.png"
import Form from "./MissingPersonForm"



export default function FormBlock(){
    return (
        <div class="conteiner-index" id="input-area">
            <div class="main-container-statistic">
                <h2 class="_anim-items _anim-no-hide">Заявить о пропаже</h2>
            </div>
            <div  class="background-color-missing">            
                <img src={Forest} alt=""/>             
                <div class="input-area">
                    <div>
                            <h2>Анкета заявления о пропавшем человеке</h2>
                    </div>
                    <div style="margin-bottom: 29px;">
                            <h4 class="label_h4">Заполните анкету и с вами свяжутся</h4>
                    </div>
                    <div>
                        <Form/>
                        <div class="pincode-container hide">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}