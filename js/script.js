"use strict";

//Задача №1
let numderOfFilms;

let lastFilm,
    lastFilmRating;


let personalMovieDB = {
    count: numderOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numderOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numderOfFilms == '' || numderOfFilms == null || isNaN(numderOfFilms)) {
        numderOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

//start();

function rememberMyFilms() {

    for (let i = 1; i <= 2; i++) {
        lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        lastFilmRating = +prompt('Оцените его:');

        if (lastFilm != '' && lastFilm.length != 50 && lastFilm != null && lastFilmRating != null) {
            personalMovieDB.movies[lastFilm] = lastFilmRating;
            console.log('OK!');
        } else {
            console.log('error!!');
            i--;
        }

    }
}

//rememberMyFilms();

function detectPersonalLevel() {

    if (numderOfFilms < 10) {
        alert('Просмотренно мало фильмов');
    } else if (numderOfFilms < 30 && numderOfFilms >= 10) {
        alert('Вы классический зритель');
    } else if (numderOfFilms >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка!');
    }
}

//detectPersonalLevel();

function showMyBD() {

    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

//showMyBD();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} ?`);
    }
}
writeYourGenres();
showMyBD();

console.log(personalMovieDB.movies); //cheek result