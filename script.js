function  getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            data.forEach(item => {
                const post = document.createElement('div');
                post.className = 'post';
                post.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
                container.appendChild(post);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

