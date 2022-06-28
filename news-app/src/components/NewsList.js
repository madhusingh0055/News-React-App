import React, { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
import axiox from 'axios'
import axios from "axios";
import NewsCard from "./NewsCard";
import { useSlotProps } from "@mui/base";
import Header from "./Header";

const NewsList = () => 
{
    const [newsData, setNewsData]  = useState([]);

    const[offset,setOffset] = useState(1)
    const[pages, setPages] = useState();
    
    const perpage = 4;
 
    
    const url = "https://newsapi.org/v2/everything?q=apple&from=2022-06-26&to=2022-06-26&sortBy=popularity&apiKey=f8b2a7f2ef864802ab2cb5348ea82b47"

var news = []
    const fetchData = () => {
       axios.get(url).then((response) => {
       // news.push(response.data.articles);
        setNewsData(response.data.articles);
        setPages(Math.ceil((response.data.articles.length)/perpage))
       
       })
    }


    
    useEffect(() => {
        fetchData();
      },[]);
    
    
  const handleClick = (e) => {
    var value = e.target.textContent;
    setOffset((value-1)*(perpage))

 }  

 console.log(pages);


    return(
        <div>

            <Header />

            <br />

            {
                newsData.slice(offset,offset+perpage).map((items) => 
                   <div>
                      {/* <p>{items.author}</p>
                      <p>{items.title}</p>
                      <p>{items.publishedAt}</p>
                      <p><img src={items.urlToImage} /></p> */}
                   
              
                    <NewsCard author = {items.author} title = {items.title} publishedAt = {items.publishedAt}  urlToImage = {items.urlToImage} 
                    description = {items.description}
                    url = {items.url} content = {items.content}
                    />
                    </div>
                )
            }

            <div>
            <Pagination count={pages} hidePrevButton hideNextButton onClick={handleClick}/>
            </div>
        </div>
    )
}

export default NewsList;