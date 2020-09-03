/*------------------------------------------ Curso 61_INTRODUCCIÓN ----------------------------------------------------*/

/* console.log("**************Elementos del Documento*****************");
console.log(document.head);
console.log(document.body);
console.log(document.title);
//Etiqueta html
console.log(document.documentElement);
//doctype
console.log(document.doctype);
//juego de caracteres = UTF-8
console.log(document.charset);
//Acceder a los links
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
//getSelection para coger lo que seleccionaste con el cursor
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 2000);
//escribir desde el dom
document.write("<h2> Hola mundo desde el DOM </h2>"); */

/*----------------------------------- Curso 62_Nodos, Elementos y Selectores --------------------------------------------*/
//No confundir las etiquetas con nodos. Los comentarios son nodos, las etiquetas son nodos, los textos en las etiquetas son nodos. 12 tipos de nodos. Nodode tipo texto = El texto que tienen las etiquetas. Nodo de tipo elemento = Una etiqueta html

//MÉTODOS QUE YA NO SE UTILIZAN
//Traer todos los elementos por nombre de etiqueta:
//devuelve una colección html que parece un arreglo pero no es.
/* console.log(document.getElementsByTagName("li"));

//Traer todos los elementos por nombre de clase:
console.log(document.getElementsByClassName("card"));

//Traer todos los elementos por el atributo name:
console.log(document.getElementsByName("nombre"));

//Estos fueron reemplazados por querySelector
//El querySelector recibe como parámetro id class name etiqueta, pero no es recomendado con id.
//Solo te trae el primer selector con el nombre que le das
console.log(document.querySelector("a")); //Selector de consulta

//Trae todos los selectores de ese tipo.
console.log(document.querySelectorAll("a")); //Selector de consulta
console.log(document.querySelectorAll("a").length); //se puede usar el atributo length
console.log(document.querySelectorAll("a")[2]); //se puede traer un elemento determinado como en los arreglos
console.log(document.querySelectorAll("#menu li")); //puedes traer solo las listas del menu
document.querySelectorAll("a").forEach(el => console.log(el)); //se puede usar forEach= imprime cada elemento que sea un a

//Traer el elemento por el id
console.log(document.getElementById("menu")); */

/*--------------------------------------- Curso 63_Atributos y Data-Attributes -----------------------------------------*/
//Acceder al atributo lang que tiene la etiqueta html
/* console.log(document.documentElement.lang);
//acceder al atributo href pero total= https://121:231:5500/DOMYBOM/dom.html
console.log(document.querySelector(".link-dom").href);
//Accede al valor del atributo= dom.html
console.log(document.querySelector(".link-dom").getAttribute("href"));

//ESTABLECER UN NUEVO VALOR A LOS ATRIBUTOS
document.documentElement.lang = "es"; //o
document.documentElement.setAttribute("lang", "es-MX"); //establece el valor del atributo lang de html a "es-MX"

//guardar elementos del DOM en variables
//Buena práctica que todas las variables donde vayas a guardar elementos del DOM comiencen con $ para identificarlas fácilmente
const $linkDOM = document.querySelector(".link-dom");

// Al elemento guardado en la variable $linkDOM le establezco el atributo target en _blank para que al darle click al .link-dom se cargue en otra pestaña
//Modificar
$linkDOM.setAttribute("target", "_blank");
//Esto es para que no halla inseguridad en la nueva pestaña creada
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");

//Validar Que un elemento tiene cierto atributo con has
console.log($linkDOM.hasAttribute("rel")); //true

//Eliminar atributo
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); //false

//------------------Data-attributes
//Obtener
console.log($linkDOM.getAttribute("data-description")); // Document Objext Model
console.log($linkDOM.dataset); // Cule Map con todos los data-attributes id: "1", d escription: "Document Objext Model"

//Modificar
$linkDOM.setAttribute("data-description", "Mondá modificada con set");
console.log($linkDOM.dataset.description); //Mondá modificada con set -----o

$linkDOM.dataset.description = "Mondá modificada con puntos";
console.log($linkDOM.dataset.description); //Mondá modificada con puntos

//Validar que tiene algo
console.log($linkDOM.hasAttribute("data-id")); // true

//Eliminar atributo
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id")); // false */

/* ------------------------------Curso 64_ Estilos y variables CSS ---------------------------------*/

/* const $linkDOM = document.querySelector(".link-dom");

//Obtener
console.log($linkDOM.style); // Objeto CSStyleDeclaration el cuál tiene todas los propiedades de css. Estas propiedades van en lowerCamelCase, no con el - que va en css.
console.log(window.getComputedStyle($linkDOM)); // Objeto CSStyleDeclaration pero acá a cada propiedad de css le asigna un index, y muestra los valores por defecto que se les da a los elementos de de html por css
console.log($linkDOM.getAttribute("style")); //Devuelve solo el las propiedades css que le di.
console.log($linkDOM.style.color); //Devuelve el color
console.log(getComputedStyle($linkDOM).getPropertyValue("color")); //Devuelve el color

//Establecer
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.margin = "0 auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

//Variables CSS-Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), //guardar la variable creeaada en el :root, en una variable de js.
  varMainColor = getComputedStyle($html).getPropertyValue("--main-color");

console.log(varMainColor, varDarkColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varMainColor;

//Establecer
//vuelve la valiable de --root llamada --dark-color, de color pink
$html.style.setProperty("--dark-color", "pink");
//actualizar el color
//Se trae el --root y trae la nueva variable modificada --dark-color
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
console.log(varDarkColor); //pink

$body.style.setProperty("color", varDarkColor); */

/* ------------------------------------------------------ curso65_Clases CSS -------------------------------------------- */

/* const $card = document.querySelector(".card"); // Traigo la primera card del documento

console.log($card);
console.log($card.className); // card
// Para traernos el nombre de la clase en una lsita
console.log($card.classList);

//validar, como has pero con Contains
console.log($card.classList.contains("rotate-45")); // false

//Añadir clase
$card.classList.add("rotate-45", "sepia");
console.log($card.classList.contains("rotate-45")); // true
console.log($card.className); // card rotate-45

//Borrar clase
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45")); // false

//Añadir clase si no la tiene, y quitarla si la tiene. con TOGGLE = PALANCA
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45")); // true

//Reemplazar clases
$card.classList.replace("rotate-45", "rotate-135"); */

/* ------------------------------------------------------ curso66_Texto y HTML -------------------------------------------- */

/* const $whatisDOM = document.getElementById("que-es");

let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
      API para documentos HTML y XML.
    </p>
    <p>
      Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
    `;

//ESTA MONDÀ YA NO SE USA

// $whatisDOM.innerText = text;

//ESTAS SI ECHEEEE
$whatisDOM.textContent = text; //ESta se usa para cuando necesitas insertar SOLO texto
$whatisDOM.innerHTML = text; //Esta para cuando necesitas insertar còdigo html, acà solo inserta
$whatisDOM.outerHTML = text; //Mientras el inner html reemplace el contenido html que tiene que reemplazar, el outerHTML REEMPLAZA EL ELEMENTO DEL por el contenido del texto. */

/* ------------------------------------- curso67_Traversing: Recorriendo el DOM ----------------------------------------- */
//ESTA MONDÀ SOLO ES PARA LOS NODOS DE TIPO ELEMENTOS

/* const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children); //HTMLCollection con cada hijo
console.log($cards.children[2]); // el hijo numero 3 que sea elemento.
console.log($cards.firstChild); // #text . Esto es porque el primer nodo después de la section cards, es un espacio enter
console.log($cards.firstElementChild); // el primer hijo que sea elemento.
console.log($cards.parentElement); // Body
console.log($cards.parentNode); // Body
console.log($cards.previousSibling); // #text. Hermano anterior.
console.log($cards.previousElementSibling); // el elemento "a". Hermano anterior.
console.log($cards.nextElementSibling); // el elemento "script". Siguiente hermano.
//método
console.log($cards.children[3].closest("section")); // section class = cards ---->>> tomando de referencia el children[3], cuál es la section más cercana */

/* ------------------------------------- curso68_Creando Elementos y Fragmentos ----------------------------------------- */

//crear etiqueta html
/* const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"), //tiepe nodo de texto, y hay que crearlo.
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "https://placeimg.com/200/200/animals");
$figure.setAttribute("class", "card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//Otra manera de hacerlo pero acá js no toma lo creado como nodo
const $figure2 = document.createElement("figure");

$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="People">
  <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//Crear nodos de forma más rápida
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

//ponemos un título y luego un ul para luego meter las estaciones en forma de li dinámicas
document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

//por cada elemento de estaciones, crea una constante $li, la cual crea un elemento li en el html y luego le agrega un texto el cual corresponde a cada elemento del array estaciones, y luego le asigna esos li como hijos al $ul
estaciones.forEach(el => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

//Otra forma de crear nodos de forma rápida
const continentes = ["África", "América", "Europa", "Asia", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>continentes del mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";
// continentes.forEach(el => ($ul2.innerHTML = `<li> ${el} </li>`)); //Si se hace así, se va planchando coda impresión y al final solo sale la última
continentes.forEach(el => ($ul2.innerHTML += `<li> ${el} </li>`));

//ESTAS FORMAS QUE ACABAMOS DE VER SON MALAS CUANDO TIENES QUE AGREGAR MUCHOS ELEMENTOS AL DOM Y ESO RALENTIZA EL PC Y PAILA. Mejor crear fragmentos dinámicos

//----------------fragmentos dinámicos...cargamos los elementos que vamos a agregar a este fragmento y una vez que todos estén cargados, solo hacemos una sola inserción al DOM con todos los registros que captura.

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junnio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach(el => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3); */

/* ------------------------------------- curso69_Templates HTML = modelo HTML----------------------------------------- */

/* const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content, //queremos acceder al contenido y no al elemento como tal
  $fragment = document.createDocumentFragment(), //cargamos de elementos este fragmento para después hacer solo una inserción al DOM, al template
  //Creamos lo que queremos agregar
  cardContent = [
    {
      title: "Tecnología",
      img: "https:/placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https:/placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https:/placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https:/placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https:/placeimg.com/200/200/naturale",
    },
  ];

//Iteramos
cardContent.forEach(el => {
  //Por cada elemento, va a coger la etiqueta img que creamos previamente en el HTML, y le editamos el atributo src para poner el link que está guardado en la propiedad img de cada elemento del array, y así con el alt
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  //Le agregamos al figcaption el title
  $template.querySelector("figcaption").textContent = el.title;

  //El template es único, hay que clonarlo.
  let $clone = document.importNode($template, true); //clona todo el nodo template, con false solo clona la etiqueta.
  //mandamos todos estos elementos al fragment
  $fragment.appendChild($clone);
});

//Hacemos la inserción a $cards(la selection de html).
$cards.appendChild($fragment); */

//LAS ETIQUETAS TEMPLATE NO SE RENDERIZAN EN EL DOM, ES UN MODELO PARA QUE APARTIR DE ESTE, COMENZAR A GENERAR OBJETOS

/* -------------------------------------------curso70_Modificando Elementos (Old style)----------------------------------*/

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true); //con false solo clona la estructura de la etiqueta

$newCard.innerHTML = `
  <img src= "https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//reemplazamos el hijo en el index 3 por la newCard
//$cards.replaceChild($newCard, $cards.children[3]);

//para insertar el elemento antes del primer elemento hijo
//$cards.insertBefore($newCard, $cards.firstElementChild);

//para eliminar ultimo elemento
$cards.removeChild($cards.lastElementChild);

//Agregar el clon de cards
document.body.appendChild($cloneCards); */

/* -------------------------------------------curso71_Modificando Elementos (Cool style)----------------------------------*/

/* .insertAdjacent...
  .insertAdjacentElement(position, el) //Como un appendChild
  .insertAdjacentHTML(position, html) //como innerHTML
  .insertAdjacentText(position,text)  //como textContent

Positions:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(último hijo)
  afterend(hermano siguiente) */

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

/* $newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`; */
let $contentCard = `
 <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;

$newCard.classList.add("card");
$newCard.insertAdjacentHTML("afterbegin", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

//$cards.insertAdjacentElement("beforeend", $newCard);

//Otras maneras
//$cards.prepend($newCard); //prepend: primer hijo
//$cards.append($newCard); //append: Ùltimo hijo
//$cards.before($newCard); //before:Hermano anterior
$cards.after($newCard); //before:Hermano posterior

/* ------------------------------------curso72_Manejadores de Eventos (Event handler)----------------------------------*/

//event handler del primer botón: Evento con manejador HTML
function holaMundo() {
  alert("Hola mundo");
  console.log(event); // con event podemos ver caracteristicas del evento
}

//event handler del seguno botón. Con cada evento, en los manejadores semánticos, solo tienes derecho a asignarle una función
const $eventSemantico = document.getElementById("evento-semantico");
$eventSemantico.onclick = holaMundo;
//se reemplaza el valor del onclick porque no se pueden tener dos onclicks.
$eventSemantico.onclick = function (e) {
  //Esta mondá no puede recibir parámetros, solo el event en si que se suele identificar solo por la letra "e"
  alert("Hola mundo manejador de eventos semánticos");
  console.log(e);
};

//event handler del tercer botón. Evento con manejador múltiple.
const $eventMultiple = document.getElementById("evento-multiple");

//Acá salen los dos eventos del click
$eventMultiple.addEventListener("click", holaMundo);
//con una función anónima
$eventMultiple.addEventListener("click", e => {
  alert("Hola mundo manejador de eventos múltiples");
  console.log(e);
  console.log(e.type); //tipo de evento
  console.log(e.target); // quién lo origina
});

/* ------------------------------------curso73_Eventos con Parámetros y Remover Eventos----------------------------------*/

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
}
//dandole como segundo parametro una arrow function anónima, podemos pasarle parámetros a la función saludar.
$eventMultiple.addEventListener("click", () => {
  saludar(); // Hola desconocid@
  saludar("Nicolas"); // Hola Nicolás
});

//Evento para remover con manejadores múltiples, 4 botón.
$eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = e => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true; //disabled es un atributo html para desabilidar un botón, aparece sin luz.
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);

/* ------------------------------------curso74_Flujo de Eventos(bubble and catch)----------------------------------------*/
//El flujo de eventos se propaga del más internos al más externo dentro del árbol del DOM. Está relacionado con el tercer parámetro del addEventListener.
/* const $divEventos = document.querySelectorAll(".eventos-flujo div");

console.log($divEventos);

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
}

$divEventos.forEach(div => {
  //Fase de BURBUJA
  //div.addEventListener("click", flujoEventos); // Si doy click en el div 3, origino el click 3 veces.el click lo origina 3 y los eventos ocurren desde el más interno hasta el más externo
  //fase de CAPTURA. los eventos ocurren desde el más externo, al más interno
  //div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, { once: true }); //Once para que el evento se ejecute UNA SOLA VEZ.
}); */

/* ----------------------------------------curso75_stopPropagation & preventDefault-------------------------------------*/

/* const $divEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

console.log($divEventos);
console.log($linkEventos);

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
  //Esto le agragamos al flujo de eventos bubble
  e.stopPropagation(); // Hola te saluda uno, el click lo originó uno
}

$divEventos.forEach(div => {
  //Fase de BURBUJA
  div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", e => {
  alert("Hola, soy tu amigo y docente digital ...."); // Al oprimir el enlace, sale el mensaje, y luego te direcciona a la url
  e.preventDefault(); // Cancela el evento por defecto que tiene el elemento, ahora el link solo abre la alert que le agregamos acá, pero no direcciona a la url como hacen los elementos "a" del html por defecto
}); */

/* ---------------------------------------------curso76_Delegación de Eventos -------------------------------------------*/

/* function flujoEventos(e) {
  console.log(`Hola, el click lo originó ${e.target.className}`);
}

//en cualquier lugar del document va a detectar el click y nos va a devolver en consola el elemento al que le dimos el target, y va a efecutar lo que le digamos.
document.addEventListener("click", e => {
  console.log(`Click en`, e.target);

  //Si el objeto que origina el click es un div que está dentro de la section eventos-flujo, entonces ejecuta la función flujoEventos(e);
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    //si el target hace match (empareja) con "eventos-flujo a", osea si se hace click en ese elemento, devuelve true
    alert("Hola, soy tu amigo y docente digital ....");
    e.preventDefault();
  }
}); */

/*<<<<<<<<<<<-------------------------<<<<<------<<<<------BOOOOOMMMM------->>>>>>------>>>>>--------------------->>>>>>>>*/

/* ---------------------------------------------curso77_Propiedades y eventos-------------------------------------------*/

//tamaño del ancho del viewport
/* console.log(window.innerWidth);
//tamaño del alto del viewport
console.log(window.innerHeight);
//tamaño del ancho da la ventana del navegador
console.log(window.outerWidth);
//tamaño del alto de la ventana del navegador
console.log(window.outerHeight);

//Cada vez que le cambio el tamaño a la pantalla.
window.addEventListener("resize", e => {
  console.clear();
  console.log("*****************Evento Resize**********");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(e);
});

//cada vez que mueva el scroll
window.addEventListener("scroll", e => {
  console.clear();
  console.log("****************Evento Scroll*************");
  //muestra que tan alejado estoy de la izquierda de la ventana
  console.log(window.scrollX);
  //muestra que tan alejado estoy de la parte superior de la ventana
  console.log(window.scrollY);
  console.log(e);
}); */

//cuando la ventana del navegador termine de cargar
/* window.addEventListener("load", e => {
  console.log("*****************Evento Load**********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

//cuando la ventana cargue pero esta mondá es más rápida USAR ESTA MONDÁAA
document.addEventListener("DOMContentLoaded", e => {
  console.log("*****************Evento DOMContentLoaded**********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});
 */

/* ----------------------------------------------------curso78_Métodos-------------------------------------------------*/

/* alert("Que le ve");
confirm("Que le ve con opción de cancelar");
prompt("Para que el usuario escriba que le ve"); */

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e => {
  //el ventana = open es para poder acceder a esta con el método close.
  ventana = window.open("https://jonmircha.com");
});

$btnCerrar.addEventListener("click", e => {
  ventana.close();
});

$btnImprimir.addEventListener("click", e => {
  print();
});

/* -------------------------------------curso79_Objetos: Location(URL), Historial y Navegator----------------------------*/

/* console.log("*******************Objeto URL (location)*******************");
console.log(location);
//ruta: https://127.0.0.1:5500
console.log(location.origin);
//protocolo: https
console.log(location.protocol);
//host 127.0.0.1:5500
console.log(location.host);
//nombre del host: 127.0.0.1
console.log(location.hostname);
//puerto: 5500
console.log(location.port);
// href: https://127.0.0.1:5500/DOMYBOM/curso_61-79.html
console.log(location.href);
// numeral: #contacto o alguna mondá
console.log(location.hash);
console.log(location.search);
//DOMyBOM/Curso_61-79.html
console.log(location.pathname);
//recarga la página
//location.reload(); */

/* console.log("*********************Objeto Historial (History)********************");

console.log(history);
//Cuantas páginas he visitado
console.log(history.length);
//volver a tu historial 3
//history.back(3);
//ir hacia adelante en el historial
//history.forward(3);
//history.go(3); */

console.log("*********************Objeto Navigator ********************");
console.log(navigator);
//La coneccion: velocidad, etc
console.log(navigator.connection);
console.log(navigator.geolocation);
//dispositivos como camaras, micrófonos
console.log(navigator.mediaDevices);
//Tipos de formatos que soportan los navegadores
console.log(navigator.mimeTypes);
//si está online = true
console.log(navigator.onLine);
//api para hacer progresive web app.
console.log(navigator.serviceWorker);
//api de almacenamiento
console.log(navigator.storage);
console.log(navigator.usb);
//Mucha info sobre el navegador que se está conecectando a la app
console.log(navigator.userAgent);
