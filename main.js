const firstname = prompt ("Come ti chiami?");


const surname = prompt ("Qual è il tuo cognome?");

const favcolour = prompt ("Qual è il tuo colore preferito?");

const password = `${firstname + surname + favcolour}21`;

console.log (password)

document.getElementById(`psw`).innerHTML = password