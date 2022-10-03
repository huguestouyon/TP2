// Déclaration de variable 
let numberOfSeasons = 2;
let numberOfEpisodes = 10;
let episodeTime = 42;
let creditsTime = 5;
// let globalEpisodeTime = episodeTime + creditsTime;

let totalTime = (episodeTime + creditsTime) * numberOfEpisodes * numberOfSeasons;
// console.log(totalTime);
let paragraph = document.querySelector("#info");
// paragraph.innerText = numberOfSeasons;

/* Modifier le style */
paragraph.style.color = 'red';

/* Création d'objet */
let myShow = {
    title: "Les anneaux de pouvoirs",
    broadcaster: "Amazon",
    numberOfEpisodes: 10,
    aired: false
};

let myShow2 = {
    title: "Les anneaux de pouvoirs 2",
    broadcaster: "fzefzf",
    numberOfEpisodes: 15,
    aired: false
};

let myShow3 = {
    title: "Les anneaux de pouvoirs 3",
    broadcaster: "fezfoze",
    numberOfEpisodes: 30,
    aired: true
};

// paragraph.innerHTML = "<strong>" + myShow.title + "</strong></br>" + myShow.broadcaster + "</br>" + myShow.numberOfEpisodes + "</br>" + myShow.aired + "</br>";
// console.log(myShow);

let shows = [myShow, myShow2, myShow3];
let empty = "";
for (let i = 0; i < shows.length; i++) {
    if(shows[i].aired === true) {
        empty = "Oui";
    }
    else {
        empty = "Non";
    }
    paragraph.innerHTML += "<strong>" + shows[i].title + "</strong></br>" + shows[i].broadcaster + "</br>" + shows[i].numberOfEpisodes + "</br>" + empty + "</br></br></br></br>";
}

let btnReveal = document.querySelector(".btnReveal");
let frame = document.querySelector(".series-frame");
let btnHide = document.querySelector(".btnHide");

function reveal() {
    frame.setAttribute("class", "series-frame reveal");
};

function hide() {
    frame.setAttribute("class", "series-frame hide");
};

btnReveal.addEventListener("click", reveal);
btnHide.addEventListener("click", hide);

