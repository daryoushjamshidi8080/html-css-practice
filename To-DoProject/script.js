const inputBox = document.getElementById('input-bot');
const listContainer = document.getElementById('list-container');


// add task to list
function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData()
}

//  add task with Enter button
document.addEventListener('keydown', function(e){
    if (e.key==='Enter'){
        addTask()
    }
})


listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    saveData()
}, false)


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function ShowTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
ShowTask()