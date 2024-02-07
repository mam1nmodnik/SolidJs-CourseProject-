import { animate, inView } from "motion"
import Map from "../../../assets/svg/Block.svg"





export default  function Statistics(){
    
    const context = [
        {name: "США", data: 424066, animateWidth: 85},
        {name: "Россия", data: 180234, animateWidth: 70},
        {name: "Великобритания",data: 112321, animateWidth: 55},
        {name: "Индия", data: 111440, animateWidth: 54},
        {name: "Бразилия",data: 40444, animateWidth: 19},
        {name: "Южная Корея", data: 21978, animateWidth: 8},
        {name: "Испания", data: 20688, animateWidth: 7},
        {name: "Австралия", data: 20678, animateWidth: 7}
    ]
 
    const content = context.map((el) => (
            <div class="container-city">
                <div class="city-statistic-flex">
                <h3>{el.name}</h3>
                <div class='flex'>
                        <h3 ><span class="numbers__item">0</span> тыс.</h3>
                    </div>
                </div>
                <div class={`statistic-line1`}></div>
                <div class={`statistic-line2`}></div>
            </div>
    ))


    // Вывод статистики в блок
    const anim = (div: HTMLDivElement) => {
        inView( div, ({target})=> {
            const array = [...target.querySelectorAll("span.numbers__item")]
            if (array){
                array.map((elem, index)=> {  
                    animate(
                        (progress) => elem.innerHTML = Math.round( progress * context[index].data ).toString(),
                        {duration: 3, easing: "ease-out" }
                    )
                })
            } 
            const mass = [...target.querySelectorAll("div.statistic-line1")]
            // console.log(mass) 
            if(mass){
                mass.map((el, index) => {
                    animate(
                        el, 
                        { backgroundColor: "#fa762c", width: [ `0%`, `${context[index].animateWidth + "%"}` ] },
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