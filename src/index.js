// fetchall`
// run forEach in that to render
// render each image <<===
// 



document.addEventListener('DOMContentLoaded', () => {
    fetchImage()
    fetchBreeds()
})


function renderDogImages(pic) {
    console.log('render dogs called')
    console.log(pic)
    let img = document.createElement('img')
    img.src = pic
    document.querySelector("#dog-image-container").append(img)
}

function fetchImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    console.log('fetch images called')
    fetch(imgUrl)
        .then(res => res.json())
        .then(data => data.message.forEach(renderDogImages))
}

function fetchBreeds() {
    console.log('fetchbreeds log')
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(res => res.json())
        .then(data => Object.keys(data.message).forEach(renderDogBreeds))
}

function renderDogBreeds(breed) {
    let li = document.createElement('li')
    li.textContent = breed
    document.querySelector('#dog-breeds').append(li)
    li.addEventListener("click", () => {
        li.style.color = "red"
    })
}






function renderDogImages2(data) {
    // console.log('render dogs called')
    console.log(data)
    let divContainer = document.createElement('div')
    let divFrame = document.createElement('div')
    let divImage = document.createElement('div')

    let img = document.createElement('img')
    img.src = data.message
    document.querySelector("#dog-image-container").append(img)
}

function renderSinglePokemon(pokemon) {
    //Using Create Element
    let divContainer = document.createElement('div')
    let divFrame = document.createElement('div')
    let divImage = document.createElement('div')
    let h1 = document.createElement('h1')
    let img = document.createElement('img')

    divContainer.className = 'pokemon-card'
    divFrame.className = 'pokemon-frame'
    divImage.className = 'pokemon-image'
    h1.className = 'center-text'
    h1.textContent = pokemon.name
    img.src = pokemon.sprites.front

    divImage.append(img)
    divFrame.append(h1, divImage)
    divContainer.append(divFrame)

    divContainer.addEventListener('click', () => showPokemon(pokemon.id))

    document.querySelector('#pokemon-container').append(divContainer)
}