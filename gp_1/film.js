const sp = new URLSearchParams(window.location.search);
const id = sp.get("id");

async function getFilms(id) {
  const url = `http://localhost:9001/api/films/${id}`;

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
  const url = `http://localhost:9001/api/${id}/characters`;

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

const getPlanets = async function (id) {
  const url = `http://localhost:9001/api/films/${id}/planets`;

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
