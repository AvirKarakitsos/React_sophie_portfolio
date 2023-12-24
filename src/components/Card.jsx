import '../assets/styles/Card.scss'
import { URL_PROD } from '../utils/constants'

function Card({content}) {

    return(
        <article className="cardContainer">
            <section className="cardContainer__left">
                <img src={URL_PROD+content.logo} alt="logo microsoft" className={content.title}/>
                <div className="cardContainer__left__content">
                    <p><span className='date'>{content.date}:</span>&nbsp;{content.role}</p>
                </div>
            </section>
            <section className="cardContainer__right">
                <ul className="list">
                    {content.content.map((element,index) => <li key={index}>{element}</li>)}
                </ul>
            </section>
            {content.title === "universal" &&
                <img src="https://cdn.webshopapp.com/shops/2090/files/320158256/image.jpg" alt="minions" className='minions'/>
            }
        </article>
    )
}

export default Card