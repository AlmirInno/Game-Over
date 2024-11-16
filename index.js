const subTitle = document.querySelectorAll("h2");
subTitle[0].style.color = "violet";
subTitle[0].style.fontSize = "40px";

subTitle[1].style.color = "violet";

const bottone = document.querySelectorAll("button");
let mod = bottone + stile();
function stile() {
    bottone[1].style.width = "300px";
    bottone[1].style.height = "40px";
    bottone[1].style.fontSize = "20px";
};

const imgSize = document.querySelectorAll("img");
imgSize[4].addEventListener("mouseover", myImgSize);

function myImgSize() {
    imgSize[4].style.height = "700px";
    imgSize[4].style.position = "absolute";
    imgSize[4].style.alignContent = "center";
};

imgSize[4].addEventListener("click", myImgSize2);
function myImgSize2() {
    imgSize[4].style.height = "300px";
    imgSize[4].style.position = "relative";
};

const logo = document.querySelector("h4");
let log = logo + myLogo();
function myLogo() {
    logo.style.color = "violet"
}

const star = document.querySelectorAll("svg");
star[0].addEventListener("click", myStar);
function myStar() {
    star[0].style.fill = "green";
}

star[1].addEventListener("click", myStar1);
function myStar1() {
    star[0].style.fill = "green";
    star[1].style.fill = "green";
}

star[2].addEventListener("click", myStar2);
function myStar2() {
    star[0].style.fill = "green";
    star[1].style.fill = "green";
    star[2].style.fill = "green";
}

star[3].addEventListener("click", myStar3);
function myStar3() {
    star[0].style.fill = "green";
    star[1].style.fill = "green";
    star[2].style.fill = "green";
    star[3].style.fill = "green";
}

star[4].addEventListener("click", myStar4);
function myStar4() {

    star[0].style.fill = "green";
    star[1].style.fill = "green";
    star[2].style.fill = "green";
    star[3].style.fill = "green";
    star[4].style.fill = "green";
}