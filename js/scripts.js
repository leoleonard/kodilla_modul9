/*

// zadanie 9.1

function getTriangleArea (a, h) {
  if (a < 0 || h < 0) {
    return console.log("Nieprawidłowe dane");
  } else  {
    return console.log(a*h/2);
  }
}

getTriangleArea(3,5);

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(1,7);
var triangle3Area = getTriangleArea(1,90);
var triangle4Area = getTriangleArea(10,-1);

//zadanie 9.2

var femaleNames = ["Asia", "Kasia", "Ola", "Jola"];
var maleNames = ["Piotrek", "Marek", "Arek", "Jarek"];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = "Marian";

if (allNames.indexOf(newName) == -1) {
  allNames.push(newName);
  console.log(allNames);
} else {
  console.log("There's Marian already!");
}

// zadanie 9.3

var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var bigDinosaur = dinosaur.toUpperCase();
console.log(bigDinosaur);

var textAfter = text.replace("Velociraptor", bigDinosaur);
console.log(textAfter);

var finalText = textAfter.substr(0, textAfter.length/2);
console.log(finalText);

// zadanie 9.4


function drawTree(h) {
  for (i = 0; i <= h; i++) {
    var star = " ";
      for (j = 1; j <= i; j++) {
        star += "*";
      }
      console.log(star);
  }
}

// h = prompt('Podaj wysokość choinki');
// drawTree(h);

*/

// zadanie 9.5


 var btn = document.getElementsByClassName('button');

 for (var i = 0; i < btn.length; i++) {
    console.log(btn[i].innerText);
 };
