"use strict";

const API_URL = "https://api.tvmaze.com/shows";

export async function fetchMovies() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Помилка завантаження даних з API.");
    return await response.json();
  } catch (error) {
    document.getElementById("error-message").textContent = error.message;
    return [];
  }
}
