import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import father from '../../assests/father.jpg'
import fathertitle from '../../assests/fathertitle.jpg'
import { CiPlay1 } from "react-icons/ci";
import { FaInfoCircle } from "react-icons/fa";
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


function Home() {
  return (
    <div className='home'>      
      <Navbar/>
      <div className="hero">
        <img src={father} alt="" className='banner-img' />
        <div className="caption">
          <img src={fathertitle} alt="" className='caption-img' />
          <p>Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.</p>
          <div className="btns">
            <button className='btn'><CiPlay1 className='btn-icon'/>Play</button>
            <button className='btn dark-btn'><FaInfoCircle className='btn-icon' />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/> 
      <TitleCards title={"Soon"} category={"upcoming"}/>
      <TitleCards title={"Top Pics for You"}category={"now_playing"}/>
      </div>
       <Footer/>
    </div>
  )
}

export default Home