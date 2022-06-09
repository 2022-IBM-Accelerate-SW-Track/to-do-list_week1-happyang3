import React, { Component } from 'react';
import "./About.css";
import my_selfie from "../assets/my_selfie.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              src={my_selfie}
              alt="profile pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kathy Yang</div>
            <div className="brief_description">
              Hello! I'm a rising junior at Princeton studying Computer Science,
              Technology & Society, and American Studies. I'm passionate
              about leveraging technical and sociological knowledge to
              build harmonious, ethical, and accessible systems that facilitate
              public wellbeing. This summer, in addition to participating
              in the Software Development track of IBM Accelerate, I am 
              interning within the Solution Design Group at DataArt, an 
              IT company that specializes in building custom software for 
              clients. 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

