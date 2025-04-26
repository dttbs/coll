import React from 'react'
import img from "../../icon/asemaIcon1.svg"
import img2 from "../../icon/asemaIcon2.svg"
import img3 from "../../icon/asemaIcon3.svg"

export const Section = () => {
  return (

  <div>
<div className='header'>
    <h2>Почему выбирают <br/> наших животных</h2>
   </div>

      <div className='cards'>

        <div className='card'>
          <div className='icon'> 
            <img src = {img3} />
            <div className='text'>
            <h3> <strong>Их много </strong></h3>
            <p>Огромный выбор животных, <br/> птиц и питомцев</p>
            </div>

          </div>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src = {img2} />
            
            <div className='text' >
              <h3>Они здоровы</h3>
            <p>Мы заботимся о каждом <br/>питомце, который с нами</p>
            </div>
            </div>
          </div>
       
        
        <div className='card'>
            <div className='icon'>
              <img src = {img} />
            <div className='text'>
            <h3>Их любят</h3>
            <p>Мы окружаем любовью и <br/> вниманием наших друзей</p>
            </div>
            </div>
          </div>

      </div>        


  </div>  
  ); }
