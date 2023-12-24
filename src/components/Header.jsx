import '../assets/styles/Header.scss'
import { useContext, useRef } from 'react'
import {LanguageContext} from "../utils/context/LanguageContext"
import { URL_PROD } from '../utils/constants'

function Header({content, setIsOpen}) {
    const {lang, toggleLanguage} = useContext(LanguageContext)
    const headerRef = useRef(null)
    const iconeRef = useRef(null)

    function toggleNav() {
        headerRef.current.classList.toggle("move")
        iconeRef.current.classList.toggle("rotate")
    }

    return(
        <header ref={headerRef} className='header'>
            <nav className='navbar'>
                <ul className='list'>
                    <li><a className='link' href={URL_PROD+'document/resume.pdf'} target='_blank' rel="noreferrer">{content.header[0]}</a></li>
                    <li onClick={() => setIsOpen(true)}>Contact</li>
                </ul>
                <ul className='list lang'>
                    <li onClick={() => toggleLanguage("fr")} className={lang === "fr" ? "borderBlue" : ""}>FR</li>
                    <li onClick={() => toggleLanguage("en")} className={lang === "en" ? "borderBlue" : ""}>EN</li>
                </ul>
            </nav>
            <div className="toggleNav">
                <i ref={iconeRef} onClick={() => toggleNav()} className="fa-solid fa-angles-up"></i>
            </div>
        </header>
    )
}

export default Header