// Condicionais
var idade = prompt("Qual sua idade");
if (idade >= 18) {
  alert("Maior de idade");
}else{
  alert("menor de idade");
}

// Repetição 
var count = 0;
while (count <= 5) {
  console.log(count);
  count ++;
}

// Repetição -> for
var cont1;
for(cont1=1; cont1 <= 5; cont1++) {
  console.log(cont1)
}

// Data no JavaScript
var d = new Date();
alert(d);
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
