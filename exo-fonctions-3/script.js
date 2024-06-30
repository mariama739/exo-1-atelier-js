function trouverNombresPremiers(nombre) {
    let nombresPremiers = [];
    
    // Vérifier chaque nombre inférieur à 'nombre'
    for (let i = 2; i < nombre; i++) {
        let estPremier = true;
        
        // Vérifier si 'i' est premier
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                estPremier = false;
                break;
            }
        }
        
        // Si 'i' est premier, l'ajouter au tableau
        if (estPremier) {
            nombresPremiers.push(i);
        }
    }
    
    return nombresPremiers;
}

// Exemple d'utilisation
let nombreLimite = 20;
let premiers = trouverNombresPremiers(nombreLimite);
console.log("Nombres premiers inférieurs à", nombreLimite + ":", premiers);
