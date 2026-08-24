import {useState} from 'react'
import styles from './Count.module.css'

export function CountClicks(){
    const [clickCount, setClick] = useState(0);//initial click count of 0
    const addedClick = () => {
        setClick(clickCount + 1);
    }
    const removeClick = () =>{
        if(clickCount > 0){
        setClick(clickCount - 1);}
        else{
            console.log('Cant go below 0');
        }
    }
    const resetClicks = () =>{
        setClick(0);
    }
    return(
        <>
        <h3 className={styles.header}>The counter program: </h3>
        <p className={styles.count}>{clickCount}</p>
        <button className={styles.add} onClick={addedClick}>+</button>
        <button className={styles.remove} onClick={removeClick}>-</button>
        <button className={styles.reset} onClick={resetClicks}>reset</button>
        </>
    );
}