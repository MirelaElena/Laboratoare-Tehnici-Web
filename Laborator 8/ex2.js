var filmFavorit = {
    titlu: 'Black Swan',
    actori: ['Natalie Portman', 'Mila Kunis', 'Vincent Cassel']
}

function printFilm(film) {
    console.log(film.titlu + ' a durat 130 de minute. Actori: ' + 
    film.actori[0] + ', ' + film.actori[1] + ', ' + film.actori[2] + '.');
}

printFilm(filmFavorit);