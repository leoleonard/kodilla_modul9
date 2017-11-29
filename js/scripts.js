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
