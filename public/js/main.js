console.log('its works');

const containerEl = document.querySelector('.row')


axios.get("http://127.0.0.1:3000/posts")
    .then(response => {
      let listAxios = response.data;
        // console.log(listAxios);

    listAxios.data.forEach(element => {
        console.log(element);
        const {titolo, contenuto, immagine, tags} = element
        
        const markup = `
        <div id="card-big" class="col-sm-12 col-md-6 col-lg-4 g-3 ">
         <div class="card rounded-0 mb-5 mt-5">
          <ul>
             <li>${titolo}</li>
             <li>${contenuto}</li>
             <img src="./${immagine}" alt="img-blog">
             <li>${tags}</li>
          </ul>
         </div>
         </div>
        `

        containerEl.innerHTML += markup
    });

    }).catch(err => console.log(err));