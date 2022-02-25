import React from 'react'
import "./Loading.css"
// import loading from "../../images/loading.gif"

export default function Loading() {
  // window.onload
  setTimeout(() => {
    document.querySelector(".loading").style.display = "none"
  }, 1500);
  return (
    <div className="loading">Loading&#8230;</div>
  )
}