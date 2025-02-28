let amigos = [];
function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    if(amigo.value == ''){
        alert('Por favor, ingrese un nombre');
    }else{
        amigos.push(amigo.value);
        console.log(amigos);
        amigo.value = '';
        actualizarLista();
    }
}
function handleKeyPress(event) {
	if (event.key === "Enter") {
		agregarAmigo();
	}
}
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.innerHTML = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if(amigos.length < 2){
        alert('Por favor, ingrese al menos 2 amigos');
    }else{
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').innerHTML = amigoSorteado;
    }
}