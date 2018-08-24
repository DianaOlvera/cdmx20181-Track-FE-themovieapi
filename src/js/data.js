  console.log("entra");
  let apiKey = "17a1f02c";
  let str ="";
  

  const init = (api, str) => {
    let url = 'https://www.omdbapi.com/?apikey=' + apiKey + '&s=' + str;
    global.getData(url).then((response) => {
    render(response.Search)
  })
}
window.global = {
  // Se genera una función y dentro de ella una constante con la url del JSON para llamarlo con el método fech.
  getData: (url) => {
    return fetch(url).then(response => response.json())
  }
}

resident.addEventListener("click", ()=>{
  
  init(apiKey, "resident evil").then((response)=>{
  })
  .catch((error)=>{
    console.log(error.message);
  })
});

// scary.addEventListener("click", ()=>{
//   //card.innerHTML="";
//   init(apiKey, "scary movie").then((response)=>{
//   })
//   .catch((error)=>{
//     console.log(error.message);
//   })
// });

// batman.addEventListener("click", ()=>{
//   //card.innerHTML="";
//   init(apiKey, "batman").then((response)=>{
//   })
//   .catch((error)=>{
//     console.log(error.message);
//   })
// });
