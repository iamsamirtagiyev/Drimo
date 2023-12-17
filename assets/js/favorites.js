
axios.get('http://localhost:3000/favorites/').then(response => {
    response.data.forEach(item => {

        cardList.innerHTML += `
    <div class="card">
        <div class="icon" onclick="goToDetails(${item.id})">
        <img src=${item.image}>
        </div>
        <div class="info" onclick="goToDetails(${item.id})">
            <h4>${item.name}</h4>
            <p>${item.description}</p>
        </div>
        <div class="buttons">
            <button onclick="deleteData(${item.id})">Delete</button>
            <button onclick="updateData(${item.id})">Update</button>
        </div>
        <button onclick="delFav(${item.id})">Delete Favotites</button>
    </div>`
    });
})

const delFav = (id) => {
    axios.delete('http://localhost:3000/favorites/'+id).then(response => window.location.reload())
}