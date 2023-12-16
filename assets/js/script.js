const api = 'http://localhost:3000/data'
const cardList = document.querySelector('.card-list')
const nav = document.querySelector('nav')
const menuIcon = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const loadMore = document.querySelector('.load-more')

let count = 1

menuIcon.onclick = ()=>{
    menu.classList.toggle('active')
}


showData(count).then(response => {
    response.forEach(item => {
        dataContent(item.id, item.image, item.name, item.description)
    });
})

loadMore.onclick = () => {
    count++
    showData(count).then(response => {
        response.forEach(item => {
            dataContent(item.id, item.image, item.name, item.description)
        });
    })
}

