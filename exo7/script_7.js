

function chatbot(userPhrase) {
  switch (true) {

    case (userPhrase == "" || userPhrase == null):
      return 't\'es en PLS ?';

    case is_question(userPhrase):
      return 'Ouais Ouais..';

    case isUpperCase(userPhrase):
      return 'Pwa, calme-toi...';

    case containFortnite(userPhrase):
      return 'on s\' fait une partie soum-soum ?';

    default:
      return "balek";

  }
}

function get_user_phrase () {
  let answer = prompt("Qu'est-ce que t'as? ");
  console.log(answer);
  return answer;
}

// fini par un point d'interrogation ?
function is_question (userPhrase) {
  if (userPhrase[userPhrase.length - 1] == '?') {
    return true
  } else {
    return false
  }
}

// Est-ce que tout le texte est en capitales
function isUpperCase(userPhrase) {
    return userPhrase === userPhrase.toUpperCase();
}

// Contient le mot fortnite?
function containFortnite (userPhrase) {
  if (userPhrase.includes("fortnite")) {
    return true;
  } else {
    return false;
  }
}


for(;;) {
let phrase = get_user_phrase();
console.log(chatbot(phrase));
}