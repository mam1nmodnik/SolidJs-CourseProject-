




export default function MarqueeBlocks(){
  
    return(
        <div>
            <div>
                <div class="main-container-statistic">
                    <h2 class="_anim-items _anim-no-hide">Активные поиски</h2>
                    <h3 class="_anim-items _anim-no-hide">Это люди,  которых мы ищем прямо сейчас. И нам нужна ваша помощь, чтобы как можно скорее найти каждого из них.</h3>
                </div> 
            </div>    

            <div class="str str_wrap">
            <div class="ticker__item" data-id="${item.newMailEntry_id}"> 
                <div class="photo-of-the-missing">
                  <div>
                    <img src={`item.photo`} alt=""/>
                  </div>
                  <div> 
                    <p><span class="color-requirements">Область/край:</span> Самарский</p>
                    <p><span class="color-requirements">Возраст:</span> 
                      {/* {item.age} {item.age >= 10 && item.age <= 20 ? 'лет' : item.age % 10 === 1 ? 'год' : item.age % 10 >= 2 && item.age % 10 <= 4 ? 'года' : 'лет'}*/}
                    </p>
                  </div> 
                </div> 
              </div>
            </div>
        </div>
    )
}