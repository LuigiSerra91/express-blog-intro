


const containerEl = document.querySelector('.container')

let listEl= document.querySelector('ul')

axios.get("http://127.0.0.1:3000/blog")
.then(res=>{
    const posts = res.data
    
    
    listElement= ''
    posts.forEach(post => {
        let {titolo,contenuto, immagine, tags} = post
        const markup=`
            <li class="pb-2 text-center"><h2>${titolo}</h2></li>
            <li class="pb-2 text-center">${contenuto}</li>
            <li class="pb-2 text-center"><img src="${immagine}" alt=""></li>
            <li class="pb-2 text-center">${tags}</li>
            
            `
        listElement+=markup
    });
    listEl.innerHTML= listElement
})