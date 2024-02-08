import { JSX } from "solid-js";
import { createSignal } from "solid-js";
import { navMenu } from "~/helpers/help";



export default function MobileNav(): JSX.Element{

    const [update, setUpdate] = createSignal<boolean>(false);
 
    const visibleNavMenu = () => {
        setUpdate(!update());
        const body = document.getElementsByTagName('body');
        body[0].style.overflowY  = update()? 'hidden' : 'auto';
       
    }
  
    const content = navMenu.map(el => 
      <li><a href={el.link} onClick={visibleNavMenu}>{el.title}</a></li>
    )
   
    return (
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
        </>
    )
}