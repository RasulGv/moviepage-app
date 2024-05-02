const apiKey="cf77d271"
const searchButton=document.querySelector("#searchButton")
const searchInput=document.querySelector("#searchInput")




async function movie(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.Search);

        
        const movieContainer = document.getElementById('movieContainer');
        movieContainer.innerHTML = '';

        
        data.Search.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <h3>${movie.Title}</h3>
                <p>Year: ${movie.Year}</p>
                <p>Type: ${movie.Type}</p>
                <img src="${movie.Poster}" alt="${movie.Title}">
            `;

            movieContainer.appendChild(movieCard);
        });

    } catch (err) {
        console.log(err);
    }
}

function act() {
    const kin = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput.value}`;
    movie(kin);
}

searchButton.addEventListener('click', () => {
    act();
});
