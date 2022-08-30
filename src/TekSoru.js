import React from "react";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const TekSoru =({title, info}) =>{
    const [bilgiGoster, bilgiGuncelle] = React.useState(false);
    return(
        <article className="soru">
            <header>
            <h4>{title}</h4>
            <button className="btn" onClick={() => bilgiGuncelle(!bilgiGoster)}>
                {bilgiGoster ? <AiOutlineMinus/> : <AiOutlinePlus/>}

            </button>


            </header>
            {bilgiGoster && <p>{info}</p>}



        </article>
    );
    

}

export default TekSoru;