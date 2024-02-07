"use client"

import {motion, useAnimationControls } from "framer-motion"

const AnimationControl = () => {

    const controls = useAnimationControls();

    const handleClick = () => {
        controls.start("flip")
    }
  return (
    <div className="  flex flex-col items-center justify-center gap-10  h-screen">
        <button
        onClick={handleClick}
        className="example-button"
        >   
            Flip It!
        </button>

        <motion.div
        className=" w-52 h-52 bg-black"
        variants={{
            initial:{
                rotate: "0deg",
            },
            flip:{
                rotate: "360deg"
            },
        }}
        initial= "inital"
        animate={controls}
        transition={{
            duration:1
        }}
        >
            Flip it
        </motion.div>
    </div>
  )
}

export default AnimationControl


//useAnimationControls is used when you want to trigger the animation of the button by clicking or performing any event on other elements