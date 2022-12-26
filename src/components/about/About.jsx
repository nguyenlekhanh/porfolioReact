import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className="a block">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img
                    src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="a-img"
                /> 
            </div>
        </div>
        <div className="a-right">
           <h1 className="a-title">About Me</h1> 
           <p className="a-sub">
            It is a long establised fact that a reader will be skdfjls fskjf sldfj sldf sdf
           </p>
           <p className="a-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quisquam possimus soluta quod illum optio eos cum quia illo a! Vero officia obcaecati quod ab in repudiandae nesciunt itaque consequatur.
           </p>
            <div className="a-award">31'
                <img src="" alt="" className="a-award-img"/>
            </div>
        </div>
    </div>
  )
}

export default About