import { animate, inView } from "motion"
import Map from "../../../assets/svg/Block.svg"





export default  function Statistics(){
    
   
    const context = [   
            {name: "США"},
            {name: "Россия"},
            {name: "Великобритания"},
            {name: "Индия"},
            {name: "Бразилия"},
            {name: "Южная Корея"},
            {name: "Испания"},
            {name: "Австралия"}
    ]

    const content = context.map((el, index) => (
            <div class="container-city">
                <div class="city-statistic-flex">
                <h3>{el.name}</h3>
                <div class='flex'>
                        <h3 ><span class="numbers__item"></span> тыс.</h3>
                    </div>
                </div>
                <div class={`statistic-line1`}></div>
                <div class={`statistic-line2`}></div>
            </div>
    ))

    // статистика по странам
    const data = [424066, 180234, 112321, 111440, 40444, 21978, 20688 , 20678];
    const animateWidth = [85, 70, 55, 54, 19, 8, 7, 7];
    // Вывод статистики в блок
    const anim = (div: HTMLDivElement) => {
        inView( div, ({target})=> {
            const array = [...target.querySelectorAll("span.numbers__item")]
            if (array){
                array.map((elem, index)=> {  
                    animate(
                        (progress) => elem.innerHTML = Math.round( progress * data[index] ).toString(),
                        {duration: 3, easing: "ease-out" }
                    )
                })
            } 
            const mass = [...target.querySelectorAll("div.statistic-line1")]
            console.log(mass) 
            if(mass){
                mass.map((el, index) => {
                    animate(
                        el, 
                        { backgroundColor: "#fa762c", width: [ `0%`, `${animateWidth[index]+ "%"}` ] },
                        {duration: 3, easing: "ease-out"}
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
                <img src={Map} alt=""/>            
                <div class="container-city-flex">
                   {content}
                </div>
            </div>
        </div>     
    )
}