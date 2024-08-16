fetch("https://everybody-hates-chris.onrender.com/api/v1/series/evhc/")
.then(result => result.json())
.then(json=>consumirLista(json));


function consumirLista(json) {
    var lista = document.createElementById("lista");

    json.forEach(objeto => {
        var div = document.createElement("div");
        div.classList.add("item");
        
    })
}