let monDiv = document.createElement('div');
monDiv.innerHTML = "Ce div a été ajouté en utilisant javascript";
document.getElementById('viewport').appendChild(monDiv);

let secondDiv = document.createElement('div');
secondDiv.style.backgroundColor = "red";
secondDiv.style.width = "100px";
secondDiv.style.height = "100px";
document.getElementById('viewport').append(secondDiv);

document.getElementById('aSupprimer').remove();








