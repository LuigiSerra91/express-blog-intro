console.log('its works');

const containerEl = document.querySelector('.container')


axios.get("http://127.0.0.1:3000/posts")
    .then(response => {
      let listAxios = response.data;
        // console.log(listAxios);

    listAxios.data.forEach(element => {
        console.log(element);
        const {titolo, contenuto, immagine, tags} = element
        
        const markup = `
         <ul>
             <li>${titolo}</li>
             <li>${contenuto}</li>
             <img src="./${immagine}" alt="img-blog">
             <li>${tags}</li>
         </ul>
        `

        containerEl.innerHTML += markup
    });

    })