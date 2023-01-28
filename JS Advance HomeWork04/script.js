let table = document.createElement('table');
table.border = '1px';
table.setAttribute("class", "style")
document.body.appendChild(table);
let button = document.getElementById('getPlanets');

let nextButton = document.getElementById('nextButton');
nextButton.style.display = 'none';

let previousButton = document.getElementById('previousButton');
previousButton.style.display = 'none';

let planets = [];
let page = 1;
function getPlanets(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      planets = data.results;
      printPlanets(planets);
      CreateTable(response)
    });
}

function printPlanets(planets) {
  let table = document.querySelector('table');
  table.innerHTML = '';
  let tr = document.createElement('tr');
  let th1 = document.createElement('th');
  th1.innerHTML = 'Planet Name';
  let th2 = document.createElement('th');
  th2.innerHTML = 'Population';
  let th3 = document.createElement('th');
  th3.innerHTML = 'Climate';
  let th4 = document.createElement('th');
  th4.innerHTML = 'Gravity';
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  table.appendChild(tr);
  for (let i = 0; i < planets.length; i++) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerHTML = planets[i].name;
    let td2 = document.createElement('td');
    td2.innerHTML = planets[i].population;
    let td3 = document.createElement('td');
    td3.innerHTML = planets[i].climate;
    let td4 = document.createElement('td');
    td4.innerHTML = planets[i].gravity;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
  }
}

button.addEventListener('click', function () {
  getPlanets('https://swapi.dev/api/planets/?page=1');
  button.style.display = 'none';
  nextButton.style.display = 'block';
});
nextButton.addEventListener('click', function () {
  page++;
  getPlanets('https://swapi.dev/api/planets/?page=' + page);
  nextButton.style.display = 'none';
  previousButton.style.display = 'block';
});
previousButton.addEventListener('click', function () {
  page--;
  getPlanets('https://swapi.dev/api/planets/?page=' + page);
  previousButton.style.display = 'none';
  nextButton.style.display = 'block';
});