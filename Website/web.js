// Movie data (this would be your available movie options)
const availableMovies = [
    { id: 1, title: "Kaiju No.8", img: "images/movie1.jpg" },
    { id: 2, title: "Stranger Things", img: "images/movie2.jpg" },
    { id: 3, title: "Young Sheldon", img: "images/movie3.jpg" },
    { id: 4, title: "Jujutsu Kaisen", img: "images/movie4.jpg" },
    { id: 5, title: "Haikyuuu!", img: "images/movie5.jpg" }
];

// Current "My List"
let myList = [];

// Select the dropdown and button elements
const movieSelect = document.getElementById("movieSelect");
const addMovieBtn = document.getElementById("addMovieBtn");
const movieListContainer = document.getElementById("movieList");

// Function to populate the dropdown with available movies
function populateMovieSelect() {
    availableMovies.forEach(movie => {
        const option = document.createElement("option");
        option.value = movie.id;
        option.textContent = movie.title;
        movieSelect.appendChild(option);
    });
}

// Display the movies in the "My List"
function displayMyList() {
    movieListContainer.innerHTML = ""; // Clear the current list
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

// Add movie to "My List"
addMovieBtn.addEventListener("click", () => {
    const selectedMovieId = parseInt(movieSelect.value);
    const movieToAdd = availableMovies.find(movie => movie.id === selectedMovieId);
    if (movieToAdd && !myList.some(movie => movie.id === movieToAdd.id)) {
        myList.push(movieToAdd); // Add movie to the list
        displayMyList(); // Re-render the list
    }
});

// Remove movie from "My List"
function removeMovie(movieId) {
    myList = myList.filter(movie => movie.id !== movieId);
    displayMyList(); // Re-render the list after removal
}

// Initialize the page
populateMovieSelect(); // Populate the dropdown with available movies
displayMyList(); // Display the initial list (if any)
