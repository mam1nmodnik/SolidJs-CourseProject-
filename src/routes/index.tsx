
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
    
    const blockOrNone = update() ? "display-b": 'display-n'
    const noneOrNot = update() ? "display-n": "";
  return (
        <div class="content__home__children">                
              <div class={`blur ${blockOrNone}`}></div>     
              <div class={`nav__mobile ${blockOrNone}`}>
              
                <div class="button__nav__mobile__2" onClick={visibleNavMenu}>
                    <div class="button__nav__mobile__line__2"></div>
                    <div class="button__nav__mobile__line__2"></div>
                </div>
                  <ul>
                      <li ><a href="/" onClick={visibleNavMenu}>Главная</a></li>
                      <li><A href="/SquadNeeds" onClick={visibleNavMenu}>Отрядные нужды</A></li>
                      <li><a href="/rules" onClick={visibleNavMenu}>Правила безоасности</a></li>
                      <li><a href="/address" onClick={visibleNavMenu}>Адрес</a></li>
                      <li><a href="/contacts" onClick={visibleNavMenu}>Контакты</a></li>
                      <li><a href="/about" onClick={visibleNavMenu}>О нас</a></li>
                    </ul>
              </div>

                <div class={`button__nav__mobile  ${noneOrNot}` } onClick={visibleNavMenu}>
                  <div class="button__nav__mobile__flex">
                    <div class="button__nav__mobile__line"></div>
                    <div class="button__nav__mobile__line"></div>
                  </div>
                </div>
              {/* <MobileNav update={update()}/> */}
              <Statistics/>    
              <Volunteer/>
              <MarqueeBlocks/>
              <FormBlock/>
        </div>
  );
}
