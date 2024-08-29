let contagem_votos = localStorage.getItem('total');

if (contagem_votos == null){
    contagem_votos = [0, 0];
} else {
    contagem_votos = localStorage.getItem('total').split(',');
    contagem_votos[0] = Number(contagem_votos[0]);
    contagem_votos[1] = Number(contagem_votos[1]);
}

const labels = document.querySelectorAll('main .candidato span');

labels[0].innerHTML = contagem_votos[0];
labels[1].innerHTML = contagem_votos[1];

const resetarValores = () => {
    localStorage.clear();
    location.href = '../urna_eletronica/';
}