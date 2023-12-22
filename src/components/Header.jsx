import '../assets/styles/Header.scss'
import { useContext } from 'react'
import {LanguageContext} from "../utils/context/LanguageContext"

function Card() {
    const {toggleLanguage} = useContext(LanguageContext)

    return(
        <header className='header'>
            <nav className='navbar'>
                <ul className='list'>
                    <li><a className='link' href='http://localhost:5173/document/resume.pdf' target='_blank' rel="noreferrer">Resume</a></li>
                    <li>Contact</li>
                </ul>
                <ul className='list lang'>
                    <li onClick={() => toggleLanguage("fr")} className='french'>FR</li>
                    <li onClick={() => toggleLanguage("en")} className='english'>EN</li>
                </ul>
            </nav>
        </header>
    )
}

export default Card