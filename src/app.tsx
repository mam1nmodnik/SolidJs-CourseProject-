// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import "./app.css";
import HeaderBlock from "./components/Layouts/Header/HeaderBlock";
import Footer from "./components/Layouts/Footer/Footer";
import Nav from "./components/Layouts/Header/Nav";
import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

export default function App() {


  const [update, setUpdate] = createSignal<boolean>(false);

  const visibleNavMenu = () => {
      setUpdate(!update());

  }
  
  const blockOrNone = update() ? "display-b": 'display-n'
  const noneOrNot = update() ? "display-n": "";


  return (
    <Router
      root={(props) => (
        <div class="content__home">
          {
            props.location?.pathname === '/' 
              ? <HeaderBlock/> 
              :
                <>
                  <Nav addClass={true}/> 
                  <div class={`blur ${blockOrNone}`}></div>     
                  <div class={`nav__mobile ${blockOrNone}`}>
                  
                    <div class="button__nav__mobile__2" onClick={visibleNavMenu}>
                        <div class="button__nav__mobile__line__2"></div>
                        <div class="button__nav__mobile__line__2"></div>
                    </div>
                      <ul>
                          <li><a href="/" onClick={visibleNavMenu}>Главная</a></li>
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
                </>
               
          }
          <Suspense>{props.children}</Suspense>
          <Footer/>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
