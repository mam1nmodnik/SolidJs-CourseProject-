import { tents } from "~/helpers/help"

export default function Tents() {

    const content = tents.map(el =>
        <div class="conteiner-index">
            <div class="nazad">
                <a href='/SquadNeeds'>Назад</a>
            
            </div>
            <div class="tents">
                <h2>{el.title}</h2>
            </div>
            <div class="name-tents">
                <ul>
                    {el.ul.map(el => 
                        <>
                            <li>{el.li}</li>
                            <a href={el.link}>{el.link}</a>
                        </>
                    )}
                </ul>
            </div>
        </div>
    )

    return (
        <>
         {content}
        </>
        
    )
}