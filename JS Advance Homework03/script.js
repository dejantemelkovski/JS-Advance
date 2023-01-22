let changeColor = (element, color = 'black') => {
    element.style.color = color;
  };
  let changeSize = (element, textSize = 24) => {
    element.style.fontSize = textSize + 'px';
  };
  let button = document.getElementById('btn');

  let inputColor = document.getElementById('color');

  let inputSize = document.getElementById('pxSize');
  
  let header = document.createElement('h1');
  header.innerHTML = 'Hey Student\'s good job. G5 is the best group at SEDC :)';
  document.body.appendChild(header);
  button.addEventListener('click', () => {
    changeColor(header, inputColor.value);
    changeSize(header, inputSize.value);
  });