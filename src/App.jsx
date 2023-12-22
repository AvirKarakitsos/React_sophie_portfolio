import './App.css'
import Horizontal from './components/Horizontal'
import { LanguageProvider } from './utils/context/LanguageContext'

function App() {

  return (
    <LanguageProvider>
        <Horizontal/>
    </LanguageProvider>
  )
}

export default App
