var agora = new Date();
var tempo = new Date();
var sec = new Date();
var hora = agora.getHours();
var min = tempo.getMinutes();
var seg = sec.getSeconds();
console.log(`Agora são exatamente ${hora}:${min}:${seg}`);

if (hora < 12) {
    console.log("Tenha um bom dia!");
} else if (hora <= 18) {
    console.log("Tenha uma boa tarde!");
} else {
    console.log("Tenha uma boa noite!");
}
