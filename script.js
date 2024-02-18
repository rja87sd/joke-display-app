"use strict";

const BASE_URL = "https://v2.jokeapi.dev/joke/Any?safe-mode";

async function fetchJoke() {
  try {
    const URL = `${BASE_URL}&lang=en&amount=1&type=single`;
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error with a status of ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch API data: ", error);
  }
}

// This one line of code took me nearly an hour to figure out. Had help from a dev friend, Adam Delin.
fetchJoke().then((jokeToDisplay) => displayJoke(jokeToDisplay));

function displayJoke(jokeData) {
  console.log(jokeData);
  const container = document.getElementById("joke-container");
  container.innerHTML = "";

  const jokeElement = document.createElement("div");
  jokeElement.innerHTML = `
        
        <h2>
            Joke of the Day
        </h2>
        <h3>
            Brought to you by jokeapi.dev!
        </h3>
        <h4>
            (Refresh your browser to see a new joke.)
        </h4>
        <p>
            ${jokeData.joke}
        </p>
        
        `;
  container.appendChild(jokeElement);
}
