import { A } from "@solidjs/router";

type TypeClass = {
    addClass: boolean;
}


export default function Nav({...props}: TypeClass){
    return (
            <div class={props.addClass ? `header`: ''}>
                <div class="conteiner-header">
                    <div class="conteiner-logo">
                        <a href="index.php"><p><span style="color: #FFFFFF;">Спасатели </span><span class="color-logo">Т</span><span class="color-logo">С</span><span class="color-logo">П</span><span class="color-logo">К</span></p></a>
                    </div>
                    <div class="conteiner-nav">
                        <ul>
                            <li><a href="/">Главная</a></li>
                            <li><A href="/SquadNeeds">Отрядные нужды</A></li>
                            <li><a href="/rules">Правила безоасности</a></li>
                            <li><a href="/address">Адрес</a></li>
                            <li><a href="/contacts">Контакты</a></li>
                            <li><a href="/about">О нас</a></li>
                        </ul>
                        </div>
                    <div class="conteiner-button">
                        <button id="conteiner-button"><a href="#input-area">Найти человека</a></button>
                    </div>                                
                </div>   
            </div>
    )
}