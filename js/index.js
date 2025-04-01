console.log("¡Estoy listo!");

// Iteration 1: Names and Input


let hacker1 = "John"; // Conductor
let hacker2 = "Pedro"; // Navegante

console.log(`El nombre del conductor es ${hacker1}`);
console.log(`El nombre del navegante es ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `El conductor tiene el nombre más largo, tiene ${hacker1.length} caracteres.`
  );

  // code to execute if condition1 is true
} else if (hacker1.length > hacker2.length) {
  console.log(
    `Parece ser que el navegante tiene el nombre más largo, tiene ${hacker2.length} caracteres`
  );

  // code to execute if condition2 is true
} else {
  console.log(
    `¡Vaya, ambos tienen nombres igual de largos, ${hacker1.length} caracteres!`
  );

  // code to execute if condition1 and condition2 are false
}

// Iteration 3: Loops

// Se pueden concatenar o agregar caracteres a las cadenas fácilmente con el operador + o +=.

// Imprime todos los caracteres del nombre del conductor, separados por un espacio y en mayúsculas, por ejemplo "J O H N"

// for (initialization; condition; finalExpression) {
//     // code to execute
//   }

let newDriversName = "";
for (let i = 0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}

// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

console.log(newDriversName.trim());

// Imprima todos los caracteres del nombre del navegador, en orden inverso

let newNavigatorsName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorsName += hacker2[i];
}
console.log(newNavigatorsName);

// Según el orden lexicográfico de las cadenas, imprime:

if (hacker1 > hacker2) {
  console.log("El nombre del conductor va primero.");
} else if (hacker1 < hacker2) {
  console.log("Yo, el navegador va primero definitivamente.");
} else {
  console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}

/*
Bono 1:
Ve al generador de lorem ipsum y:

Generar 3 párrafos. Guarda el texto en una variable de tipo cadena.
Haz que tu programa cuente el número de palabras de la cadena.
Haz que tu programa cuente el número de veces que aparece la palabra latina et.
*/

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum quam sed ipsum luctus mattis. Duis in placerat augue, eu finibus eros. Sed in sapien cursus, tempor urna vel, consequat odio. Maecenas pharetra sapien at nibh fermentum, quis volutpat ipsum ultrices. Aliquam ornare sapien ac enim dignissim consequat. Praesent fermentum facilisis tortor, quis facilisis nulla venenatis sit amet. Ut ac sodales lectus. Vestibulum tellus diam, condimentum in justo ac, malesuada hendrerit enim. Nunc vel bibendum eros. Curabitur fringilla accumsan dictum. Mauris non eros et erat consequat porta dictum quis augue. Suspendisse luctus, erat id facilisis mattis, justo augue placerat sapien, sit amet aliquam massa eros vitae augue. Aliquam vel pulvinar metus, a hendrerit neque. Nunc ultrices mauris eget lacus aliquet, vel viverra velit fermentum. Sed fermentum pulvinar risus, in rhoncus metus faucibus nec.

Suspendisse euismod congue mi sit amet accumsan. Pellentesque aliquet ullamcorper congue. Maecenas vitae rutrum lectus. Etiam malesuada sit amet arcu et ullamcorper. Pellentesque viverra lacus mollis mauris lobortis fermentum. Nulla egestas porttitor molestie. Aliquam urna nisl, cursus ac commodo quis, rutrum quis ex. Donec imperdiet magna lorem, a varius magna vestibulum vel. Duis a tempor nisl. Quisque tempus enim ac orci fermentum, quis vulputate quam tempor. Vivamus eget ante a erat ultricies lobortis sit amet nec nisl.

Etiam auctor turpis ac est pretium tempor. Aliquam commodo scelerisque mauris eget convallis. Sed vitae blandit enim. Mauris a magna vel nisi ultricies ullamcorper. Vivamus volutpat rhoncus ligula eget consequat. Praesent cursus consequat tincidunt. Vestibulum eu consequat mi. Nulla non urna dictum, aliquet sapien vestibulum, placerat erat. Sed ut gravida purus. Etiam at ultricies mauris. Nulla malesuada convallis nibh.`;

let words = 0;
let etCount = 0;

let splittedParagraph = paragraph.split(' ');

for (let i=0; i < splittedParagraph.length; i++) {
  if(splittedParagraph[i].includes('\n')) {
    words++
  } else if(splittedParagraph[i] === "et" || splittedParagraph[i] === "et.") {
    etCount++;
  }
  words++;
 }

console.log('words -->', words);
console.log('et count  -->', etCount);

/*
Bono 2:
Crea una nueva variable phraseToCheck y haz que contenga algún valor de cadena. 
Escribe un código que compruebe si el valor que asignamos a esta variable es un palíndromo. 
Aquí hay algunos ejemplos de palíndromos: 
*/

// A palindrome (/ˈpæl.ɪn.droʊm/) is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date "22/02/2022" and the sentence: "A man, a plan, a canal – Panama".

let stringToCheck = "Un hombre, un plan, un canal, ¡Panamá!";
stringToCheck = stringToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = stringToCheck.split('').reverse().join('');

if (stringToCheck === reversedString) {
  console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');
}
