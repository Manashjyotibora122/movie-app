const movieDiv = document.getElementById("movie");

async function searchMovie() {

const movieName = document.getElementById("movieInput").value;

if(movieName === ""){
movieDiv.innerHTML = "<h2>Please enter a movie name</h2>";
return;
}

try{

const response = await fetch(
`https://www.omdbapi.com/?t=${movieName}&apikey=7aef26df`
);

const data = await response.json();

if(data.Response === "True"){

movieDiv.innerHTML = `
<img src="${data.Poster}" width="200">

<h2>${data.Title}</h2>

<p><b>Year:</b> ${data.Year}</p>

<p><b>Genre:</b> ${data.Genre}</p>

<p><b>Director:</b> ${data.Director}</p>

<p><b>Actors:</b> ${data.Actors}</p>

<p><b>IMDb Rating:</b> ⭐ ${data.imdbRating}</p>

<p><b>Plot:</b> ${data.Plot}</p>
`;

}
else{

movieDiv.innerHTML = "<h2>❌ Movie not found</h2>";

}

}
catch{

movieDiv.innerHTML = "<h2>⚠️ Error loading movie data</h2>";

}

}
