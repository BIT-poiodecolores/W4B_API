// URL Api
const API = "https://jsonplaceholder.typicode.com/users";
const btnSearch = document.getElementById("btnSearch");

// Obtener los resultados de la API
const getData = (api) => {
  //el get es (fetch) que trae la información es decir es ese request (la petición) -  y el return se encarga de retomar lo que devuelve la promesa
  return fetch(api) //
    .then((response) => response.json())
    .then((json) => {
      fillData(json);//envia esos datos a (data)
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

// Dibujar cards con la info de las personas
const fillData = (data) => { //recibiendo esos datos
  let html = "";
  data.forEach((pp) => {//people guardando cada item que recorre el foreach-recorre lo que haya
    //contanea los datos (Strings) a la variable 
    html += '<div class="col">';
    html += '<div class="card h-100" style="width: 12rem;">';
    html += `<h2 class="card-title" > ${pp.name} </h2>`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pp.address.suite}</h5>`;
    html += `<h5 class="card-title">${pp.email}</h5>`;
    html += `<p class="card-text">Episodes: ${pp.phone}</p>`;
    html += `<p class="card-text"> <a  href="${pp.website}" target="_blank">Web personal</a></p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("dataPeople").innerHTML = html;
};

// Sejecuta la API
btnSearch.onclick = function () {
  getData(API);
};
