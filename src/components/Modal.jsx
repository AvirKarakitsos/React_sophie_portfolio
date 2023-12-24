import "../assets/styles/Modal.scss"
import gmail from "../assets//images/gmail.png"
import linkedin from "../assets//images/linkedin.png"
import { useRef } from "react"

function Modal({content, isOpen, setIsOpen}) {
    const refModal = useRef(null)

    if(isOpen) {
        refModal.current.showModal()
        refModal.current.addEventListener("mousedown", () => {
            refModal.current.close()
            setIsOpen(false)
        })
        refModal.current.children[0].addEventListener("mousedown", (event) => event.stopPropagation())
    }
    
    return (
        <dialog ref={refModal} className="modal">
            <div className="modal__container">
                <p className="contact">{content.modal}</p>
                <ul className="list">
                    <li><img src={linkedin} alt="gmail"/><a href="https://ie.linkedin.com/in/sophiecotsoyannis">ie.linkedin.com/in/sophiecotsoyannis</a></li>
                    <li><img src={gmail} alt="linkedin"/><a href="#">sopie.cotsoyannis@gmail.com</a></li>
                </ul>
            </div>
        </dialog>
    )
}

export default Modal