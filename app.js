// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
'use strict'

let amigos = [];

//se agrega un Amigo a la lista de sorteo.
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
        if(nombreAmigo === '' || amigos.includes(nombreAmigo)){
            alert("Por favor ingresa un nombre válido."); 
        } else { 
            if(isNaN(nombreAmigo)){
                amigos.push(nombreAmigo);
            }
             else{
                alert("Has ingresado un número, ingresa un nombre válido.");
            }
        }   
        //Limpiamos el campo de texto donde ingresamos el nombre.
        limpiarCaja();
        //se invoca la función actualizarListaAmigos() ya que necesitamos actualizar - 
        //la lista cuando agregamos un Amigo.
        actualizarListaAmigos();
    return;
 }
//función que limpia el campo de texto donde ingresamos el nombre
 function limpiarCaja(){
    document.querySelector("#amigo").value = '';
    return;
}
//funcion que oculta la lista, solo se declaró por el momento no se implementa en la lógica.
function ocultarLista(){
    //document.querySelector('#listaAmigos').setAttribute('hidden', 'true'); // ocultar lista de Amigos en el evento OnClick
    return;
}

//Actualizamos la lista con el nombre agregado y se imprime en el HTML como li de la lista.
function actualizarListaAmigos(){
    let listaHTML = document.querySelector("#listaAmigos");
    listaHTML.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
            let listItem = document.createElement('li'); 
                listItem.textContent = amigos[i];
                listaHTML.appendChild(listItem);
                //cambiando el estilo de como se imprime el Amigo Sorteado.
                listItem.style.color = '#000';
                listItem.style.fontSize = '20px';
                listItem.style.fontFamily = 'Inter, serif';
                listItem.style.fontWeight = '600';
        }
    return;
}
//Tomando la lista de nombres se sortea un nombre al azar con Math.floor y Math random,
//por la longitud de la lista Amigos
function sortearAmigo(){
    let indexAleatorio = Math.floor(Math.random()*amigos.length);
        if(amigos.length === 0){
            alert("La lista está vacia.");
         }
         else{
            if(amigos.length === 1){
                alert("Debes de ingresar al menos dos amigos para sortear");
            }
            else{
               
                let resultadoSorteoHTML = document.getElementById('resultado');
                let pAmigoSorteado = document.getElementById('parrafoSorteado');
                //Al evento Onclick se muestra el texto "Amigo sorteado:" retirando el -
                //atributo Hidden
                pAmigoSorteado.removeAttribute('hidden');
                //se imprime el nombre con el indice generado de manera aleatoria
                resultadoSorteoHTML.innerHTML = amigos[indexAleatorio];
                //se elimina de la lista el nombre sorteado.
                amigos.splice(indexAleatorio, 1);
                //Actualizamos la lista con los nombres restantes.
                actualizarListaAmigos();
            }
            
        }   
    return;
}

