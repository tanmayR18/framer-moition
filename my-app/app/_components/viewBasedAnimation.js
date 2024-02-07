"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const ViewBasedAnimation = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})


    useEffect(() => {
        console.log("IN the view", isInView)
    },[isInView])
  return (
    <>
        <div className=" h-[150vh]">
        </div>
        <motion.div
        className=" h-[100vh] bg-black"
        initial={{ opacity: 0, backgroundColor:"red" }}
        whileInView={{opacity:1, backgroundColor:"blue"}}
        transition={{duration:2}}
        >
        </motion.div>

        <motion.div
        ref={ref}
        className={`h-[100vh]  ${isInView ? "bg-blue-600" : "bg-red-800"} transition-all duration-1000`}
        />
    </>
  )
}

export default ViewBasedAnimation