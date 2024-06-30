
// Demander à l'utilisateur de saisir son âge
var age = parseInt(prompt("Entrez votre âge actuel : "));

// Demander à l'utilisateur de saisir le nombre de jours qu'il souhaite vivre
var joursAVivre = parseInt(prompt("Entrez le nombre de jours que vous souhaitez vivre : "));

// Calculer le nombre d'années nécessaires pour vivre le nombre de jours spécifié
var anneesRestantes = joursAVivre / 365;

// Calculer l'année où l'utilisateur aura atteint cet âge
var anneeAtteinte = new Date().getFullYear() + Math.ceil(anneesRestantes);

// Afficher l'année où l'utilisateur aura atteint cet âge
alert("Vous aurez " + age + " ans en l'an " + anneeAtteinte + ".");
