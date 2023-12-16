const api = 'http://localhost:3000/data'
const cardList = document.querySelector('.card-list')

const dataContent = (image, name, desc) => {
    return cardList.innerHTML += `
    <div class="card">
        <div class="icon">
        <img src=${image}>
        </div>
        <div class="info">
            <h4>${name}</h4>
            <p>${desc}</p>
        </div>
    </div>`
}

const showData = async function(){
    let response = await axios.get(api)
    return response.data
}

const addData = async function(obj){
    let response = await axios.post(api, obj)
    return response.data
}

const updateData = async function(obj){
    let response = await axios.patch(api, obj)
    return response.data
}