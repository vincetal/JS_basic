const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 },
  { title: 'L\'art de la guerre', id: 748155, rented: 0 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log('Est-ce que tous les livres ont été au moins empruntés une fois ?');
let allRented = true;
books.forEach(book => {
  if (book.rented == 0) {
    allRented = false
  }
});
console.log(allRented);
  if (allRented){
    console.log(`YES: ${allRented}. Tous les livres ont été emprunté au moins une fois.`);
  }else{
    console.log(`NO: ${allRented}. Tous les livres n'ont pas été emprunté au moins une fois.`);
  }

// Quel est le livre le moins emprunté ?

let leastRented = books.reduce(function(prev, curr) {
    return prev.rented < curr.rented ? prev : curr;
});
console.log('Livre le moins emprunté');
console.log(leastRented);

// Trouve le livre avec l'ID: 873495 ;
console.log('Trouve le livre avec l\'ID: 873495 ');
let myBook = books.filter(function(x) { return (x.id == 873495); });
console.log(myBook);

//Supprime le livre avec l'ID: 133712 ; (on trouve l'index de l'élément puis on le supprime)
console.log("Supprimer le livre avec l'ID: 133712 ");
function ismybook(element) {
  return (element.id == 133712);
}

let index = books.findIndex(ismybook);

function deleteBook (array, index) {
  if (index > -1) {
    array.splice(index, 1);
  }
}

deleteBook(books, index)

console.log(books);

// Trier les livres par ordre alphabétique
console.log("Trier les livres par ordre alphabétique");
function tri(a,b)
{
  if (a.title < b.title) return -1;
  else if (a.title == b.title) return 0;
  else return 1;
}
books.sort(tri);
console.log(books);