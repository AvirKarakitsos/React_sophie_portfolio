import { createContext, useState } from "react"

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(localStorage.getItem("lang") ?? "fr")

    const toggleLanguage = (input) => {
        setLang(input)
        localStorage.setItem("lang", input)
    }
 
    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}