// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { JSX, JSXElement, Suspense } from "solid-js";
import "./app.css";
import HeaderBlock from "./components/Layouts/Header/HeaderBlock";
import Footer from "./components/Layouts/Footer/Footer";
import Nav from "./components/Layouts/Header/Nav";
import { createSignal } from "solid-js";
import { navMenu } from './helpers/help'
import Loading from "./components/Widgets/Loading/Loading";

export default function App() {


  const [update, setUpdate] = createSignal<boolean>(false);
 
  const visibleNavMenu = () => {
      setUpdate(!update());
      const body = document.getElementsByTagName('body');
      body[0].style.overflowY  = update()? 'hidden' : 'auto';
     
  }

  const content = navMenu.map(el => 
    <li><a href={el.link} onClick={visibleNavMenu}>{el.title}</a></li>
  )

  const block: JSXElement = 
    <>
      <div class={`blur ${ update() ? "display-b": 'display-n'}`}></div>     
      <div class={`nav__mobile ${ update() ? "display-b": 'display-n'}`}>                  
        <div class="button__nav__mobile__2" onClick={visibleNavMenu}>
            <div class="button__nav__mobile__line__2"></div>
            <div class="button__nav__mobile__line__2"></div>
        </div>
          <ul>
              {content}
            </ul>
      </div>
        <div class={`button__nav__mobile ${ update() ? "display-n": ""}` } onClick={visibleNavMenu}>
          <div class="button__nav__mobile__flex">
            <div class="button__nav__mobile__line"></div>
            <div class="button__nav__mobile__line"></div>
          </div>
      </div>
    </>;

  return(
    <Router
      root={(props) => (
        <div>
          {
            props.location?.pathname === '/' 
              ? 
              <>
                <HeaderBlock/> 
                {block}
              </>
              :
              <>
                <Nav addClass={true}/> 
                {block}
              </> 
          }
          <Suspense  fallback={Loading()}>
            {props.children}
          </Suspense>
          <Footer/>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
