function dwarfRollCall(dwarves) {

  var text = "";
  for (var i = 0; i < dwarves.length; i++) {
    var position = i + 1;
    text += `${position}. ${dwarves[i]} `;
  }
  return text;
} 


function summonCaptainPlanet(planeteerCalls){
  var newArray = [];
  for (var i = 0; i < planeteerCalls.length; i++){
    newArray.push(`${planeteerCalls[i].toUpperCase()}!`); 
  }
  return newArray;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4) {
      return true;
    } 
  }
  return false;
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++){
    if ((`${foods[i]}` === "cheddar") || (`${foods[i]}` === "gouda") || (`${foods[i]}` === "camembert")) {
      return `${foods[i]}`; 
    }
  }
  return "no cheese!";
}
