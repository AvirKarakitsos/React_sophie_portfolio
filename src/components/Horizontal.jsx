import {translate} from "../utils/common"
import Header from './Header'
import Card from './Card'
import Table from './Table'
import '../assets/styles/Horizontal.scss'
import { useContext, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { LanguageContext } from "../utils/context/LanguageContext"

function Horizontal() {
    const {lang} = useContext(LanguageContext)
    const data = translate(lang)
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef
    })

    const x = useTransform(scrollYProgress, [0,1], ["0%","-83%"])

    return(
        <section ref={targetRef} className="container"> 
            <div className="container__horizontal">
                <Header/>
                <motion.main style={{x}} className="container__horizontal__cards">
                    <Table/>
                    {data.map((card) => <Card key={card.id} content={card}/> )}
                </motion.main>
            </div>
        </section>
    )
}

export default Horizontal