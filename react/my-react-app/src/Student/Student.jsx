//Student component is going to take in a prop which is a read only property strictly shared from parent to child
import style from './Student.module.css'
function Student({name, age,isStudent}){
    return(
        <div className={style.student}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? 'Yes': 'No'}</p>
        </div>
    )
}
export default Student