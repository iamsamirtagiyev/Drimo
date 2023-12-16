const api = 'http://localhost:3000/data/'
const fav = 'http://localhost:3000/favorites/'
const cardList = document.querySelector('.card-list')

const dataContent = (id, image, name, desc) => {
    return cardList.innerHTML += `
    <div class="card">
        <div class="icon" onclick="goToDetails(${id})">
        <img src=${image}>
        </div>
        <div class="info" onclick="goToDetails(${id})">
            <h4>${name}</h4>
            <p>${desc}</p>
        </div>
        <div class="buttons">
            <button onclick="deleteData(${id})">Delete</button>
            <button onclick="updateData(${id})">Update</button>
        </div>
        <button onclick="adFav(${id})">Add Favotites</button>
    </div>`
}

const showData = async function(page){
    let response = await axios.get(`${api}?_page=${page}&_limit=4`)
    return response.data
}
const showDataId = async function(id){
    let response = await axios.get(api+id)
    return response.data
}

const addData = async function(obj){
    let response = await axios.post(api, obj)
    return response.data
}

const deleteData = async function(id){
    let response = await axios.delete(api+id)
    return response.data
}

const updateData = (id) => {
    window.location = `update.html?id=${id}`
}

const goToDetails = (id) => {
    window.location = `details.html?id=${id}`
}


const adFav = async function(id){
    showDataId(id).then(response => {
        axios.post(fav, {
            image: response.image,
            name: response.name,
            desciription: response.desciription
        }).then(data => alert("add favorites"))
    })
}