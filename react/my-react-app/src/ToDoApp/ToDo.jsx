//todo app using react by just saying what the state should look like after each operation
import {useState} from 'react'
import style from './todo.module.css'

export function ToDos(){
    const [work, setWork] = useState([]);//going to keep an array of everything we need to do
    const [task, setTask] = useState("");//this will be the state of the inputted text
    //this is for updating the task array
    const submitWork = () => {
        if(task !== ""){
        setWork(prevWork => [...prevWork, task]);//updates the state based on the previous newest version of state, and gets the new task by grabbing the new task state
        setTask("");//puts the value back to placeholder by resetting the currenttask
        }
    }
    //this is for actually taking new tasks, it takes the new value typed into the input box
    const takeNewTask = (e) => {setTask(e.target.value);}//takes in the new task and updates the state
    //this is for deleting a work item, remake the list of items and only keep those whose index is not equal to the index passed in
    const deleteItem = (index) => {
        const updated = work.filter((_, ind) => ind!==index);
        setWork(updated);
    }
    const moveUp = (index) => {
        if(index >0){
            const newTasks = [...work];//need the array and then swap
            [newTasks[index], newTasks[index-1]] = [newTasks[index-1], newTasks[index]];
            setWork(newTasks);//then set the work equal to the updated array
        }
    }
    const moveDown = (index) => {
        if(index < work.length-1){
        const newitems = [...work];
        [newitems[index], newitems[index+1]] = [newitems[index+1],newitems[index]];
        setWork(newitems);
        }
    }

    return(
        <div className={style.container}>
            <h3>To-Do-List</h3>
            <div className={style.inputSection}>
            <input value={task} type="text" placeholder="Enter a task" className={style.inputText} onChange={takeNewTask}></input>
            <button className={style.btn} onClick={submitWork}>Add</button></div>
            <ul className="allWork">
                {work.map((todo,index) => 
                    <li className={style.items} key={index}>
                        <div className={style.btns}>
                        {todo}
                        <button className={style.delete} onClick={() => deleteItem(index)}>Delete</button>
                        <button className={style.up} onClick={() => moveUp(index)}>Up</button>
                        <button className={style.down} onClick={() => moveDown(index)}>Down</button>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )


}