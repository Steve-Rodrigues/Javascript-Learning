//take in the array of objects in props and convert it to a list with <li> dont forget to give each list item a unique key
import styles from './todo.module.css'
function ToDo(props){
    const items = props.items;
    const listItems = items.map(obj => 
    <li key={obj.id}>
        {obj.text} {obj.completed ? '✅' : '❌'}
    </li>);
    const notComplete = items.filter(obj => !(obj.completed));
    const incompleteDisplay = notComplete.map(obj => 
        <li key={obj.id}>
            {obj.text}
        </li>
    );
    return(
        <>
        <h3 className = {styles.header}>All list items to complete: </h3>
        <ol className = {styles.todos}>
            {listItems}
        </ol>
        <h3 className={styles.leftOver}>Left to complete:</h3>
        <ol className={styles.incomplete}>
            {incompleteDisplay}
        </ol>
        </>
    );
}
export default ToDo