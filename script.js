var res = document.querySelector(".res")
var numero = Number(prompt("Digite umnumero para descobrir a tabuada"))

for(var inicio = 1; inicio  <= 10 ;inicio ++){
    res.innerHTML += `<p>${numero} x ${inicio} = 
    ${numero * inicio}</p>`
}