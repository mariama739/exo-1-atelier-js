function sommeTableaux(tab1, tab2) {
    // Vérifier si les deux tableaux ont la même longueur
    if (tab1.length !== tab2.length) {
        throw new Error("Les tableaux n'ont pas la même longueur.");
    }

    // Créer un nouveau tableau pour stocker les sommes
    let resultat = [];

    // Parcourir les tableaux et calculer la somme des éléments correspondants
    for (let i = 0; i < tab1.length; i++) {
        resultat.push(tab1[i] + tab2[i]);
    }

    // Retourner le tableau contenant les sommes
    return resultat;
}

// Exemple d'utilisation
let tableau1 = [1, 2, 3, 4];
let tableau2 = [5, 6, 7, 8];
let resultat = sommeTableaux(tableau1, tableau2);
console.log("La somme des tableaux est :", resultat);
