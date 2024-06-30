

let age = parseInt(prompt("Entrer votre age : "));

if (age < 18){
    alert('Vous Etes mineur');
}
else if (age >= 18 && age <65){
    alert('Vous etes majeur');
}
else{
    alert('Vous etes senior');
}