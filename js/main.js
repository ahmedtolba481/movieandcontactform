const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
fetch(url, {
  method: "GET",
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWE0MjkwYWViYjk4ZTU0MTVkZDM2ZmQzMDRjN2U4YiIsIm5iZiI6MTc1OTQyMzgwMi43Miwic3ViIjoiNjhkZWFkM2FlMzg2MWQ3OTc4OTkxYmViIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.63kXKo7dTvYlNKW813rIceDqCf2reQbnOAtDBNEHQAw",
    accept: "application/json"
  }
})
  .then((res) => res.json())
  .then((data) => {
    let moviesDiv = document.getElementById("movies");
    data.results.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("card", "mb-3");
      movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top w-100" alt="${movie.title}">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.overview}</p>
        </div>
      `;
      moviesDiv.appendChild(movieCard);
    });
  })
  .catch((err) => console.error("Error:", err));



