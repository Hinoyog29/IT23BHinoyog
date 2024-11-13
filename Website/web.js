
const availableMovies = [
    { id: 1, title: "Kaiju No.8", img: "images/movie1.jpg" },
    { id: 2, title: "Stranger Things", img: "images/movie2.jpg" },
    { id: 3, title: "Young Sheldon", img: "images/movie3.jpg" },
    { id: 4, title: "Jujutsu Kaisen", img: "images/movie4.jpg" },
    { id: 5, title: "Haikyuuu!", img: "images/movie5.jpg" }
];


let myList = [];


const movieSelect = document.getElementById("movieSelect");
const addMovieBtn = document.getElementById("addMovieBtn");
const movieListContainer = document.getElementById("movieList");


function populateMovieSelect() {
    availableMovies.forEach(movie => {
        const option = document.createElement("option");
        option.value = movie.id;
        option.textContent = movie.title;
        movieSelect.appendChild(option);
    });
}


function displayMyList() {
    movieListContainer.innerHTML = ""; 
    myList.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}">
            <p>${movie.title}</p>
            <button onclick="removeMovie(${movie.id})">Remove</button>
        `;
        movieListContainer.appendChild(movieDiv);
    });
}


addMovieBtn.addEventListener("click", () => {
    const selectedMovieId = parseInt(movieSelect.value);
    const movieToAdd = availableMovies.find(movie => movie.id === selectedMovieId);
    if (movieToAdd && !myList.some(movie => movie.id === movieToAdd.id)) {
        myList.push(movieToAdd); 
        displayMyList(); 
    }
});


function removeMovie(movieId) {
    myList = myList.filter(movie => movie.id !== movieId);
    displayMyList(); 
}


populateMovieSelect(); 
displayMyList(); 
