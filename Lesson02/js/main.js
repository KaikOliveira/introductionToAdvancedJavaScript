// Criando o Array
var list = ["maca", "pera", "laranja"];

// Buscar no Array pela posição
console.log(list[1]);

// Adicionar mais um item ao Array
list.push("uva");
console.log(list);

// Retirar o ultimo item do Array
list.pop();
console.log(list);

// Consultar a quantidades de item no Array
console.log(list.length);

// Trazer o Array do ultimo ao primeiro 4 3 2 1 0
console.log(list.reverse());

// Converter o Array para String
console.log(list.toString());

// Formatando o Array + convert String
console.log(list.join(" - "));

// ---------- 

// Criando um Objeto
var fruta = {nome:"maca", cor:"vermelha"}
console.log(fruta);

// Criando um "Array" de objetos
var frutas = [{nome:"maca", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);