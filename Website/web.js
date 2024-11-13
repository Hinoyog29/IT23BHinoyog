const availableMovies = [
    // Trending Now Movies
    { id: 1, title: "The Mitchells vs. The Machines", img: "images/Movie1.jpg" },
    { id: 2, title: "The Falcon and Winter Soldier", img: "images/Movie2.jpg" },
    { id: 3, title: "Nomadland", img: "images/Movie3.jpg" },
    { id: 4, title: "Nobody", img: "images/Movie4.jpg" },
    { id: 5, title: "Demon Slayer!", img: "images/Movie5.jpg" },
    { id: 6, title: "Money Heist", img: "images/Movie6.jpg" },
    { id: 7, title: "Luis Miguel-Series", img: "images/Movie7.jpg" },
    { id: 8, title: "Lucifer", img: "images/Movie8.jpg" },
    { id: 9, title: "Haunted: Latin America", img: "images/Movie9.jpg" },
    { id: 10, title: "Who Killed Sara?", img: "images/Movie10.jpg" },
    
    // Action Movies
    { id: 11, title: "Kaiju No.8", img: "images/movie15.jpg" },
    { id: 12, title: "The Falcon and Winter Soldier", img: "images/Movie2.jpg" },
    { id: 13, title: "Nobody", img: "images/Movie4.jpg" },
    { id: 14, title: "Jujutsu Kaisen", img: "images/movie18.jpg" },
    { id: 15, title: "Transformers", img: "images/movie13.jpg" },
    { id: 16, title: "Cobra Kai", img: "images/movie11.jpg" },
    { id: 17, title: "Money Heist", img: "images/Movie6.jpg" },
    { id: 18, title: "Without Remorse", img: "images/movie21.jpg" },
    
    // Comedy Movies
    { id: 19, title: "Kaiju No.8", img: "images/Movie15.jpg" },
    { id: 20, title: "The Mitchells vs. The Machines", img: "images/Movie1.jpg" },
    { id: 21, title: "Young Sheldon", img: "images/Movie17.jpg" },
    { id: 22, title: "Jujutsu Kaisen", img: "images/Movie18.jpg" },
    { id: 23, title: "Stranger Things", img: "images/Movie16.jpg" },
    { id: 24, title: "Lucifer", img: "images/Movie8.jpg" },
    { id: 25, title: "Never Have I Ever", img: "images/Movie23.png" },
    { id: 26, title: "Big Bang Theory", img: "images/Movie24.jfif" }
];

let myList = [];

const movieSelect = document.getElementById("movieSelect");
const addMovieBtn = document.getElementById("addMovieBtn");
const movieListContainer = document.getElementById("movieList");


function loadMyList() {
    const storedList = JSON.parse(localStorage.getItem('myMovies'));
    if (storedList) {
        myList = storedList;
    }
    displayMyList();
}


function saveMyList() {
    localStorage.setItem('myMovies', JSON.stringify(myList));
}


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
        saveMyList();  
        displayMyList();  
    }
});


function removeMovie(movieId) {
    myList = myList.filter(movie => movie.id !== movieId);
    saveMyList();  
    displayMyList();  
}


document.addEventListener('DOMContentLoaded', () => {
    loadMyList();
    populateMovieSelect();
});
