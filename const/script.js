const valeur = 5;
// valeur+=1;
// console.log(valeur);
let liste = document.querySelector('#liste');
afficherUl(liste);
for (let i = 1; i <= 5; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    liste.appendChild(li);
    console.log(`ajout de :` + i);
}
afficherUl(liste);
console.log('liste2');
const liste2 = document.querySelector('#liste2');
afficherUl(liste2);
for (let i = 1; i <= 5; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    liste2.appendChild(li);
    console.log(`ajout de :` + i);
}
afficherUl(liste2);