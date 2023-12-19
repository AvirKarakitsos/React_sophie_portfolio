import data from '../assets/data.json'
import Card from './Card'
import '../assets/styles/Horizontal.scss'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Horizontal() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef
    })

    const x = useTransform(scrollYProgress, [0,1], ["0%","-83%"])

    return(
        <section ref={targetRef} className="container"> 
            <div className="container__horizontal">
            <header>Header</header>
                <motion.div style={{x}} className="container__horizontal__cards">
                    {data.map((card) => <Card key={card.id} content={card}/> )}
                </motion.div>
            </div>
        </section>
    )
}

export default Horizontal