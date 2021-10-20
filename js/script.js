"use strict";

//Задача №1
const numderOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let lastFilm,
    lastFilmRating;

let personalMovieDB = {
    count: numderOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i <= 2; i++) {
    lastFilm = prompt('Один из последних просмотренных фильмов?');
    lastFilmRating = +prompt('Оцените его:');
    personalMovieDB.movies[lastFilm] = lastFilmRating;
}

console.log(personalMovieDB.movies); //cheek result