import React, {useContext} from 'react';
import {DirectionContext} from '../DirectionContext'
import { motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import useWindowDimensions from '../window';


function Home() {
  const {direction, setDirection}= useContext(DirectionContext);
  const {height, width} = useWindowDimensions();
  const animation = {
      initial : {x:direction.HomeStartX, y:direction.HomeStartY, opacity: 0},
      animate: {x:0, y:0, opacity: 1},
      exit:{x:direction.HomeStartX, y:direction.HomeStartY, opacity: 0, transition:{duration: 0.5}},
      transition:{duration: 1.5}
  };

  // const animateItem = {
  //   initial : {opacity: 0} ,
  //     animate: {opacity: 1},
  //     exit:{opacity: 0},
  //     transition:{duration: 1.6}
  // };
  // console.log(direction);
  
  return (
    <motion.div 
      initial = {animation.initial}
      animate= {animation.animate}
      exit={animation.exit} 
      transition={animation.transition}
      className="bg-primary
      w-full h-full overflow-hidden text-tertiary pointer-events-none" >
      <Link to="/projects" className="absolute inset-y-0 z-60 right-3 h-full flex items-center flex-row-reverse"
        onClick={() => {
          setDirection({
          HomeStartX:((width*-1)), HomeStartY:0, 
          ProjectsStartX:direction.ProjectsStartX, ProjectsStartY:direction.ProjectsStartY,
          AboutStartX:((width*-1)/2), AboutStartY:(height)
      })}}>
        <motion.button 
        initial={{opacity: 0}}
        animate={{opacity: 0.75, transition:{duration: 1.6}}}
        whileHover={{scale: 1.3, x:-6 ,opacity: 1}}
        transition={{ease:"easeInOut", duration: 0.15}}
        className=" bg-secondary p-3 h-1/3 opacity-60 pointer-events-auto"/>
      </Link>
      <motion.button 
        initial={{opacity: 0}}
        animate={{opacity: 0.75, transition:{duration: 1.6}}}
        whileHover={{scale: 1.3, x:-60 ,y:-26 ,opacity: 1}}
        transition={{ease:"easeInOut", duration: 0.15}}
        className="absolute bottom-3 h-1/6 w-1/6 right-3 pointer-events-auto opacity-60">
        <Link to="/about"
          onClick={() => {
            setDirection({
            HomeStartX:(-width/2), HomeStartY:height*-2.8, 
            ProjectsStartX:(width/2), ProjectsStartY:height*-2.8,
            AboutStartX:direction.AboutStartX, AboutStartY:direction.AboutStartY
          })}}
        className=" h-full flex items-end flex-row-reverse">
          <div className=" h-full ">
            <div className=" bg-secondary p-3 h-full"/>
          </div>
          <div className="w-full">
            <div className={` bg-secondary p-3 w-full`}/>
          </div>
        </Link>
      </motion.button>

      <motion.div 
      
      className="flex flex-col w-full h-5/6 items-center justify-center p-4">
        <div className="text-9xl text-center">
          Griffin Barnard
        </div>
        <div className="mt-12 uppercase text-center">
          Software Engineering Student at Abiline Christian University
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home