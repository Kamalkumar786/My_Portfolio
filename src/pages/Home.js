import React from 'react'
import { motion } from 'framer-motion';
function Home() {
  return (
    <div className='home'>
        <motion.div div className='name' initial={{x:-300,scale:0.5}}animate={{x:0,scale:1}} transition={{duration:1}}> <i>Kamal<font> Nayan</font> Yagik</i></motion.div>
    <motion.div className="desc" initial={{x:300,scale:0.5}}animate={{x:0,scale:1}} transition={{duration:1}}>
        <font><b>Full Stack Developer</b></font>
        </motion.div>
        </div>
  )
}

export default Home;