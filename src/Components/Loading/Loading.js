import React from 'react'
import "./Loading.css"
import loading from "../../images/loading.gif"

export default function Loading() {
  window.onload = ()=>{
    document.querySelector(".loading").style.display = "";
  }
  return (
    <div className='loading'>
      <img src={loading} alt="loading"></img>
    </div>
  )
}
