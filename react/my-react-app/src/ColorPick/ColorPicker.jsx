import {useState} from 'react'
import styles from './Color.module.css'
export function ColorPick(){
    const [colors, setColor] = useState(['#000000']);//colors is an array with all the values from each prev state
    const currentColor = colors[colors.length-1] ?? '#000000';//current color is either the last elemetn added to the state array or if empty than it is black
    const colorChange = (e) => {
        setColor(prevState => [...prevState, e.target.value]);
    }

    return(
        <>
        <h3>Choose a color:</h3>
        <input type="color" value={currentColor} onChange={colorChange}></input>
        <h3>You chose the color: {currentColor}</h3>
        <ul>
            {colors.map(color => 
                <li key={color}>{color}</li>
            )}
        </ul>

</>
    )
}