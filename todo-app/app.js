//going to make a todo app and use fake http requests to a fake api to simulate if i was making these calls to some real backend
//but the real work is going to be done with localStorage so the data is going to be persistant throughout sessions unless we delete stuff

const submitBtn = document.querySelector('.add-task');
const inputTask = document.querySelector('input.task-input');
const listParent = document.querySelector('ul.tasks');//going to append each new task to this and delete from here

//need all of the localStorage info so the data is actually stored across sessions because of stored in the disk not ram
const items = JSON.parse(localStorage.getItem('todo-list') || '[]');//this will get the objects to store in the localStorage

//for adding
submitBtn.addEventListener('click', e =>{
    if(!inputTask.value){
        return;
    }
    else{
        let task = inputTask.value;
        //create the structure for each list item
        let li = document.createElement('li');
        li.innerHTML = `<div class="check-off"></div>${task}<div class="delete">x</div>`;
        listParent.append(li);
        
        items.push({
            title: task,
            done: false
        });
        localStorage.setItem('todo-list', JSON.stringify(items));
    }
});

//for marking complete
const check = document.querySelector('ul');
check.addEventListener('click', event =>{
    const checkClicked = event.target;
    if(!checkClicked.classList.contains('check-off')){
        return;
    }
    const li = checkClicked.closest('li');
    const del = li.querySelector('div.delete');
    if(!li.classList.contains('active')){
        checkClicked.style.backgroundColor = 'var(--green)';
        del.classList.toggle('active');
    }
    else{
        checkClicked.style.backgroundColor = 'white';
        del.classList.toggle('active');

    }
    li.classList.toggle('active');
});

check.addEventListener('click', e =>{
    const del = e.target.closest('div.delete');
    const li = e.target.closest('li');
    if(!e.target == del){return;}
    else{
        let cont = li.textContent;
        let indRem = 0;
        for(let i=0; i<items.length; i++){
            if(items[i]['title'] == cont){
                indRem = i;
            }
        }
        items.splice(indRem, 1);
        localStorage.setItem('todo-list', JSON.stringify(items));
        check.removeChild(li);
    }
});

//this just adds everything already in teh localStorage storage onto the screen on every refresh
window.addEventListener('load', e =>{
    for(let item of items){
        let li = document.createElement('li');
        li.innerHTML = `<div class="check-off"></div>${item['title']}<div class="delete">x</div>`;
        listParent.append(li);
    }
});