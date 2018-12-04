function dwarfRollCall(dwarves) {
<<<<<<< HEAD
  var text = "";
  for (var i = 0; i < dwarves.length; i++) {
    var position = i + 1;
    text += `${position}. ${dwarves[i]} `;
  }
  return text;
=======
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var position = i + 1;
    newArray.push(position, array[i])
  }
  return newArray.join('. ');
>>>>>>> cefae65a98a5c834e9a85352ef29509e195f5132
}

function summonCaptainPlanet(planeteerCalls){
  var newArray = [];
  for (var i = 0; i < planeteerCalls.length; i++){
    newArray.push(`${planeteerCalls[i].toUpperCase()}!`); 
  }
  return newArray;
}

function longPlaneteerCalls(words) {
  if (words.length < 4) {
    return false;
  } else {
    return true;
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++){
    if ((`${foods[i]}` === "cheddar") || (`${foods[i]}` === "gouda") || (`${foods[i]}` === "camembert")) {
      return `${foods[i]}`; 
    }
  }
  return "no cheese!";
}
