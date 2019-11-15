
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let ARRAY_1970 = [];
for (let index in entrepreneurs) {
	// console.log(index);
	// console.log(entrepreneurs[index].year);
	Obj = entrepreneurs[index];
	if (Obj.year >= 1970 && Obj.year <= 1979) {
	ARRAY_1970.push(entrepreneurs[index]);}
}
console.log(" 1 - Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ");
console.log(ARRAY_1970);
for (let index in ARRAY_1970) {
	// console.log(ARRAY_1970[index]);
	console.log(` ${ARRAY_1970[index].first} ${ARRAY_1970[index].last} ${ARRAY_1970[index].year}`);
}

// voir la methode filter : https://www.w3schools.com/jsref/jsref_filter.asp
    function isBornIn70ies(entrepreneur) {
      return (entrepreneur.year >= 1970) && (entrepreneur.year <= 1979);
    }
//    console.log(entrepreneurs.filter(isBornIn70ies));


console.log("-----------------------------------------------------------------");
console.log("2 - Sors une array qui contient le prénom et le nom des entrepreneurs");
let ARRAY_first_last = [];
for (let index in entrepreneurs) {
	ARRAY_first_last[index] = { first: entrepreneurs[index].first, last: entrepreneurs[index].last };
	// console.log(ARRAY_first_last[index]);
}

for (let index in ARRAY_first_last) {
	console.log(` ${ARRAY_first_last[index].first} ${ARRAY_first_last[index].last}`);
}

console.log("-----------------------------------------------------------------");
console.log("3 - Quel âge aurait chaque inventeur aujourd'hui ? ");
let age = [];
age = entrepreneurs.map ((entrepreneur) => {return entrepreneur.first + " " + entrepreneur.last + " a " + (2019 - entrepreneur.year) + " ans" });
for (let index in age){
	console.log(age[index]);
}
//   voir methode map : https://www.w3schools.com/jsref/jsref_map.asp

console.log("-----------------------------------------------------------------");
console.log(" 4 - Trie les entrepreneurs par ordre alphabétique du nom de famille");
let trie = [];

trie = entrepreneurs.sort(function(a,b){return ('' + a.last).localeCompare(b.last)});
console.log(trie);

 // console.log(entrepreneurs.sort((a,b) => (a.last < b.last) ? -1 : ((b.last > a.last) ? 1 : 0)));
//  voir methode sort : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort

for (let index in trie) {
	console.log(` ${trie[index].last} ${trie[index].first} ${trie[index].year}`);
}
