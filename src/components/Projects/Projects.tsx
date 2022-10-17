import React, {useContext} from 'react'
import {DirectionContext} from '../DirectionContext'
import { motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import useWindowDimensions from '../window';


function Projects() {
  const {direction, setDirection}= useContext(DirectionContext);
  const { height, width } = useWindowDimensions();
  // console.log(direction);

  const animation = {
      initial : {x:direction.ProjectsStartX, y:direction.ProjectsStartY, opacity: 0},
      animate: {x:0, y:0, opacity: 1},
      exit:{x:direction.ProjectsStartX, y:direction.ProjectsStartY, opacity: 0, transition:{duration: 0.5}},
      transition:{duration: 1.5}
  };
  // const animateItem = {
  //   initial : {opacity: 0} ,
  //     animate: {opacity: 1},
  //     exit:{opacity: 0},
  //     transition:{duration: 1.6}
  // };
  return (
    <motion.div 
      initial = {animation.initial}
      animate= {animation.animate}
      exit={animation.exit} 
      transition={animation.transition}
      className="bg-primary w-full h-full overflow-hidden text-white pointer-events-none" >
      <Link to="/" className="absolute inset-y-0 z-60 left-3 h-full flex items-center flex-row-reverse"
        onClick={() => {       
          setDirection({
          HomeStartX:direction.HomeStartX, HomeStartY:direction.HomeStartY, 
          ProjectsStartX:((width)), ProjectsStartY:0,
          AboutStartX:width/2, AboutStartY:(height)
          })}}
        >
          <motion.button 
            initial={{opacity: 0}}
            animate={{opacity: 0.75, transition:{duration: 1.6}}}
            whileHover={{scale: 1.3, x:6 ,opacity: 1}}
            transition={{ease:"easeInOut", duration: 0.15}}
            className=" bg-secondary p-3 h-1/3 opacity-60 pointer-events-auto"/>
        </Link>
        <motion.button 
          initial={{opacity: 0}}
          animate={{opacity: 0.75, transition:{duration: 1.6}}}
          whileHover={{scale: 1.3, x:60 ,y:-26 ,opacity: 1}}
          transition={{ease:"easeInOut", duration: 0.15}}
          className="absolute bottom-3 h-1/6 w-1/6 left-3 pointer-events-auto opacity-60">
          <Link to="/about"
            onClick={() => {
              setDirection({
              HomeStartX:(-width/2), HomeStartY:height*-2.8, 
              ProjectsStartX:(width/2), ProjectsStartY:height*-2.8,
              AboutStartX:direction.AboutStartX, AboutStartY:direction.AboutStartY
            })}}
            className=" h-full flex items-end">
            <div className=" h-full ">
              <div className=" bg-secondary p-3 h-full "/>
            </div>
            <div className="w-full">
              <div className={` bg-secondary p-3 w-full`}/>
            </div>
          </Link>
        </motion.button>
        Projects
  
      </motion.div>
  )
}

export default Projects