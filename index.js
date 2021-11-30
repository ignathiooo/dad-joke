const jokeBtn = document.getElementById('jokeBtn')
const jokeText = document.getElementById('joke')

jokeBtn.addEventListener('click',generateJoke);

generateJoke()

async function generateJoke(){
  const jokeSrc = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const joke = await jokeSrc.json();

  console.log(joke);
  jokeText.innerHTML = joke.joke;
}