"use strict";

import { fetchMovies } from "./fetch.js";
import { renderMovies } from "./render.js";

let allMovies = [];

async function init() {
  allMovies = await fetchMovies();
  renderMovies(allMovies);
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allMovies.filter(({ name }) =>
    name.toLowerCase().includes(query)
  );
  renderMovies(filtered);
});

document.getElementById("sortSelect").addEventListener("change", (e) => {
  const value = e.target.value;
  let sorted = [...allMovies];

  if (value === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (value === "rating") {
    sorted.sort((a, b) => (b.rating.average ?? 0) - (a.rating.average ?? 0));
  }

  renderMovies(sorted);
});

init();
