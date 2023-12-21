import '../assets/styles/Table.scss'
import photo1 from '../assets/images/photo1.png'
import photo2 from '../assets/images/photo2.png'
import photo3 from '../assets/images/photo3.png'

function Table() {
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
                        <p className='tableContainer__content__text__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, a temporibus perferendis reprehenderit, distinctio voluptate impedit dicta vitae repudiandae sit esse ullam at laboriosam earum, harum suscipit corrupti praesentium. Perferendis.</p>
                        <ul className='tableContainer__content__text__list'>
                            <li><p className='item1'>Universal</p></li>
                            <li><p className='item2'>France Télévision Publicité</p></li>
                            <li><p className='item3'>Microsoft Advertising</p></li>
                            <li><p className='item4'>Linkedin</p></li>
                            <li><p className='item5'>Stripe</p></li>
                        </ul>
                    </div>
                </section>
            </article>
        )
}

export default Table