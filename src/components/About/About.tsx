import React, {useContext} from 'react';
import {DirectionContext} from '../DirectionContext'
import { motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import useWindowDimensions from '../window';


function About() {
  const {direction, setDirection} = useContext(DirectionContext);
  // console.log(direction);

  const animation = {
      initial : {x:direction.AboutStartX, y:direction.AboutStartY, opacity: 0},
      animate: {x:0, y:0, opacity: 1},
      exit:{x:direction.AboutStartX, y:direction.AboutStartY, opacity: 0, transition:{duration: 0.5}},
      transition:{duration: 1.3}
  };

  // const animateItem = {
  //   initial : {opacity: 0} ,
  //     animate: {opacity: 1},
  //     exit:{opacity: 0},
  //     transition:{duration: 1.6}
  // };
  const { height, width } = useWindowDimensions();
  return (
    
      <motion.div 
      initial = {animation.initial}
      animate= {animation.animate}
      exit={animation.exit} 
      transition={animation.transition}
      className="bg-primary w-full h-full overflow-hidden text-tertiary pointer-events-none" >
        <motion.button 
          initial={{opacity: 0}}
          animate={{opacity: 0.75, transition:{duration: 1.6}}}
          whileHover={{scale: 1.3, x:60 ,y:26 ,opacity: 1}}
          transition={{ease:"easeInOut", duration: 0.15}}
          className="absolute top-3 h-1/6 w-1/6 left-3 pointer-events-auto opacity-60">
          <Link to="/"
            onClick={() => {       
              setDirection({
              HomeStartX:direction.HomeStartX, HomeStartY:direction.HomeStartY, 
              ProjectsStartX:((width)), ProjectsStartY:0,
              AboutStartX:width/2, AboutStartY:(height)
            })}}
            className=" h-full w-full items-start flex">
            <div className=" h-full ">
              <div className=" bg-secondary p-3 mt-.5 h-full "/>
            </div>
            <div className="w-full">
              <div className={` bg-secondary p-3  w-full`}/>
            </div>
          </Link>
        </motion.button>
        <motion.button 
          initial={{opacity: 0}}
          animate={{opacity: 0.75, transition:{duration: 1.6}}}
          whileHover={{scale: 1.3, x:-60 ,y:26 ,opacity: 1}}
          transition={{ease:"easeInOut", duration: 0.15}}
          className="absolute top-3 h-1/6 w-1/6 right-3 pointer-events-auto opacity-60">
          <Link to="/projects"
            onClick={() => {
              setDirection({
              HomeStartX:((width*-1)), HomeStartY:0, 
              ProjectsStartX:direction.ProjectsStartX, ProjectsStartY:direction.ProjectsStartY,
              AboutStartX:((width*-1)/2), AboutStartY:(height)
            })}}
            className=" h-full flex flex-row-reverse">
            <div className=" h-full ">
              <div className=" bg-secondary mt-.5 p-3 h-full "/>
            </div>
            <div className="w-full">
              <div className={` bg-secondary p-3 w-full`}/>
            </div>
          </Link>
        </motion.button>
        <motion.div 
        
        className="flex w-full h-full "
        >
          <div className="w-1/2 h-full bg-main-image  bg-no-repeat bg-cover">

          </div>
          <div className="bg-tertiary w-1/2 ">
            <div>
              
            </div>
          </div>

        </motion.div>

      </motion.div>
  )
}

export default About