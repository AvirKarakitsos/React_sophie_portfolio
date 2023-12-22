import '../assets/styles/Header.scss'
import { useContext } from 'react'
import {LanguageContext} from "../utils/context/LanguageContext"

function Header({content, setIsOpen}) {
    const {lang, toggleLanguage} = useContext(LanguageContext)

    return(
        <header className='header'>
            <nav className='navbar'>
                <ul className='list'>
                    <li><a className='link' href='http://localhost:5173/document/resume.pdf' target='_blank' rel="noreferrer">{content.header[0]}</a></li>
                    <li onClick={() => setIsOpen(true)}>Contact</li>
                </ul>
                <ul className='list lang'>
                    <li onClick={() => toggleLanguage("fr")} className={lang === "fr" ? "borderBlue" : ""}>FR</li>
                    <li onClick={() => toggleLanguage("en")} className={lang === "en" ? "borderBlue" : ""}>EN</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header