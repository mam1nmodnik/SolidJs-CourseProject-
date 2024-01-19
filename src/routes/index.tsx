import Statistics from "~/components/Statistics";
import Volunteer from "~/components/Volunteer/Volunteer";


export default function Home() {
  return (
    <div >
        <Statistics/>    
        <Volunteer/>
        <div>
            <div class="main-container-statistic">
                <h2 class="_anim-items _anim-no-hide">Активные поиски</h2>
                <h3 class="_anim-items _anim-no-hide">Это люди,  которых мы ищем прямо сейчас. И нам нужна ваша помощь, чтобы как можно скорее найти каждого из них.</h3>
            </div> 
        </div>    
        
        <div class="str str_wrap"  id="ticker__content"></div>


        <div class="conteiner-index" id="input-area">
        
                <div class="main-container-statistic">
                    <h2 class="_anim-items _anim-no-hide">Заявить о пропаже</h2>
                </div>
            <div  class="background-color-missing">   
            
                    <div>
                        {/* <img src="img/лес.png" alt=""> */}
                    </div>
                    <div class="input-area">
                        <div>
                            <h2>Анкета заявления о пропавшем человеке</h2>
                        </div>
                        <div style="margin-bottom: 29px;">
                            <h4 class="label_h4">Заполните анкету и с вами свяжутся</h4>
                        </div>
                        <div>
                            <form id="newMailEntry" name="newMailEntry" enctype="multipart/form-data"> 
                                <div style="margin-bottom: 25px;" class="box div-relativ">
                                    <label for=""><h4 class="label_h4">ФИО пропавшего</h4></label>
                                    <input class="input-area_inp input inputs" type="text" name="fio" id="fio"/>
                                </div>
                                <div style="margin-bottom: 25px;" class="box div-relativ">
                                    <label for=""><h4 class="label_h4">Возсраст пропавшего</h4></label>
                                    <input class="input-area_input input inputs" type="text" name="age" id="age"/>
                                </div>
                                <div style="margin-bottom: 25px;" class="box">
                                    <label for=""><h4 class="label_h4">Опишите приметы пропавшего</h4></label>
                                    <textarea class="input-area_input input inputs " style="max-height: 120px; min-height: 44px;"name="signs" id="signs"> </textarea>   
                                </div>
                                <div style="margin-bottom: 25px;" class="box div-relativ"> 
                                    <label for=""><h4 class="label_h4">ФИО заявителя</h4></label>
                                    <input  class="input-area_input input inputs" type="text" name="fioApplicant" id="fioApplicant"/>
                                </div>
                                <div class="box div-relativ" style="margin-bottom: 25px;">
                                    <label  for=""><h4 class="label_h4">Email заявителя</h4></label>
                                    <input  class="input-area_input input inputs" type="text" name="email" id="email"/>
                                </div>
                                <div class="checkbox_label">
                                    
                                    <input class="input" type="checkbox" name="" id="newMailEntry-checkbox"/>
                                    <label  for="checkbox" >Прикрепить фото пропавшего человека</label>
                                </div>
                                <div class="addition-Photo" id="fileDive">
                                    <input type="file" name="photo" id="photo" class="inputs"/>
                                </div>
                                <div>
                                    <button class="button_form" id="newMailEntry-button"><h4 class="hide-send">Отправить</h4><div class="loader hide"></div></button>
                                </div>


                            </form>
                            
                            <div class="pincode-container hide">

                            </div>
                        </div>
                    </div>
                
            </div>



        </div>
    </div>
  );
}
