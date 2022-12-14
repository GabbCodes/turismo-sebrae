import React from 'react'
import {useState, useEffect, useRef} from 'react'
import './Carrossel.css'
import { motion } from 'framer-motion'

import image1 from '../../assets/img/image1.jpg'
import image2 from '../../assets/img/image2.jpg'
import image3 from '../../assets/img/image3.jpg'
import image4 from '../../assets/img/image4.jpg'
import image5 from '../../assets/img/image5.jpg'

const images = [image1, image2, image3, image4, image5, image1, image2, image3, image4, image5, image1, image2, image3, image4, image5, image1, image2, image3, image4, image5, image1, image2, image3, image4, image5, image1, image2, image3, image4, image5, image1, image2, image3, image4, image5, image1, image2, image3, image4, image5 ]

function Carrossel() {

  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect (() => {

    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)

  }, [] )


  return (
    <div className='maincarrossel'>


      <h1 className='rotas'>Rotas</h1>
      <h1 className='rotas2'>Rotas</h1>
      
      <motion.div className='carousel' whileTap={{cursor: "grabbing"}}>
      <motion.div className='inner'
      drag="x"
      dragConstraints={{ right: 0, left: -width}}
      initial={{ x: 100}}
      animate={{ x: 0}}
      transition={{ duration: 0.8 }}

      >

      {images.map(image => (
        <motion.div className="item" key={image}>
          <img src={image} alt="texto alt"/>
        </motion.div>

      ))}

      </motion.div>
      </motion.div>
    </div>
    
  );
}

export default Carrossel;