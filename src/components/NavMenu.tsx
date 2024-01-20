import { A } from "@solidjs/router";


export default function Nav(){
    return(
            <div class="img-background">
                <div class="conteiner-index">
                    <header>
                        <div class="header">
                            <div class="conteiner-header">
                                <div class="conteiner-logo">
                                    <a href="index.php"><p><span style="color: #FFFFFF;">Спасатели </span><span class="color-logo">Т</span><span class="color-logo">С</span><span class="color-logo">П</span><span class="color-logo">К</span></p></a>
                                </div>
                                <div class="conteiner-nav">
                                    <ul>
                                        <li><a href="/">Главная</a></li>
                                        <li><A href="/SquadNeeds">Отрядные нужды</A></li>
                                        <li><a href="#">Правила безоасности</a></li>
                                        <li><a href="#">Адрес</a></li>
                                        <li><a href="#">Контакты</a></li>
                                        <li><a href="#">О нас</a></li>
                                    </ul>
                                 </div>
                                <div class="conteiner-button">
                                    <button id="conteiner-button"><a href="#input-area">Найти человека</a></button>
                                </div>
                                
                            </div>   
                        </div>
                    </header>
                    <div class="main-designation-container">
                        <div>
                            <div>
                                <p class="motto _anim-items _anim-no-hide">Один за всех <br/> и все за одного</p>
                            </div>
                            <div>
                                <h3 class="_anim-items _anim-no-hide">Поисково-спасательный отряд «Спасатели ТСПК»  ищет тех, кто потерялся</h3>
                            </div>
                            <div class="container-volunteer">
                                <button><a href="#volunteers">Стать добровольцем</a></button>
                            </div>
                        </div>
                        <div class="social-media-container">
                            <p class="social-media">Подписывайтесь в соцсетях</p>
                            <div class="social-media-flex">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}