import dataFr from '../assets/data/french.json'
import dataEn from '../assets/data/english.json'

//Data language
export function translate(input) {
    let data = null
    if(input === "fr") data = dataFr
    else data = dataEn
    return data
 }