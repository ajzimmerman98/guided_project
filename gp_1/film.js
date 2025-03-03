const sp = new URLSearchParams(window.location.search);
console.log("sp:", sp); // Log the sp object directly
const id = sp.get("id");
console.log("id:", id); // Log the id value directly

// let producer;
// let title;
// let episode_id;
// let director;
// let release_date;
// let opening_crawl;
// let charactersUl;
// let planetsUl;
const baseUrl = `http://localhost:9001/api/films`;

// addEventListener('DOMContentLoaded', () => {
//   producer = document.querySelector('span#Producer');
//   title = document.querySelector('h1#name');
//   episode_id = document.querySelector('span#Episode');
//   director = document.querySelector('span#Director');
//   release_date = document.querySelector('span#Released');
//   opening_crawl = document.querySelector('span#OpeningCrawl');
//   charactersUl = document.querySelector('ul#Characters_ID');
//   planetsUl = document.querySelector('ul#Planets_ID');
//   const sp = new URLSearchParams(window.location.search);
//   const id = sp.get('id');
// });

async function getFilms() {
  const url = `${baseUrl}/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

const getCharacters = async function (id) {
  const url = `${baseUrl}/${id}/characters`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const characterArrays = json.map((character) => [
      character.id,
      character.name,
    ]);
    console.log(characterArrays);
  } catch (error) {
    console.error(error.message);
  }
};

const getPlanets = async function (id) {
  const url = `${baseUrl}/${id}/planets`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
};

// Call the functions with the id
getFilms(id);
getCharacters(id);
getPlanets(id);
