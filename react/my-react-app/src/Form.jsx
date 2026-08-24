import {useState} from 'react'

export function UpdateInput(){
    const [value, setValue]  = useState('');
    const watchChange = (event) =>{
        setValue(event.target.value);
    }

    return(
        <>
        <h3>Watch as we type: </h3>
        <input onChange={watchChange}></input>
        <p>{value}</p>
        </>
    )
}