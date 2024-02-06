import MyButton from '~/components/Widgets/UI/Button/Button'
import './style.css'

export default function Volunteer() {
    return (
        <div  class="conteiner-index volunteers" id="volunteers" >
            <div class="main-container-statistic2">
                <h2 class="_anim-items _anim-no-hide" >Что нужно сделать, чтобы стать добровольцем и помочь в поисках?</h2>
            </div>
            <div class="content">
                <div class="flex" >
                    <div>
                        <p class="text">
                            <span class="number">1. </span> 
                            <span class="bgText">Заполнить анкету</span>
                        </p>
                    </div>
                    <div>
                        <p class="text">
                            <span class="number">3.  </span>
                            <span class="bgText">Назначить встречу</span>поиска вместе<br/> с отрядом добровольцев
                        </p>
                    </div>
                </div>
                <div class="containerLine">
                    
                    <svg  class="line line1" xmlns="http://www.w3.org/2000/svg" width="303" height="129" viewBox="0 0 303 129" fill="none">
                        <path d="M1 4.05527C38.8333 -0.944734 91.4 -1.99968 147 28.0003C216.5 65.5003 191.5 101 302 127.5" stroke="url(#paint0_linear_220_3316)" stroke-width="2"/>
                        <defs>
                        <linearGradient id="paint0_linear_220_3316" x1="289.545" y1="112.368" x2="-19.1661" y2="18.8973" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FA762C"/>
                        <stop offset="1" stop-color="#DDFA2C" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>

                    <svg class="line line2" xmlns="http://www.w3.org/2000/svg" width="177" height="153" viewBox="0 0 177 153" fill="none">
                        <path d="M0.5 149.998C13.5 156.831 50.5838 138.026 76 85.0013C105 24.5 155.5 0.664739 176 0.998073" stroke="url(#paint0_linear_220_3317)" stroke-width="2"/>
                        <defs>
                        <linearGradient id="paint0_linear_220_3317" x1="168.159" y1="88.2571" x2="-32.2285" y2="39.6615" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FA762C"/>
                        <stop offset="1" stop-color="#DDFA2C" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>

                    <svg class="line line3" xmlns="http://www.w3.org/2000/svg" width="122" height="100" viewBox="0 0 122 100" fill="none">
                        <path d="M0.5 1.49968C18.1667 0.999679 56.9 10.5997 70.5 52.9997C84.1 95.3997 109.833 101 121 98.5" stroke="url(#paint0_linear_220_3318)" stroke-width="2"/>
                        <defs>
                        <linearGradient id="paint0_linear_220_3318" x1="115.616" y1="58.0819" x2="-21.0565" y2="22.9965" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FA762C"/>
                        <stop offset="1" stop-color="#DDFA2C" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>

                </div>
                <div class="flex">
                    <div>
                        <p class="text">
                            <span class="number">2. </span>
                            <span class="bgText">Дождаться звонка</span>  от<br/> главного по поискам
                        </p>
                    </div>
                    <div>
                        <p class="text">
                            <span class="number">4. </span>
                            <span class="bgText">Прийти на встречу</span> и <br/><span class="bgText">получить снаряжение</span>
                        </p>
                    </div>
                </div>

                <div class="containerLine">  

                    <svg class="line line4" xmlns="http://www.w3.org/2000/svg" width="357" height="84" viewBox="0 0 357 84" fill="none">
                        <path d="M355.5 1C331 53.5 235.6 41.1 152 31.5C68.4 21.9 16.5 61.5 1 82.5" stroke="url(#paint0_linear_220_3319)" stroke-width="2"/>
                        <defs>
                        <linearGradient id="paint0_linear_220_3319" x1="358.29" y1="47.0435" x2="113.294" y2="-178.238" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FA762C"/>
                        <stop offset="1" stop-color="#DDFA2C" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    
                </div>
                <div> 
                    <p class="text">
                        <span class="number">5. </span>
                        <span class="bgText">Пойти на поиски</span> пропавшего вместе с <br/> отрядом
                    </p>  
                </div>
            </div>    
            <div class="container-volunteer-form ">
                {/* <a href="/VolonteerForm">
                    <button>Стать добровольцем</button>
                </a> */}

                <MyButton 
                    castomClass='w-249px h-66px' 
                    title='Стать добровольцем' 
                    link='/VolonteerForm'
                />
            </div>
        </div>
    )
}