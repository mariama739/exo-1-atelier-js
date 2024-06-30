const readline = require('readline');

// Création de l'interface pour lire l'entrée utilisateur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour calculer la factorielle d'un nombre
function calculerFactorielle(nombre) {
  if (nombre < 0) {
    return NaN; // Factorielle n'est pas définie pour les nombres négatifs
  }
  let resultat = 1;
  for (let i = 2; i <= nombre; i++) {
    resultat *= i;
  }
  return resultat;
}

// Demander à l'utilisateur de saisir un nombre
rl.question('Entrez un nombre pour calculer sa factorielle : ', (input) => {
  const nombre = parseInt(input);

  // Vérifier si l'entrée est un nombre valide
  if (!isNaN(nombre)) {
    const factorielle = calculerFactorielle(nombre);
    console.log(`La factorielle de ${nombre} est : ${factorielle}`);
  } else {
    console.log('Vous devez entrer un nombre valide.');
  }

  rl.close();
});
