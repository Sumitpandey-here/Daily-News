import React from 'react'
import img from '../data/news.jpg'
// const Newstitle = ({title,description,src,url}) => {
const Newstitle = (props) => {
  return (
    
      <div class="card mb-3 d-inline-block my-3 mx-3 py-3 px-3" style={{maxWidth:"345px"}}>
  <img src={props.src?props.src:img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.description}</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>

    </div>
  )
}

export default Newstitle
