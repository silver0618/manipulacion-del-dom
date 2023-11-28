/* console.log("hola, mundo ");
const h1 = document.querySelector("h1");
const Name= document.getElementById('.name');
const lastname=document.getElementById('lastname');
const input = document.querySelector('input');
const comentarios =document.getElementById('comentarios');
//recordar que todo lo que se quiera utilizar en el archivo js se debe declarar e inicializar.
console.log(h1.value);

input.value = "" //permite cambiar su valor de defecto 
h1.innerText="sofica"; // como modificar texto del html desde js // esta es lamejor forma por que la detecta como texto y no como html
h1.innerHTML // no es recomendado por que es vulnerable a ataques

console.log(h1.getAttribute('pantalla'));
h1.getAttribute('pantalla')//nos permite acceder a los atributos ejemplo las clases.
h1.setAttribute('class', 'verde');//nos permite modificar los atributos en los elementos de html

h1.classList.add('rojo');//permite agregar otra clase a la etiqueta
h1.classList.remove('verde');//permite eliminar la clase que se desee desde el js

//manipular el DOM // ene ste caso con una imagen 
const img = document.createElement('img');// en esta parte se crea el lemento img y se le setean los atributos como es el src y la url de la imagen
img.setAttribute('src', 'https://images.unsplash.com/photo-1560617544-b4f287789e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsdWxhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60')
comentarios.innerHTML=' '; // nos permite incertar texto vacio para borrar lo que estubiera en la etiqueta de html
comentarios.append(img); // insertamos la imagen en el elemento de html creado 
/////////////////////////////////////////////////////// */

const h1 = document.querySelector('#h1');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const resultado = document.querySelector('#resultado');
const btn =  document.querySelector('#calcular');
const result = document.querySelector('#result');
const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const nickname = document.querySelector('#nickname');



//primera forma de escuchar eventos 
// en esta forma debemos poner el evento que escucharemos del boton en el html que seria onclick= la funcion creada aqui en el javascript
function btnclic() {
    const resultado= parseInt(calculo1.value) + parseInt(calculo2.value);
    result.innerText= 'el resultado de la suma anterior es:  '+resultado;
}

//segunda forma de escuchar eventos //esta forma nos permite tener mas limpio el html y es la mas usada
btn.addEventListener('click', btnclic);//esta funcion es un escuchador al cual debemos enviarle dos parametros el primero el lo que vamos a eccuchar que en este caso es el click y el segundo valor seria la funcion creada 



//evento de formulario //seguimos utilizando el mismo parrafo para mostrar resultados
formulario.addEventListener('submit',btnformulario)

function btnformulario(event) {
    
    event.preventDefault();//esto basicamente lo que hace es que no se recargue la pagina y permita ver la informacion que le estamos inyectando al parrafo
    const resultado= nombre.value + ' '+apellido.value 
    
    result.innerText= 'el nombre del jugador es:  ' +resultado +' y su nickname es : ' +nickname.value;
}
