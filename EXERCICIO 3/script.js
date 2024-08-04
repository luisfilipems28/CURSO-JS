function verificar() {
    var data = new Date(); //data atual

    var ano = data.getFullYear(); //ano atual

    var fano = document.getElementById("txtano"); // ano digitado pelo usuario

    var res = document.querySelector("div#res"); // transformar res em variavel.

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        //Para uma string vazia, length é 0. Se o valor digitado pelo usuario(fano)transformado em number(Number) for maior que o ano atual.

        window.alert("Verifique seus dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        res.innerHTML = `Idade calculada ${idade}`;
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute("src", "imagens/bebehomem.png");
            } else if (idade < 22) {
                //Jovem
                img.setAttribute("src", "imagens/homemjovem.png");
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "imagens/homemadulto.png");
            } else {
                //Idoso
                img.setAttribute("src", "imagens/homemidoso.png");
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute("src", "imagens/bebemulher.png");
            } else if (idade < 22) {
                //Jovem
                img.setAttribute("src", "imagens/mulherjovem.png");
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "imagens/mulheradulta.png");
            } else {
                //Idoso
                img.setAttribute("src", "imagens/mulheridosa.png");
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}
