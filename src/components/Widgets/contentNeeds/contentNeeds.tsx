    interface Item  {
        li: string;
        link: string;
    }

    interface Container {
        title: string;
        ul: Item[];
    }

const ContentNeeds = ( props: { props: Container[] } ) => {

    const content = props.props.map(el => 
        <div class="content__needs">
            <a href='/SquadNeeds'>Назад</a>
            <h2>{el.title}</h2>
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