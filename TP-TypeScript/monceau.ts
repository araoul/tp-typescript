class Monceau {
    constructor(){

    }
    /***********************************************************************************************************************
 * Fonction qui renvoie le minimum de deux nombres
 */
    min(a: number, b: number) : number {
        return Math.min(a,b);
    }
/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre croissant
 */
triCroissant(L : number[]) : number[] {
    
    return L.sort((a, b) =>+a - +b);
}
/***********************************************************************************************************************
 * Fonction qui trie des nombres par ordre décroissant
 */
triDécroissant(L : number[]) : number[] {
    L.sort((a, b) =>+a - +b);
    return L.reverse();
}
/***********************************************************************************************************************
 * Fonction qui somme
 */
Somme(L : number[]) : number | string {
    let somme : number |string ;
    if(L.length==0){
        somme = "Impossible de sommer un tableau vide"
        }
    else {
        somme=  L.reduce((a, b) => a + b,0);
    }
        
        return somme;  
}  
/***********************************************************************************************************************
 * Fonction qui fait la moyenne
 */
Moyenne(L  : number[]) : number |string{
    let somme : number|string;
   if (L.length==0) {
       somme = "Impossible de faire la moyenne d'un tableau vide"
    } 
    else {
        somme  = (L.reduce((a,b)=> a + b,0))/L.length;
    }
         
                return  somme;
}
/***********************************************************************************************************************
 * Fonction qui renvoie les nombres strictement supérieurs à un certain seuil
 * et triés par ordre croissant
 */
 NombresSupérieursA(min: number, notes : number[]) : number[] {
    let result = notes.filter(note => note > min);
    return result.sort((a, b) =>+a - +b);
}
/***********************************************************************************************************************
 * Fonction qui renvoie les nombres strictement compris entre une valeur minimale et une valeur maximale
 * et triés par ordre croissant
 */
 NombresComprisEntre(min: number, max: number, notes : number[]) : number[] {
    let result = notes.filter(note => (note > min && note< max));
    return result.sort((a, b) =>+a - +b);
}

}

//Début des test avec la commande : tsc monceau.ts && node monceau.js

console.log('*********************************** le Minimun !*************************************************');
let monceau = new Monceau;
console.log(monceau.min (17, 27));

console.log('*********************************** tri Croissant !*****************************************');
let args = [[],[59, 51, 63, 95, 64, -38, -21, -6, 16, 44], [23, 29, -12, -23, 40, -4, -40, -60, -98, -52],[10]];
args.forEach(function(element){
console.log(monceau.triCroissant(element));
})

console.log('********************************* tri Décroissant !******************************************');
args.forEach(function(element){
    console.log(monceau.triDécroissant(element));
    })

console.log('*********************************** Somme !*****************************************');
args.forEach(function(element){
    
    console.log( monceau.Somme(element));
    })

console.log('************************************ Moyenne ! ********************************************');
args.forEach(function(element){
    
    console.log( monceau.Moyenne(element));
    }) 

console.log('******************************** Nombre Supérieur à !*****************************************');
    let args1 = [[10, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]],[20, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]],[50, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]],[50, [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]],[10, []]];
    args1.forEach(function(element){
        let  min =Number(element[0]) ; //convertir le type number[] en number
        let notes = (element[1]) as (number | number)[];    //convertir le type (number|number[]) en number;
        //console.log(min);
        console.log( monceau.NombresSupérieursA(min,  notes));//erreur de type pour min (number d'un tableau diffère de number)
        }) 


console.log('******************************** Nombre Compris entre !*****************************************');
let args2 = [[10, 20, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]],[0, 100, [59, 51, 63, 95, 64, -38, -21, -6, 16, 44]],[10, 20, [23, 29, -12, -23, 40, -4, -40, -60, -98, -52]],[10, 20, []]]
args2.forEach(function(element){
    let  min =Number(element[0]) ; //convertir le type number[] en number
    let max = Number(element[1]);
    let notes = (element[2]) as (number | number)[];    //convertir le type (number|number[]) en number;
    //console.log(min);
    console.log( monceau.NombresComprisEntre(min, max, notes));//erreur de type pour min (number d'un tableau diffère de number)
    }) 

    console.log('*********************************** fin !***********************************************')