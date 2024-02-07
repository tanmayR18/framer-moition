"use client"
import {motion, MotionConfig} from "framer-motion"

const Gestures = () => {
  return (
    <div className=' flex flex-col items-center justify-center gap-10  h-screen'>
        <MotionConfig
        transition={{
            duration: 0.125,
            ease: "easeInOut"
        }}
        >
            <motion.button
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95, rotate:"2.5deg"}}
            className="example-button"
            >
                Click me 
            </motion.button>

            <motion.button
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95, rotate:"-2.5deg"}}
            style={{backgroundColor: "red"}}
            className="example-button">
                Click me 
            </motion.button>
        </MotionConfig>
    </div>
  )
}

export default Gestures

// MotionConfig will apply the specified animation to all the moition wrapped components