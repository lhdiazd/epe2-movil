document.addEventListener('DOMContentLoaded', function() {    
    fetchData();
});

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error');
            }
            return response.json();
        })
        .then(posts => {
            console.log('Posts received:', posts);
            displayPosts(posts);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            alert('Error al obtener datos del servicio web.');
        });
}

function displayPosts(posts) {
    let postList = document.getElementById('postList');
    posts.forEach(post => {
        let li = document.createElement('li');
        li.textContent = `Id usuario: ${post.userId} - Usuario: ${post.title}  `;
        postList.appendChild(li);
    });
}