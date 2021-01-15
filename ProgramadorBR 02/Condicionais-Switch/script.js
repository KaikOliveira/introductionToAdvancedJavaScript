var nota1 = 8.0;
var nota2 = 1.0;

var media = (nota1 + nota2) /2;

var conceito = ""

if (media >= 8) {

  conceito = "Otimo";

} else if (media >= 6.5) {

  conceito = "Bom";

} else {

  conceito = "Regular";

}

console.log(media);
console.log(conceito);

switch (conceito) {
  
  case "Otimo":
    console.log("Parabens")
    break

  case "Bom":
    console.log("Quase la")
    break

  case "Regular":
    console.log("Ruim pa @$%@!")
    break

  default: 
    console.log("Houve erro")
}