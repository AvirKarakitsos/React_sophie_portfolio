import '../assets/styles/Card.scss'
import photo1 from '../assets/images/photo1.png'
import photo2 from '../assets/images/photo2.png'
import photo3 from '../assets/images/photo3.png'

function Card({content}) {
    if(content.title === "table") {
        return (
            <article className="tableContainer">
                <div className="tableContainer__titles">
                    <h1>Sophie Cotsoyannis</h1>
                    <h2>Account Manager</h2>
                </div>
                <section className="tableContainer__content">
                    <div className="tableContainer__content__images">
                        <img src={photo1} alt="photo 1" className="photo1" />
                        <img src={photo2} alt="photo 2" className="photo2" />
                        <img src={photo3} alt="photo 3" className="photo3" />
                    </div>
                    <div className="tableContainer__content__text">
                        <p className='tableContainer__content__text__title'>Liste de mes experiences professionnelles</p>
                        <ul className='tableContainer__content__text__list'>
                            <li><p className='item1'>Universal</p></li>
                            <li><p className='item2'>France Télévision Publicité</p></li>
                            <li><p className='item3'>Microsoft</p></li>
                            <li><p className='item4'>Linkedin</p></li>
                            <li><p className='item5'>Stripe</p></li>
                        </ul>
                    </div>
                </section>
            </article>
        )
    } else {
        return(
            <article className="cardContainer">
                <h2>{content.title}</h2>
            </article>
        )
    }
}

export default Card