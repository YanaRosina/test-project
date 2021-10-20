"use strict";
const numderOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
 count: numderOfFilms,
 movies : {},
 actors : {},
 genres : [],
 privat : false
};
//alert(personalMovieDB.count);
