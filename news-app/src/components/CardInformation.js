import React from "react";
import { useLocation , Link} from 'react-router-dom'




const CardInformation = () => {

    const location = useLocation()
    const { from } = location.state


    return(
        <>
         <p> {from.title}</p>
         <p><img src={from.urlToImage} /></p>
         <p> {from.content}</p>
        </>
    )
}


export default CardInformation;