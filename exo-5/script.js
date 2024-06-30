
let lettre = prompt('Entrer une lettre :');

if (
    lettre === "a" ||
    lettre === "e" ||
    lettre === "i" ||
    lettre === "o" ||
    lettre === "u" ||
    lettre === "y" 
){
    alert('La lettre saisie est une voyelle.');
}
else if (lettre >= "a" && lettre <= "z"){
    alert("La lettre saisie est une consonne.");
}
else {
    alert("La saisie n'est pas une lettre.");
}