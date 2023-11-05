'use script'


const elementName = document.getElementById('name');
const elementSurname = document.getElementById('surname');
const elementFavoritEcolor = document.getElementById('favorite-color');
const elementNumber = document.getElementById ('number');

elementNumber.innerHTML ="21"

elementName.innerHTML = ' Il tuo nome ';
elementSurname.innerHTML = 'Il tuo cognome ';
elementFavoritEcolor.innerHTML = 'Il tuo colore preferito  ';


elementName.innerHTML = prompt ('Inserisci il tuo nome')
elementSurname.innerHTML = prompt ('Inserisci il tuo cognome')
elementFavoritEcolor.innerHTML = prompt ('Inserisci il tuo colore preferito')
