import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student/Student.jsx'

function App(){
  return(
    <>
    <Student name="Steve" age={20} isStudent={true}/>
        <Student name="Joe" age={20} isStudent={true}/>
    <Student name="Steve" age={20} isStudent={true}/>

    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)