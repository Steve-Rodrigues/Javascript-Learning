import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student/Student.jsx'
import WelcomeGreet from './Welcome/Welcome.jsx'
import ToDo from './todo/ToDo.jsx'
import {CountClicks} from './countClicks/Count.jsx'
import { UpdateInput } from './Form.jsx'
import {ColorPick} from './ColorPick/ColorPicker.jsx'
function App(){
  return(
    <>
    <ColorPick/>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)