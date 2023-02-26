function loadUsers2 (){


    fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => displayposts(data))
    
}

loadUsers2();

function displayposts(post){

    const poostcontainer = document.getElementById('posts-container');
    for(const user of post){
        const postdiv = document.createElement('div');
        postdiv.classList.add('post');
        console.log(user)
        postdiv.innerHTML =`
        <h5>User-- ${user.id}</h5>
        <h4>Post : tittle ${user.title} </h4>
        <p>Post description ${user.body}</p>` ;
        poostcontainer.appendChild(postdiv);
    }
}