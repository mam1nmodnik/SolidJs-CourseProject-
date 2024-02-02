import { navMenu } from "~/helpers/help";

type TypeClass = {
    addClass: boolean;
}
export default function Nav({...props}: TypeClass){

    const content = navMenu.map(el => 
        <li><a href={el.link}>{el.title}</a></li>
    )

    return (
            <div class={props.addClass ? `header`: ''}>
                <div class="conteiner-header">
                    <div class="conteiner-logo">
                        <a href="/"><p><span style="color: #FFFFFF;">Спасатели </span><span class="color-logo">Т</span><span class="color-logo">С</span><span class="color-logo">П</span><span class="color-logo">К</span></p></a>
                    </div>
                    <div class="conteiner-nav">
                        <ul>
                            {content}
                            
                        </ul>
                    </div>
                    <div class="conteiner-button">
                        <button id="conteiner-button"><a href="#input-area">Найти человека</a></button>
                    </div>                       
                </div>   
            </div>
    )
}