import '../assets/styles/Header.scss'

function Card() {

    return(
        <header className='header'>
            <nav className='navbar'>
                <ul className='list'>
                    <li><a className='link' href='http://localhost:5173/document/resume.pdf' target='_blank' rel="noreferrer">Resume</a></li>
                    <li>Contact</li>
                </ul>
                <ul className='list lang'>
                    <li className='french'>FR</li>
                    <li className='english'>EN</li>
                </ul>
            </nav>
        </header>
    )
}

export default Card