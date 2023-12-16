const api = 'http://localhost:3000/data'
const cardList = document.querySelector('.card-list')
const nav = document.querySelector('nav')
const menuIcon = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')

menuIcon.onclick = ()=>{
    menu.classList.toggle('active')
}


showData().then(response => {
    response.forEach(item => {
        dataContent(item.image, item.name, item.description)
    });
})

