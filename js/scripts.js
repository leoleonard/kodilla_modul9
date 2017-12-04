//zadanie 9.6

  var list = document.getElementById("list"),
      add = document.getElementById("addElem");

add.addEventListener("click", function(){
  var element = document.createElement("li");
  var number = document.getElementsByTagName("li").length;
  element.innerHTML = "item " + number;
  list.appendChild(element);
          }
    );
    // pytanie
    //kod działa (dodając kolejne elementy item 1, item 2, ...) po wyłaczeniu wcześniejszych elementów kodu w HTML (dotyczacych pozycji "li"); w jaki sposob mozna bezposrednio odniesc sie do elementu  aby nie kolidiowalo to ze wczesniejszymi elemtami list?
