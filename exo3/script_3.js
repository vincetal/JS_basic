
let chaine = [];
let etage = 0;
etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
// on rempli la chaine de " " du nombre blanc total d'étages
// puis on enlève le premier [0] " "
// et on remplace le dernier [total] par un "#"

	for (var blanc = 0; blanc<= etage -1; blanc++) {
		chaine.push(" ");
	}
// pour debugger
// console.log("debut:" + `${chaine}`+ ":fin")

	for (var bloc = 0; bloc <= etage -1; bloc++) {
		chaine.shift();
		chaine.push("#");
		console.log(`${chaine.join("")}`);
	}
// pour debugger
// console.log("debut:" + `${chaine}`+ ":fin")
