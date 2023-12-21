import '../assets/styles/Card.scss'

function Card({content}) {

    return(
        <article className="cardContainer">
            <section className="cardContainer__left">
                <img src={content.logo} alt="logo microsoft" className={content.title}/>
                <div className="cardContainer__left__content">
                    <p>{content.role}</p>
                </div>
            </section>
            <section className="cardContainer__right">
                <ul className="cardContainer__right__list">
                    {content.content.map((element,index) => <li key={index}>{element}</li>)}
                </ul>
            </section>
        </article>
    )
}

export default Card