
function factoriel(num) {
	if (num===0) { return 1;}
	let outnum = num * factoriel(num-1);
	return outnum;
}

let my_num = 0;
let result = 0;

my_num = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log(` Tu veux calculer la factorielle de ${my_num}`);

result = factoriel(my_num);
console.log(` Le resultat est : ${result}`);
