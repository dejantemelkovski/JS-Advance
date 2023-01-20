let button = document.getElementById('btn');
button.addEventListener('click', function() {
  fetch('https://swapi.dev/api/people/1')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let h1 = document.createElement('h1');
      h1.innerHTML = myJson.name;
      document.body.appendChild(h1);
      let table = document.createElement('table');
      table.border = '1px';
      let tr1 = document.createElement('tr');
      let td1 = document.createElement('td');
      td1.innerHTML = 'Height';
      let td2 = document.createElement('td');
      td2.innerHTML = myJson.height;
      tr1.appendChild(td1);
      tr1.appendChild(td2);
      let tr2 = document.createElement('tr');
      let td3 = document.createElement('td');
      td3.innerHTML = 'Weight';
      let td4 = document.createElement('td');
      td4.innerHTML = myJson.mass;
      tr2.appendChild(td3);
      tr2.appendChild(td4);
      let tr3 = document.createElement('tr');
      let td5 = document.createElement('td');
      td5.innerHTML = 'Eye Color';
      let td6 = document.createElement('td');
      td6.innerHTML = myJson.eye_color;
      tr3.appendChild(td5);
      tr3.appendChild(td6);
      let tr4 = document.createElement('tr');
      let td7 = document.createElement('td');
      td7.innerHTML = 'Hair Color';
      let td8 = document.createElement('td');
      td8.innerHTML = myJson.hair_color;
      tr4.appendChild(td7);
      tr4.appendChild(td8);
      table.appendChild(tr1);
      table.appendChild(tr2);
      table.appendChild(tr3);
      table.appendChild(tr4);
      document.body.appendChild(table);
    });
});