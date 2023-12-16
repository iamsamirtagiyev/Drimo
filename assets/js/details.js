let id = new URLSearchParams(window.location.search).get('id')

const detailsWrapper = document.querySelector('.details-wrapper')

showDataId(id).then(response => {
    detailsWrapper.innerHTML = `
    <img src=${response.image} alt="">
    <h1>${response.name}</h1>
    <p>${response.description}</p>
    <button><a href="index.html">Ana Sehife</a></button>`
})