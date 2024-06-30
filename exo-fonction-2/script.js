function longueurDesChaines(tableau) {
    // Créer un nouveau tableau pour stocker les longueurs des chaînes
    let longueurs = [];

    // Parcourir le tableau d'entrée
    for (let i = 0; i < tableau.length; i++) {
        // Ajouter la longueur de chaque chaîne au nouveau tableau
        longueurs.push(tableau[i].length);
    }

    // Retourner le tableau contenant les longueurs
    return longueurs;
}

// Exemple d'utilisation
let tableauDeChaines = ["Bonjour", "Salut", "Hello", "Hola"];
let longueurs = longueurDesChaines(tableauDeChaines);
console.log("Longueurs des chaînes :", longueurs);
