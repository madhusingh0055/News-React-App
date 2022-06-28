import React from "react";
import { useLocation , Link} from 'react-router-dom'
import Header from "./Header";
import './NewsInformation.css'




const CardInformation = () => {

    const location = useLocation()
    const { from } = location.state


    return(
        <div className="info">
        <div>
            <Header />
        </div>
        <div>
        <p className="news-title"> {from.title}</p>
         <p className="news-img"><img src={from.urlToImage} /></p>
         <p className="news-title"> {from.content}</p>
        </div>
        </div>
    )
}


export default CardInformation;