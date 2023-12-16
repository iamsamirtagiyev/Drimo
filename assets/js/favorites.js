const cardList = document.querySelector('.card-list')

axios.get('http://localhost:3000/favorites/').then(response => {
    response.data.forEach(item => {
        dataContent(item.id, item.image, item.name, item.description)
    });
})