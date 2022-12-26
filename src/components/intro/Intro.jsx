import React from 'react'
import "./intro.css"
import Image1 from "../../img/Image1.png";

const Intro = () => {
  return (
    <div className="i block">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">John Burton</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Photographer</div>
                        <div className="i-title-item">Writer</div>
                        <div className="i-title-item">Content Creator</div>
                    </div>
                </div>
                <p className="i-des">
                    I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
                </p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg">
                a
            </div>
            <img src={Image1} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro