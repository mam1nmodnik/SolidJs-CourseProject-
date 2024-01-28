
import MobileNav from "~/components/Layouts/Header/MobileNav";
import FormBlock from "~/components/Layouts/Main/FormBlock/FormBlock";
import MarqueeBlocks from "~/components/Layouts/Main/MarqueeBlock/MarqueeBlock";
import Statistics from "~/components/Layouts/Main/Statistics";
import Volunteer from "~/components/Layouts/Main/VolunteerBlock/Volunteer";
import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
export default function Home() {

  const [update, setUpdate] = createSignal<boolean>(false);


    const visibleNavMenu = () => {
        setUpdate(!update());
    }

  return (
        <div class="content__home__children">                
              <div class={`blur ${update() ? "display-b": ''}`}></div>     
              <div class={`nav__mobile ${update() ? "display-b": ''}`}>
              
              {/* <div class="button__nav__mobile__2" onClick={visibleNavMenu}>
                  <div class="button__nav__mobile__line__2"></div>
                  <div class="button__nav__mobile__line__2"></div>
              </div> */}
                 <ul>
                    <li><a href="/">Главная</a></li>
                    <li><A href="/SquadNeeds">Отрядные нужды</A></li>
                    <li><a href="/rules">Правила безоасности</a></li>
                    <li><a href="/address">Адрес</a></li>
                    <li><a href="/contacts">Контакты</a></li>
                    <li><a href="/about">О нас</a></li>
                  </ul>
              </div>

              <div class={`button__nav__mobile ${update() ? "display-n": ''}` } onClick={visibleNavMenu}>
                  <div class="button__nav__mobile__line"></div>
                  <div class="button__nav__mobile__line"></div>
              </div>

              {/* <MobileNav update={update()}/> */}
              <Statistics/>    
              <Volunteer/>
              <MarqueeBlocks/>
              <FormBlock/>
        </div>
  );
}
