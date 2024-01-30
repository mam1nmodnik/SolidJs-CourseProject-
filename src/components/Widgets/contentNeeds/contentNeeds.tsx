    interface Item  {
        li: string;
        link: string;
    }

    interface Container {
        title: string;
        ul: Item[];
    }

const ContentNeeds = (props:{props: Container[]}) => {

    const content = props.props.map(el => 

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

    return(
        <>
         {content}
        </>
       
    )
}

export default ContentNeeds;