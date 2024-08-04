function carregar() {
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");

    var h = new Date();
    var m = new Date();
    //var s = new Date();
    var hora = h.getHours();
    var min = m.getMinutes();
    //var sec = s.getSeconds();
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos !`;

    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = "imagens/manhã.png";
        document.body.style.background = "#e2cd9f";
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = "imagens/tarde.png";
        document.body.style.background = "#b9846f";
    } else {
        //Boa noite
        img.src = "imagens/noite.png";
        document.body.style.background = "#515154";
    }
}
