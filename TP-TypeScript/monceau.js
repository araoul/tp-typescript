var Monceau = /** @class */ (function () {
    function Monceau() {
    }
    /***********************************************************************************************************************
 * Fonction qui renvoie le minimum de deux nombres
 */
    Monceau.prototype.min = function (a, b) {
        return Math.min(a, b);
    };
    /***********************************************************************************************************************
     * Fonction qui trie des nombres par ordre croissant
     */
    Monceau.prototype.triCroissant = function (L) {
        return L.sort(function (a, b) { return +a - +b; });
    };
    /***********************************************************************************************************************
     * Fonction qui trie des nombres par ordre décroissant
     */
    Monceau.prototype.triDécroissant = function (L) {
        L.sort(function (a, b) { return +a - +b; });
        return L.reverse();
    };
    /***********************************************************************************************************************
     * Fonction qui somme
     */
    Monceau.prototype.Somme = function (L) {
        if (L.length == 0) {
            console.log('Impossible de sommer un tableau vide');
        }
        var somme = L.reduce(function (a, b) { return a + b; }, 0);
        return somme;
    };
    /***********************************************************************************************************************
     * Fonction qui fait la moyenne
     */
    Monceau.prototype.Moyenne = function (L) {
        //var getsomme;
        if (L.length == 0) {
            console.log("Impossible de faire la moyenne d'un tableau vide");
        }
        var somme = L.reduce(function (a, b) { return a + b; }, 0);
        return somme / L.length;
    };
    /***********************************************************************************************************************
     * Fonction qui renvoie les nombres strictement supérieurs à un certain seuil
     * et triés par ordre croissant
     */
    Monceau.prototype.NombresSupérieursA = function (min, notes) {
        var result = notes.filter(function (note) { return note > min; });
        return result.sort(function (a, b) { return +a - +b; });
    };
    /***********************************************************************************************************************
     * Fonction qui renvoie les nombres strictement compris entre une valeur minimale et une valeur maximale
     * et triés par ordre croissant
     */
    Monceau.prototype.NombresComprisEntre = function (min, max, notes) {
        var result = notes.filter(function (note) { return (note > min && note < max); });
        return result.sort(function (a, b) { return +a - +b; });
    };
    return Monceau;
}());
console.log('***********************************le Minimun !*************************************************');
var monceau = new Monceau;
console.log(monceau.min(17, 27));
console.log('*********************************** tri Croissant !*****************************************');
var args = [[], [59, 51, 63, 95, 64, -38, -21, -6, 16, 44], [23, 29, -12, -23, 40, -4, -40, -60, -98, -52], [10]];
args.forEach(function (element) {
    console.log(monceau.triCroissant(element));
});
console.log('********************************* tri Décroissant !******************************************');
args.forEach(function (element) {
    console.log(monceau.triDécroissant(element));
});
console.log('*********************************** Somme !*****************************************');
args.forEach(function (element) {
    console.log(monceau.Somme(element));
});
console.log('************************************ Moyenne ! ********************************************');
args.forEach(function (element) {
    console.log(monceau.Moyenne(element));
});
console.log('********************************Nombre Supérieur à !*****************************************');
var args1 = [[10, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], [20, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], [50, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], [50, [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]], [10, []]];
args1.forEach(function (element) {
    var min = Number(element[0]); //convertir le type number[] en number
    var notes = (element[1]); //convertir le type (number|number[]) en number;
    //console.log(min);
    console.log(monceau.NombresSupérieursA(min, notes)); //erreur de type pour min (number d'un tableau diffère de number)
});
console.log('********************************Nombre Compris entre !*****************************************');
var args2 = [[10, 20, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], [0, 100, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]], [10, 20, [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]], [10, 20, []]];
args2.forEach(function (element) {
    var min = Number(element[0]); //convertir le type number[] en number
    var max = Number(element[1]);
    var notes = (element[2]); //convertir le type (number|number[]) en number;
    //console.log(min);
    console.log(monceau.NombresComprisEntre(min, max, notes)); //erreur de type pour min (number d'un tableau diffère de number)
});
console.log('*********************************** fin !***********************************************');
