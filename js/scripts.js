const butt = document.querySelector('.jokeButton');
const jokeText = document.querySelector('.jokeP');
		//to launch a joke when load the page
		//document. addEventListener('DOMContentLoaded', getJoke);

		butt.addEventListener('click', getJoke);

		function getJoke(){
			fetch('https://icanhazdadjoke.com/', {
				headers: {
					'Accept': 'application/json'
				}
			}).then( data => data.json())
			.then(obj => jokeText.innerHTML = obj.joke)
		}