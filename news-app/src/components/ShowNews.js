import React from "react";
import Header from "./Header";
import { useLocation } from 'react-router-dom'
import './ShowNews.css'

const ShowNews = (props)  => {

    const location = useLocation()
    const { from } = location.state


    return(
        
        <>
         <Header />
         <iframe src={from.url} width="100%" className="shownews">
         </iframe>
        </>
    )
}


export default ShowNews;