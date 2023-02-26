function loadUsers2 (){


    fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => display(data))
    
}

function display(data){

    const ul = document.getElementById('user-list');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}