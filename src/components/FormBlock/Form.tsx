export default function Form(){
    return (
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
    )
}