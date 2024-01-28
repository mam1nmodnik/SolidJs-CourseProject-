import { A } from "@solidjs/router";

type PropsType = {
    update: boolean;
}

export default function MobileNav({...props}: PropsType){

    return (
        <>
            <div class={`blur ${props.update ? "display-b": ''}`}></div>     
              <div class={`nav__mobile ${props.update ? "display-b": ''}`}>
                 <ul>
                    <li><a href="/">Главная</a></li>
                    <li><A href="/SquadNeeds">Отрядные нужды</A></li>
                    <li><a href="/rules">Правила безоасности</a></li>
                    <li><a href="/address">Адрес</a></li>
                    <li><a href="/contacts">Контакты</a></li>
                    <li><a href="/about">О нас</a></li>
                  </ul>
              </div>
        </>
    )
}