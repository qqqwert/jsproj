'use strict';

let numberOffilms;

function start(){
    numberOffilms = +prompt("Сколько фильмов посмотрели", "");

    while (numberOffilms==''|| numberOffilms==null || isNaN(numberOffilms)){
        numberOffilms = +prompt("Сколько фильмов посмотрели", "");
    }
}
start();

const personMuvieDb = {
    count: numberOffilms,
    movies: {},
    actor: {},
    genres: [],
    privat: true,
};

function remembrFilm(){

for (let i = 0; i < 2; i++) {
    const a = prompt("Последний фильм", ""),
        b = prompt("Дайте ему оценку", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personMuvieDb.movies[a] = b;
        console.log("все норм");
    } else {
        console.log('Erooorrr');
        i--;
    }
}
}

function personaLevel(){

if (personMuvieDb.count < 10) {
    console.log("просмотрено мало фильмов");
} else if (personMuvieDb.count >= 10 && personMuvieDb.count <= 30) {
    console.log("Вы стандартный зритель");
} else if (personMuvieDb >= 30){
    console.log("Вы киноман");
}else{
    console.log("Произошла ошибка");
}
}

function showMyDB(hiden){
    if(!hiden){
        console.log(personMuvieDb);
    }
}

showMyDB(personMuvieDb.privat);