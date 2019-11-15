const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

const serine = ['UCU','UCC','UCA','UCG','AGU','AGC'];
const proline = ['CCU', 'CCC', 'CCA','CCG'];
const leucine = ['UUA', 'UUG'];
const phenylalanine = ['UUU', 'UUC'];
const arginine = ['CGU','CGC', 'CGA','CGG','AGA','AGG'];
const tyrosine = ['UAU', 'UAC'];


//Fonction pour transformer chaque codon en amine et avoir le résultat final
function arn_to_amines (arn) {
  
  let myArnAmine = [];
  string_to_array(arn).forEach(codon => {
    let tempo = codon_to_amine(codon);
    console.log(tempo);
    myArnAmine.push(tempo); });
  
  return myArnAmine.join('-')
}


// Fonction pour transformer un codon en amine
function codon_to_amine (codon) {
  switch (true) {
    case serine.includes(codon):
      return 'Sérine';

    case proline.includes(codon):
      return 'Proline';

    case leucine.includes(codon):
      return 'Leucine';

    case phenylalanine.includes(codon):
      return 'Phénylalanine';

    case arginine.includes(codon):
      return 'Arginine';

    case tyrosine.includes(codon):
      return 'Tyrosine';

    default:
    return 'X';

  }
}

// Fonction splite une chaine de caractère tous les 3 caractères "XYZ" "ABC" ...
function string_to_array (arn) {
  let temp = arn.match(/.{1,3}/g);
  console.log(temp);
  return temp; }

// Conversion
console.log( arn_to_amines(arn1) );
console.log( arn_to_amines(arn2) );
