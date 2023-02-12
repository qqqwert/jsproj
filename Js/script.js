/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOffilms = +prompt("Сколько фильмов посмотрели", "");

const personMuvieDb = {
    count: numberOffilms,
    movies: {},
    actor: {},
    genres: [],
    privat: false,
};



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

if (personMuvieDb.count < 10) {
    console.log("просмотрено мало фильмов");
} else if (personMuvieDb.count >= 10 && personMuvieDb.count <= 30) {
    console.log("Вы стандартный зритель");
} else if (personMuvieDb >= 30){
    console.log("Вы киноман");
}else{
    console.log("Произошла ошибка");
}




console.log(personMuvieDb);