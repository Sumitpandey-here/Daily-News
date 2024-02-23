import React, { useEffect, useState } from 'react'
import Newstitle from './Newstitle';

const Newsboard = (props) => {

    const[articles,setarticles]=useState([]);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=9834b561d02c4640af58f2d5cad39f69`;

        fetch(url).then(response=>response.json()).then(data=>setarticles(data.articles));
    },[props.category])
  return (
    <div>
      <h2 className='text-center'> Latest <span className='badge bg-danger text-white'>News</span></h2>
      {
        articles.map((news,index)=>{
return <Newstitle key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })
      }
    </div>
  )
}

export default Newsboard
