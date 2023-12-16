const addName = document.querySelector('.add-name')
const addDesc = document.querySelector('.add-desc')
const addBtn = document.querySelector('.save-btn')
const addImg = document.querySelector('#file')
const img = document.querySelector('label img')

addImg.onchange = () => {
    img.src = URL.createObjectURL(addImg.files[0])
}

addBtn.onclick = () => {
    event.preventDefault()
    if(addName.value != "" && addDesc.value != ""){
        let reader = new FileReader
        reader.readAsDataURL(addImg.files[0])
        reader.onload = (e) => {
            let obj = {
                image: e.target.result,
                name: addName.value,
                description: addDesc.value
            }
            addData(obj).then(response => window.location = 'index.html')
        }
    }
}