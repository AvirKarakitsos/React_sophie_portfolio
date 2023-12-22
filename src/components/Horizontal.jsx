import '../assets/styles/Horizontal.scss'
import Header from './Header'
import Card from './Card'
import Table from './Table'
import {translate} from "../utils/common"
import { useContext, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { LanguageContext } from "../utils/context/LanguageContext"
import Modal from './Modal'

function Horizontal() {
    const [isOpen,setIsOpen] = useState(false)

    const {lang} = useContext(LanguageContext)
    const data = translate(lang)

    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef
    })
    const x = useTransform(scrollYProgress, [0,1], ["0%","-83%"])

    return(
        <>
            <section ref={targetRef} className="container"> 
                <div className="container__horizontal">
                    <Header content={data[0]} setIsOpen={setIsOpen}/>
                    <motion.main style={{x}} className="container__horizontal__cards">
                        <Table content={data[0]}/>
                        {data.map((card) => {
                            if(card.id > 0) return <Card key={card.id} content={card}/> }
                        )}
                    </motion.main>
                </div>
            </section>
            <Modal content={data[0]} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}

export default Horizontal