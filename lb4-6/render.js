"use strict";

export function renderMovies(movies) {
  const container = document.getElementById("movies-container");
  container.innerHTML = "";

  movies.forEach(({ name, image, rating, genres }) => {
    const imageUrl = image?.medium ?? "https://via.placeholder.com/210x295?text=No+Image";
    const ratingValue = rating?.average ?? "Н/Д";
    const genreList = genres?.join(", ") ?? "Невідомо";

    const cardHTML = `
      <div class="movie-card">
        <img class="movie-img" src="${imageUrl}" alt="${name}">
        <h3>${name}</h3>
        <p><strong>Рейтинг:</strong> ${ratingValue}</p>
        <p><strong>Жанри:</strong> ${genreList}</p>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}
