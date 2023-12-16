let id = new URLSearchParams(window.location.search).get('id')

const updName = document.querySelector('.upd-name')
const updDesc = document.querySelector('.upd-desc')
const updBtn = document.querySelector('.save-btn')
const updImg = document.querySelector('#file')
const img = document.querySelector('label img')

updImg.onchange = () => {
    img.src = URL.createObjectURL(updImg.files[0])
}

axios.get(`http://localhost:3000/data/${id}`).then(response => {
    img.src = response.data.image
    updName.value = response.data.name
    updDesc.value = response.data.description
})

updBtn.onclick = () => {
    event.preventDefault()
    if(updName.value != "" && updDesc.value != ""){
        let reader = new FileReader
        reader.readAsDataURL(updImg.files[0])
        reader.onload = (e) => {
            let obj = {
                image: e.target.result,
                name: updName.value,
                description: updDesc.value
            }
            axios.patch(`http://localhost:3000/data/${id}`, obj).then(response => window.location = 'index.html')
        }
    }
}