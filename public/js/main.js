

const listPost = require('')
const containerEl = document.querySelector('.container')




listPost.forEach(element => {
    console.log(element);
    const {titolo,contenuto,immagine,tags} = element

    const markup = `
  
    <ul>
        <li>${titolo}</li>
        <li>${contenuto}</li>
        <li><img src="${immagine}" alt=""></li>
        <li>${tags}</li>
    </ul>

    `
containerEl.innerHTML += markup

})