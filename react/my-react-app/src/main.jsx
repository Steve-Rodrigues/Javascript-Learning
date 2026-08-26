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
import {ToDos} from './ToDoApp/ToDo.jsx'
import './ToDoApp/styles.css'
function App(){
  return(
    <>
    <ToDos/>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)