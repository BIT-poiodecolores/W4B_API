const API = "https://jsonplaceholder.typicode.com/photos";

//obtener los resultados de la API osea la url
const getData = (api) =>{
//retorna el resultado de la API ya que el fetch se encarga de consumir la API osea (api) que tiene la url
    return fetch(api)
    .then((reponse) => reponse.json()) 
    .then((json) => {//guarda esos json en esta palabrita (json) <-- hay 5mil fotos
     fillData(json); //se envian esas 5 mil fotos a la función fillData para ya dibujarlos en el html
    })
    .catch((error) => {
     console.log("Error:", error);//en caso tal que haya un error
    })

}

const fillData = (data) => {//data es el mismo (json) aqui se reciben esas 5 mil fotos
let html = ""; //creamos la variable html donde crearemos el card
let limit = 20;//aqui creamos un limite de 20 porque si ponemos 5mil fotos se estalla todo
for (let i=0; i < limit; i++ ){//utilizamos un for normal porque tiene limite, cuando no tiene limite es el foreach  
    //si tenemis ejemplo solo 10,20,50 o así
    html += '<div class="col">';
    html += '<div class="card h-100" style="width: 12rem;">';
    html += `<img src="${data[i].url}" class="card-img-top" alt="${data[i].title}">`//5 mil fotos en la posición i osea 0 1 2 3 4 5
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${data[i].title}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
}
 document.getElementById("dataAlbum").innerHTML = html; // se toma el div donde se van a poner las 10card y se le
 //colocal el html
};


//Se invoca la funcion automaticamente, ya que no tenemos el boton, se le envia la variable API
getData(API);