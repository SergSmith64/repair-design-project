const firstButton = document.getElementById('button-1');
const secondButton = document.getElementById('button-2');
const thirdButton = document.getElementById('button-3');

firstButton.addEventListener('click', () =>  {
  const content = document.getElementById('slider-content')
  content.className = "first-position"
})

secondButton.addEventListener('click', () =>  {
  const content = document.getElementById('slider-content')
  content.className = "second-position"
})

thirdButton.addEventListener('click', () =>  {
  const content = document.getElementById('slider-content')
  content.className = "third-position"
})
