function loadtodo (){


    fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(data => displayposts(data))
    
}

loadtodo();

function displayposts(post){

    const poostcontainer = document.getElementById('get-todo');
    for(const user of post){
        const postdiv = document.createElement('div');
        postdiv.classList.add('post');
        console.log(user)
        postdiv.innerHTML =`
        <h5>User-- ${user.id}</h5>
        <h4>Title ${user.title} </h4>
        <p>Is ${user.completed === true ? 'completed' : 'not completed' }</p>` ;
        poostcontainer.appendChild(postdiv);
    }
}