// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const father = document.getElementById('jokeContainer');
  const myObject = {
      method: 'GET',
      headers: {'Accept': 'application/json'}
  }
  fetch(API_URL, myObject).then((response) => response.json()).then((data) => father.innerHTML = data.joke)
};


window.onload = () => {
  fetchJoke()
  // const father = document.getElementById('jokeContainer');
  // father.innerHTML = jokesObj[jokes[1]]
}