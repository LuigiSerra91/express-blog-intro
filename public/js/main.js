
console.log('wee');



http://127.0.0.1:3000/blog

axios.get("http://127.0.0.1:3000/blog")
    .then(response => {
      let listAxios = response.data;
      console.log(listAxios);
      
      
      
      
      
      
     
      
    
    }).catch(err => console.log(err));
