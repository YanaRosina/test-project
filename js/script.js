"use strict";

//Задача №1


let lastFilm,
    lastFilmRating;


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function() {
        for (let i = 1; i <= 2; i++) {
            lastFilm = prompt('Один из последних просмотренных фильмов?', '');
            lastFilmRating = +prompt('Оцените его (от 0 до 10):');
    
            if (lastFilm != '' && lastFilm.length != 50 && lastFilm != null && lastFilmRating != null && lastFilmRating>= 0 && lastFilmRating<= 10) {
                personalMovieDB.movies[lastFilm] = lastFilmRating;
                console.log('OK!');
            } else {
                console.log('error!!');
                i--;
            }
    
        }
          
    },
    detectPersonalLevel: function() {

        if (numderOfFilms < 10) {
            alert('Просмотренно мало фильмов');
        } else if (numderOfFilms < 30 && numderOfFilms >= 10) {
            alert('Вы классический зритель');
        } else if (numderOfFilms >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка!');
        }
    },
    showMyBD: function() {

        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let gener= prompt(`Ваш любимый жанр под номером ${i} ?`);
            if(gener==='' || gener==null){
                console.log('error!');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = gener;
            }
        }
        personalMovieDB.genres.forEach(function(item,i){
            console.log(`Любимый жанр №${i+1} - это: ${item}!`);
        });

    },
    toggleVisibleMyBD: function() {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true; 
        }
    }

};

//personalMovieDB.start();


//personalMovieDB.rememberMyFilms();



//personalMovieDB.detectPersonalLevel();



//personalMovieDB.writeYourGenres();
//personalMovieDB.showMyBD();
//personalMovieDB.toggleVisibleMyBD();
//personalMovieDB.showMyBD();

//console.log(personalMovieDB.movies); //cheek result