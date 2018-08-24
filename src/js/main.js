let resident = document.getElementById("firstMovie");
let scary = document.getElementById("secondMovie");
let batman = document.getElementById("thirdMovie");
let card = document.getElementById("movieCard");
let resultado="";



 const render = (movies) => {
     console.log(movies);
     //card.innerHTML="";
for(let i=0; i<movies.length; i++){
    
      resultado+=`
      <div class="col s2 m2 l2"
        <div class="card">
            <div class="image">
            <img id="poster" class="responsive-img" src="${movies[i].Poster}">
            <span class="title">${movies[i].Title}</span>
            </div>
            <div class="content">
            <p>${movies[i].Year}</p>
            </div>
        </div>
      </div>`
    
    }
    card.innerHTML += resultado;
 }