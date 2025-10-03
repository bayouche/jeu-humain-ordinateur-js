let scoreHumain = 0;
let scoreOrdi = 0;
let totalHumain = 0;
let totalOrdi = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jouer() {
    const tirageH = getRandomInt(1, 6);
    const tirageO = getRandomInt(1, 6);

    document.getElementById("tirage Humain").textContent = tirageH;
    document.getElementById("tirage Ordi").textContent = tirageO;

    if (tirageH > tirageO) {
        scoreHumain+=1;
        scoreOrdi-=0.25;
        if(scoreOrdi<0) scoreOrdi=0;
    } else if (tirageO > tirageH) {
        scoreOrdi+=1;
        scoreHumain-=0.25;
        if(scoreHumain<0) scoreHumain=0;
    }

    document.getElementById("score Humain").textContent = scoreHumain;
    document.getElementById("score Ordi").textContent = scoreOrdi;

    if (scoreHumain >= 10) {
        totalHumain++;
        afficherFin("Bravo ! L'humain a gagné !");
    } else if (scoreOrdi >= 10) {
        totalOrdi++;
        afficherFin("L'ordinateur a gagné cette partie !");
    }

    document.getElementById("total Humain").textContent = totalHumain;
    document.getElementById("total Ordi").textContent = totalOrdi;
}

function afficherFin(message) {
    document.getElementById("message").textContent = message;
    document.getElementById("btnTirer").style.display = "none";
    document.getElementById("btnRejouer").style.display = "inline-block";
}

function resetPartie() {
    scoreHumain = 0;
    scoreOrdi = 0;
    document.getElementById("score Humain").textContent = "0";
    document.getElementById("score Ordi").textContent = "0";
    document.getElementById("tirage Humain").textContent = "-";
    document.getElementById("tirage Ordi").textContent = "-";
    document.getElementById("message").textContent = "";
    document.getElementById("btnTirer").style.display = "inline-block";
}

function resetTout() {
    resetPartie();
    totalHumain = 0;
    totalOrdi = 0;
    document.getElementById("total Humain").textContent = "0";
    document.getElementById("total Ordi").textContent = "0";
    document.getElementById("logList").innerHTML = "";
}