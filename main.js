const firstName = prompt ("Come ti chiami?");


const surName = prompt ("Qual è il tuo cognome?");

const favColour = prompt ("Qual è il tuo colore preferito?");

const password = `${firstName + surName + favColour}21`;

console.log (password)

document.getElementById(`psw`).innerHTML = password