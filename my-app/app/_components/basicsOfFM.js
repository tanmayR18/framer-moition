"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const BasicsOfFM = () => {
    const [isVisible, setIsVisible] = useState(true)
  return (
    <div className=' flex flex-col items-center justify-center gap-10  h-screen'>
        <motion.button 
        layout
        onClick={ () => setIsVisible(prev=>!prev)}
        className="example-button">
            Click me
        </motion.button>
        <AnimatePresence mode="popLayout">
            {
                isVisible && 
                <motion.div
                initial={{ 
                    rotate: "0deg",
                    scale:0,
                    y:0
                 }}
                animate={{
                    rotate: "180deg" ,
                    scale:1,
                    y:[0, 150, -150, -150, 0]
                }}
                exit={{
                    rotate: "0deg",
                    scale:0,
                    y:0,
                }}
                transition={{
                    duration: 1,
                    // type: "spring"
                    ease: "backInOut",
                    times: [0, 0.25, 0.5, 0.85, 1]
                }}
                className=' w-[150px] h-[150px] bg-black'>

                </motion.div>
            }
        </AnimatePresence>
    </div>
  )
} 

export default BasicsOfFM


// type: "spring" => TO bring the spring effect which is by default but has shutdown
// due to duration 

// ease: "backInOut" bring the spinginess and other curve to the compoennts and has other effects

// AnimatePresence is used whenever you want to use exit prop for showing animation for the unmounting

// layout prop in the button help to provide a smooth effect like a slide whenever the position is changed
// adding mode="popLayout" in the AnimatePresence will enable the other html components to take the action or position 
// during the animated components is animating , by default other components wait untlu the animation