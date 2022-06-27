import React, { useEffect, useState } from "react";
import axiox from 'axios'
import axios from "axios";
import NewsCard from "./NewsCard";

const NewsList = () => 
{
    const [newsData, setNewsData]  = useState([]);
    const url = "https://newsapi.org/v2/everything?q=apple&from=2022-06-26&to=2022-06-26&sortBy=popularity&apiKey=f8b2a7f2ef864802ab2cb5348ea82b47"

var news = []
    const fetchData = () => {
       axios.get(url).then((response) => {
       // news.push(response.data.articles);
        setNewsData(response.data.articles);
        
       })
    }

    useEffect(() => {
        fetchData();
      },[]);
    
      console.log(newsData);

    return(
        <div>
            {
                newsData.map((items) => 
                   <div>
                      {/* <p>{items.author}</p>
                      <p>{items.title}</p>
                      <p>{items.publishedAt}</p>
                      <p><img src={items.urlToImage} /></p> */}

                    <NewsCard author = {items.author} title = {items.title} publishedAt = {items.publishedAt}  urlToImage = {items.urlToImage} 
                    description = {items.description}/>
                    </div>
                )
            }
        </div>
    )
}

export default NewsList;