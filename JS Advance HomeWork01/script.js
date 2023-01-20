let movies = [
'The Godfather',
'The Shawshank Redemption', 
'The Dark Knight',
'Pulp Fiction',
'Schindler\'s List',
'The Lord of the Rings: The Return of the King',
'12 Angry Men',
'The Good, the Bad and the Ugly',
'Fight Club',
'The Lord of the Rings: The Fellowship of the Ring'
];

let searchButton = document.getElementById('btn');

let input = document.getElementById('input');

let result = document.createElement('h1');
document.body.appendChild(result);

searchButton.addEventListener('click', function() {
  let movie = input.value;
  let found = false;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].toLowerCase() === movie.toLowerCase()) {
      found = true;
      break;
    }
  }
  if (found) {
    result.innerHTML = 'The movie can be rented';
    result.style.color = 'green';
  } else {
    result.innerHTML = 'The movie can\'t be rented';
    result.style.color = 'red';
  }
});