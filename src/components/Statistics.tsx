import { animate, inView } from "motion"




export default  function Statistics(){
    
    

    
   
    const data = [424066,180234,112321,111440,40444, 21978,20688  ,20678 ]

    const anim = (div: HTMLDivElement) => {
        inView( div, ({target})=> {
            const h3 = target.querySelectorAll("span.numbers__item");
            const array = [...h3]
            if (array){
                array.map((elem, index)=> {  
                    animate(
                        (progress) => elem.innerHTML = Math.round(progress * data[index]).toString(),
                        {duration: 5, easing: "ease-out" }
                    )
                })
            }
        })
    }
    

    return (
        
        <div class="conteiner-index" >
    
            <div class="main-container-statistic">
                <h2 class="_anim-items _anim-no-hide">Статистика пропавших людей в разных странах</h2>
                <h3 class="_anim-items _anim-no-hide">По статистике больше всего людей пропадает или теряется в странах США, Россия и Великобритания.</h3>
            </div>
        
            <div class="main-container-statistic-two" ref={anim}>
                    
                <img src="./assets/Block (1).svg" alt=""/>     
                       
                <div class="container-city-flex">
                    <div class="container-city">
                        <div class="city-statistic-flex">
                        <h3>США</h3>
                        <div class='flex'>
                                <h3 ><span class="numbers__item"></span> тыс.</h3>
                            </div>
                        </div>
                        <div class="statistic-line"></div>
                    </div>
                    <div class="container-city">
                        <div class="city-statistic-flex">
                            <h3>Россия</h3>
                            <div class='flex'>
                                <h3 ><span class="numbers__item"></span> тыс.</h3>
                            </div>
                            
                        </div>
                        <div class="statistic-line2"></div>
                    </div>
                    <div class="container-city">
                        <div class="city-statistic-flex">
                        <h3>Великобритания</h3>
                        <div class='flex'>
                                <h3 ><span class="numbers__item"></span> тыс.</h3>
                            </div>
                        </div>
                        <div class="statistic-line3"></div>
                        <input type="range" name="" id="" min={0} />
                    </div>
                    <div class="container-city">
                        <div class="city-statistic-flex">
                        <h3>Индия</h3>
                        <div class='flex'>
                                <h3 ><span class="numbers__item"></span> тыс.</h3>
                            </div>
                        </div>
                        <div class="statistic-line4"></div>
                    </div>
                    <div class="container-city">
                        <div class="city-statistic-flex">
                        <h3>Бразилия</h3>
                        <div class='flex'>
                                <h3 ><span class="numbers__item"></span> тыс.</h3>
                            </div>
                        </div>
                        <div class="statistic-line5"></div>
                    </div>
                    <div class="container-city">
                        <div class="city-statistic-flex">
                        <h3>Южная Корея</h3>
                        <div class='flex'>
                                <h3 ><span class="numbers__item"></span> тыс.</h3>
                            </div>
                        </div>
                        <div class="statistic-line6"></div>
                    </div>
                    <div class="container-city">
                        <div class="city-statistic-flex">
                        <h3>Испания</h3>
                        <div class='flex'>
                                <h3 ><span class="numbers__item"></span> тыс.</h3>
                            </div>
                        </div>
                        <div class="statistic-line7"></div>
                    </div>
                    <div class="container-city">
                        <div class="city-statistic-flex">
                        <h3>Австралия</h3>
                        <div class='flex'>
                                <h3 ><span class="numbers__item"></span> тыс.</h3>
                            </div>
                        </div>
                        <div class="statistic-line8"></div>
                    </div>
                </div>

            </div>

        </div>
        
       
    )
}