//ottenere nome cognome colore 

//data

var userName = prompt ('Qual è il tuo nome?')
console.log (userName)

var surName = prompt ('Qual è il tuo cognome?')
console.log (surName)

var favoriteColor = prompt ('Qual è il tuo colore preferito?')
console.log (favoriteColor)

var annoCorrente = 21;

//logic

var password = userName + surName + favoriteColor + annoCorrente;

//Stamp

document.getElementById('password-html').innerHTML = password;



