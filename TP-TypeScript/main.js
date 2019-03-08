// test du fichier avec la commande : tsc main.ts && node main.js    
/***********************************************************************************************************************
 * Fonction qui renvoie le minimum de deux nombres
 */
function min(a, b) {
    return Math.min(a, b);
}
console.log('*********************************** Test: le Minimun !*************************************************');
var c = min(17, 27);
console.log(c);
/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre croissant
 */
function triCroissant(L) {
    return L.sort(function (a, b) { return +a - +b; });
}
console.log('*********************************** Test: tri Croissant !*****************************************');
// Au lieu de répéter un console.log sur chaque essaie c'est à dire :
/*
console.log(NombresSupérieursA([59, 51, 63, 95, 64, -38, -21, -6, 16, 44]));
console.log(NombresSupérieursA([23, 29, -12, -23, 40, -4, -40, -60, -98, -52]));
console.log(NombresSupérieursA([]));
console.log(NombresSupérieursA([10]));
*/
//J'ai du tout mettre dans un tableau pour éviter la répétition
var tabs = [[], [59, 51, 63, 95, 64, -38, -21, -6, 16, 44], [23, 29, -12, -23, 40, -4, -40, -60, -98, -52], [10]];
tabs.forEach(function (element) {
    triCroissant(element);
    console.log(element);
});
/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre décroissant
 */
function triDécroissant(L) {
    L.sort(function (a, b) { return +a - +b; });
    return L.reverse();
}
console.log('********************************* Test: tri Décroissant !******************************************');
tabs.forEach(function (element) {
    triDécroissant(element);
    console.log(element);
});
/***********************************************************************************************************************
 * Fonction qui somme : (NB : J'ai du modifier le type à renvoyer pour que ça puisse renvoyer un texte.)
 */
function Somme(L) {
    var somme;
    if (L.length == 0) {
        somme = "Impossible de sommer un tableau vide";
    }
    else {
        somme = L.reduce(function (a, b) { return a + b; }, 0);
    }
    return somme;
}
console.log('*********************************** Test: Somme !*****************************************');
tabs.forEach(function (element) {
    console.log(Somme(element));
});
/***********************************************************************************************************************
 * Fonction qui fait la moyenne : (NB : J'ai du modifier le type à renvoyer pour que ça puisse renvoyer un texte.)
 */
function Moyenne(L) {
    var somme;
    if (L.length == 0) {
        somme = "Impossible de faire la moyenne d'un tableau vide";
    }
    else {
        somme = (L.reduce(function (a, b) { return a + b; }, 0)) / L.length;
    }
    return somme;
}
console.log('************************************ Test: Moyenne ! ********************************************');
tabs.forEach(function (element) {
    console.log(Moyenne(element));
});
/***********************************************************************************************************************
 * Fonction qui renvoie les nombres strictement supérieurs à un certain seuil
 * et triés par ordre croissant
 */
function NombresSupérieursA(min, notes) {
    var result = notes.filter(function (note) { return note > min; });
    return result.sort(function (a, b) { return +a - +b; });
}
// Au lieu de répéter un console.log sur chaque essaie c'est à dire :
/*
console.log(NombresSupérieursA(10, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]));
console.log(NombresSupérieursA(20, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]));
console.log(NombresSupérieursA(50, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]));
console.log(NombresSupérieursA(50, [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]));
console.log(NombresSupérieursA(10, []));
*/
//J'ai du tout mettre dans un tableau pour éviter la répétition
console.log('******************************** Test:Nombre Supérieur à !*****************************************');
var tabs1 = [[10, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], [20, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], [50, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], [50, [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]], [10, []]];
tabs1.forEach(function (element) {
    var min = Number(element[0]); //convertir le type number[] en number si non ça met des erreurs de type pour min (number d'un tableau diffère de number)
    var notes = (element[1]); //convertir le type (number|number[]) en number;
    console.log(NombresSupérieursA(min, notes));
});
/***********************************************************************************************************************
 * Fonction qui renvoie les nombres strictement compris entre une valeur minimale et une valeur maximale
 * et triés par ordre croissant
 */
function NombresComprisEntre(min, max, notes) {
    var result = notes.filter(function (note) { return (note > min && note < max); });
    return result.sort(function (a, b) { return +a - +b; });
}
console.log('******************************** Test: Nombre Compris entre !*****************************************');
var tabs2 = [[10, 20, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], [0, 100, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], [10, 20, [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]], [10, 20, []]];
tabs2.forEach(function (element) {
    var min = Number(element[0]); //convertir le type number[] en number
    var max = Number(element[1]);
    var notes = (element[2]); //convertir le type (number|number[]) en number: si non : erreur de type pour min (number d'un tableau diffère de number)
    console.log(NombresComprisEntre(min, max, notes)); //
});
/***********************************************************************************************************************
 * Codez une classe Monceau implémentant l'ensemble des fonctions demandées.
 */
// Voir le fichier monceau.ts
