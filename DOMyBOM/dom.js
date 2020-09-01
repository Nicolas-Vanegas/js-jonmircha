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

const $linkDOM = document.querySelector(".link-dom");

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

$body.style.setProperty("color", varDarkColor);
